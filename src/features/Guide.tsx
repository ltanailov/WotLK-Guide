import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactElement, RefObject } from 'react'
import clsx from 'clsx'

import Icon from '../components/Icon'
import Map from '../components/Map'
import Step from '../components/Step'
import QuestLogButton from '../components/QuestLogButton'
import ProgressBar from '../components/ProgressBar'
import { getGuide, nextGuide, prevGuide } from '../lib/guides'
import { buildSections, filterSteps } from '../lib/sections'
import { buildJourney, stopForLevel } from '../lib/journey'
import { deriveHearthstone, deriveQuestLog } from '../lib/progress'
import { dbUrl } from '../lib/db'
import { getAreaName, getMapUrl, getZoneName } from '../lib/reference'
import { useTooltips } from '../hooks/useTooltips'
import { CLASS_COLORS, MARKER_STYLE, raceIconSrc } from '../Constants'
import type {
    GuideType,
    IMapMarker,
    IGuideProps,
    IGuide,
    ISection,
    IStepGroup,
    IFilteredStep,
    IJourney,
    IJourneyStop,
} from '../Types'

const PANEL: string = 'rounded-xl border border-slate-700 bg-slate-800/40 p-4'

const Guide = ({ character, onExit, onNavigate }: IGuideProps): ReactElement => {
    const mapRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)
    const blockRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)
    const [layout, setLayout] = useState<{
        headerH: number
        mapH: number
        blockH: number
        isDesktop: boolean
    }>({ headerH: 56, mapH: 0, blockH: 0, isDesktop: false })

    useEffect(() => {
        const measure = (): void => {
            const header: HTMLElement | null = document.querySelector('header')
            setLayout({
                headerH: header ? Math.round(header.getBoundingClientRect().height) : 56,
                mapH: mapRef.current?.offsetHeight ?? 0,
                blockH: blockRef.current?.offsetHeight ?? 0,
                isDesktop: window.matchMedia('(min-width: 1024px)').matches,
            })
        }
        measure()
        const ro: ResizeObserver = new ResizeObserver(measure)
        if (mapRef.current) ro.observe(mapRef.current)
        if (blockRef.current) ro.observe(blockRef.current)
        window.addEventListener('resize', measure)
        return () => {
            ro.disconnect()
            window.removeEventListener('resize', measure)
        }
    }, [])

    const GAP_MAP_HEADER: number = 24
    const GAP_BLOCK_MAP: number = 12
    const mapTop: number = layout.isDesktop ? 80 : layout.headerH + GAP_MAP_HEADER
    const blockTop: number = layout.isDesktop
        ? 80
        : layout.headerH + GAP_MAP_HEADER + layout.mapH + GAP_BLOCK_MAP
    const shadeTop: number = 0
    const shadeHeight: number | undefined = layout.isDesktop ? undefined : blockTop + layout.blockH

    const guide: IGuide | undefined = getGuide(character.guide)

    const sections: ISection[] = useMemo(
        () => (guide ? buildSections(filterSteps(guide, character)) : []),
        [guide, character],
    )

    const section: ISection = sections[character.section]
    const markers: IMapMarker[] =
        section?.groups.map((group: IStepGroup) => ({
            number: group.marker,
            x: group.x,
            y: group.y,
        })) ?? []

    const [hovered, setHovered] = useState<number | null>(null)

    const groupRefs: RefObject<Record<number, HTMLDivElement | null>> = useRef<
        Record<number, HTMLDivElement | null>
    >({})
    const scrollToMarker = (marker: number): void => {
        groupRefs.current[marker]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const scrollMarginTop: number = blockTop + layout.blockH + 12

    useTooltips(`${character.guide}:${character.section}`)

    const questLog: number[] = useMemo(
        () => deriveQuestLog(sections, character.section),
        [sections, character.section],
    )
    const hearthstone: number = useMemo(
        () => (guide ? deriveHearthstone(sections, character.section, guide, character) : 0),
        [guide, sections, character],
    )

    const journey: IJourney = useMemo(() => buildJourney(character), [character])

    const levelAt = (guideName: GuideType, sectionIndex: number): number =>
        journey.stops.find(
            (stop: IJourneyStop) => stop.guide === guideName && stop.section === sectionIndex,
        )?.level ?? 1
    const sectionCount = (guideName: GuideType): number =>
        journey.stops.filter((stop: IJourneyStop) => stop.guide === guideName).length

    const forwardGuide: IGuide | undefined = guide ? nextGuide(guide) : undefined
    const backwardGuide: IGuide | undefined = guide ? prevGuide(guide, character) : undefined

    const atFirstSection: boolean = character.section <= 0
    const atLastSection: boolean = character.section >= sections.length - 1
    const canGoBack: boolean = !atFirstSection || !!backwardGuide
    const canGoForward: boolean = !atLastSection || !!forwardGuide

    const navigate = (guideName: GuideType, sectionIndex: number): void => {
        onNavigate(guideName, sectionIndex, levelAt(guideName, sectionIndex))
    }

    const goBack = (): void => {
        if (!atFirstSection) navigate(character.guide, character.section - 1)
        else if (backwardGuide) navigate(backwardGuide.name, sectionCount(backwardGuide.name) - 1)
    }

    const goForward = (): void => {
        if (!atLastSection) navigate(character.guide, character.section + 1)
        else if (forwardGuide) navigate(forwardGuide.name, 0)
    }

    const seekLevel = (level: number): void => {
        const stop: IJourneyStop | undefined = stopForLevel(journey, level)
        if (stop) onNavigate(stop.guide, stop.section, stop.level)
    }

    return (
        <div className={'flex w-full max-w-6xl flex-col gap-3 lg:flex-row lg:items-start'}>
            <div
                ref={mapRef}
                style={{ top: mapTop }}
                className={clsx(PANEL, 'sticky z-30 flex flex-col gap-2 lg:w-2/3 lg:shrink-0')}
            >
                {section ? (
                    <>
                        <div className={'flex items-center gap-3'}>
                            <span className={'shrink-0 text-sm font-bold text-slate-100'}>
                                {getZoneName(section.zoneID)}
                            </span>
                            <ProgressBar
                                level={character.level}
                                maxLevel={journey.maxLevel}
                                onSeek={seekLevel}
                                className={'flex-1'}
                            />
                        </div>

                        <div className={'relative'}>
                            <Map
                                src={getMapUrl(section.zoneID) ?? ''}
                                alt={getZoneName(section.zoneID)}
                                markers={markers}
                                activeMarker={hovered}
                                onMarkerHover={setHovered}
                                onMarkerClick={scrollToMarker}
                            />

                            <button
                                type={'button'}
                                onClick={goBack}
                                disabled={!canGoBack}
                                aria-label={'Previous section'}
                                className={
                                    'group absolute inset-y-0 left-0 z-10 flex w-14 items-center justify-start bg-linear-to-r from-slate-900/75 to-transparent text-yellow-400 transition-opacity disabled:pointer-events-none disabled:opacity-0 cursor-pointer'
                                }
                            >
                                <Icon
                                    src={'/icons/ui/IconChevronRight.svg'}
                                    className={
                                        'ml-1 h-8 w-8 rotate-180 transition-transform group-hover:scale-125'
                                    }
                                />
                            </button>
                            <button
                                type={'button'}
                                onClick={goForward}
                                disabled={!canGoForward}
                                aria-label={'Next section'}
                                className={
                                    'group absolute inset-y-0 right-0 z-10 flex w-14 items-center justify-end bg-linear-to-l from-slate-900/75 to-transparent text-yellow-400 transition-opacity disabled:pointer-events-none disabled:opacity-0 cursor-pointer'
                                }
                            >
                                <Icon
                                    src={'/icons/ui/IconChevronRight.svg'}
                                    className={
                                        'mr-1 h-8 w-8 transition-transform group-hover:scale-125'
                                    }
                                />
                            </button>
                        </div>
                    </>
                ) : (
                    <p className={'text-center text-sm text-slate-500'}>
                        {guide ? 'No section to show.' : `Guide not found: ${character.guide}`}
                    </p>
                )}
            </div>

            <div className={'relative flex min-w-0 flex-1 flex-col gap-3'}>
                <div
                    aria-hidden
                    style={{ top: shadeTop, height: shadeHeight }}
                    className={
                        'pointer-events-none fixed left-0 z-20 w-full bg-linear-to-b from-slate-900 from-75% to-transparent lg:h-38'
                    }
                />

                <div
                    ref={blockRef}
                    style={{ top: blockTop }}
                    className={
                        'sticky z-30 flex flex-col gap-2.5 rounded-xl border border-slate-700 bg-slate-800/60 p-3 backdrop-blur'
                    }
                >
                    <div className={'flex items-center justify-between gap-3'}>
                        <div className={'flex min-w-0 items-center gap-2.5'}>
                            <span
                                className={
                                    'h-9 w-9 shrink-0 overflow-hidden rounded-md ring-1 ring-inset ring-black/40'
                                }
                                style={{
                                    boxShadow: `inset 0 0 0 2px ${CLASS_COLORS[character.class]}`,
                                }}
                            >
                                <img
                                    src={raceIconSrc(character.race, character.gender)}
                                    alt={`${character.race} ${character.gender}`}
                                    className={'h-full w-full object-cover'}
                                />
                            </span>
                            <div className={'flex min-w-0 flex-col'}>
                                <span className={'truncate text-sm font-bold text-slate-100'}>
                                    {character.name}
                                </span>
                                <span className={'truncate text-xs text-slate-400'}>
                                    {character.race} {character.class} · Level {character.level}
                                </span>
                            </div>
                        </div>
                        <button
                            type={'button'}
                            onClick={onExit}
                            aria-label={'Change character'}
                            title={'Change character'}
                            className={
                                'flex shrink-0 cursor-pointer items-center justify-center self-center rounded p-1.5 text-slate-400 transition-colors hover:text-slate-200'
                            }
                        >
                            <Icon src={'/icons/ui/IconOptions.svg'} className={'h-5 w-5'} />
                        </button>
                    </div>

                    {section && (
                        <div className={'flex flex-wrap items-center gap-2'}>
                            <a
                                href={dbUrl('zone', hearthstone)}
                                data-db={`zone=${hearthstone}`}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                                title={'Current Hearthstone'}
                                className={
                                    'flex items-center gap-1.5 rounded-md border border-slate-600 px-2 py-1 text-xs font-semibold text-purple-300 hover:border-slate-500'
                                }
                            >
                                <img
                                    src={'/icons/steps/IconHearthstone.png'}
                                    alt={'Hearthstone'}
                                    className={'h-4 w-4 object-contain'}
                                />
                                {getAreaName(hearthstone)}
                            </a>
                            <QuestLogButton questLog={questLog} />
                        </div>
                    )}
                </div>

                {section && (
                    <div className={clsx(PANEL, 'flex flex-col gap-4')}>
                        {section.groups.map((group: IStepGroup) => (
                            <div
                                key={group.marker}
                                ref={(el) => {
                                    groupRefs.current[group.marker] = el
                                }}
                                style={{ scrollMarginTop }}
                                onMouseEnter={() => setHovered(group.marker)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className={'mb-1.5 flex items-center gap-2'}>
                                    <span
                                        className={clsx(
                                            'flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] leading-none font-bold transition-transform duration-150',
                                            hovered === group.marker && 'scale-125',
                                        )}
                                        style={MARKER_STYLE}
                                    >
                                        {group.marker}
                                    </span>
                                    <span className={'text-xs font-semibold text-slate-400'}>
                                        {group.areaID
                                            ? getAreaName(group.areaID)
                                            : getZoneName(section.zoneID)}
                                    </span>
                                </div>
                                <ul className={'flex flex-col gap-1.5'}>
                                    {group.steps.map((fs: IFilteredStep) => (
                                        <Step key={fs.filteredIndex} step={fs.step} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Guide
