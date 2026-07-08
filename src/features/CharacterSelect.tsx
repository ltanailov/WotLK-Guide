import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactElement, ReactNode, RefObject } from 'react'
import clsx from 'clsx'

import Button from '../components/Button'
import Card from '../components/Card'
import CharacterCard from '../components/CharacterCard'
import Input from '../components/Input'
import Tabs from '../components/Tabs'
import Toggle from '../components/Toggle'
import {
    CLASSES,
    CLASSES_BY_RACE,
    CLASS_COLORS,
    FACTIONS,
    GENDERS,
    RACES_BY_FACTION,
    classIconSrc,
    factionIconSrc,
    raceIconSrc,
} from '../Constants'
import type {
    ICharacter,
    ClassType,
    FactionType,
    GenderType,
    RaceType,
    ISavedCharacter,
    IRosterProps,
    ICharacterFormProps,
    ICharacterSelectProps,
} from '../Types'

const MAX_NAME_LENGTH: number = 12

const formatName = (raw: string): string => {
    const letters: string = raw
        .replace(/[^\p{Script=Latin}\p{Script=Cyrillic}]/gu, '')
        .slice(0, MAX_NAME_LENGTH)
    if (letters.length === 0) return ''
    return letters[0].toUpperCase() + letters.slice(1).toLowerCase()
}

const Section = ({
    title,
    action,
    className,
    children,
}: {
    title: string
    action?: ReactNode
    className?: string
    children: ReactNode
}): ReactElement => (
    <section className={clsx('flex flex-col gap-3', className)}>
        <div className={'flex items-center justify-between gap-4'}>
            <h2 className={'text-xs font-bold tracking-widest text-amber-400 uppercase'}>
                {title}
            </h2>
            {action}
        </div>
        {children}
    </section>
)

const Roster = ({
    characters,
    selectedId,
    onSelect,
    onDelete,
    onGoToGuide,
}: IRosterProps): ReactElement => {
    const listRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)
    const [isHiddenAbove, setIsHiddenAbove] = useState<boolean>(false)
    const [isHiddenBelow, setIsHiddenBelow] = useState<boolean>(false)

    const updateFades: () => void = useCallback(() => {
        const el: HTMLDivElement | null = listRef.current
        if (!el) return
        setIsHiddenAbove(el.scrollTop > 1)
        setIsHiddenBelow(el.scrollTop + el.clientHeight < el.scrollHeight - 1)
    }, [])

    useEffect(() => {
        updateFades()
        window.addEventListener('resize', updateFades)
        return () => window.removeEventListener('resize', updateFades)
    }, [updateFades, characters])

    return (
        <aside className={'flex w-full shrink-0 flex-col lg:relative lg:w-64'}>
            <div className={'flex flex-1 flex-col gap-3 lg:absolute lg:inset-0'}>
                <h2 className={'text-xs font-bold tracking-widest text-amber-400 uppercase'}>
                    Characters
                </h2>

                {characters.length === 0 ? (
                    <p
                        className={
                            'flex flex-1 items-center justify-center rounded-lg border border-dashed border-slate-700 p-4 text-center text-sm text-slate-500'
                        }
                    >
                        No characters yet
                    </p>
                ) : (
                    <div className={'relative min-h-0 flex-1'}>
                        <div
                            ref={listRef}
                            onScroll={updateFades}
                            className={
                                'no-scrollbar grid h-full max-h-138 grid-cols-1 content-start gap-2 overflow-y-auto sm:max-h-85.5 sm:grid-cols-2 lg:max-h-none lg:grid-cols-1'
                            }
                        >
                            {characters.map((character: ISavedCharacter) => (
                                <CharacterCard
                                    key={character.id}
                                    character={character}
                                    isSelected={character.id === selectedId}
                                    onSelect={() => onSelect(character)}
                                    onDelete={() => onDelete(character.id)}
                                />
                            ))}
                        </div>

                        <div
                            className={clsx(
                                'pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-[#151e31] to-transparent transition-opacity',
                                { 'opacity-100': isHiddenAbove, 'opacity-0': !isHiddenAbove },
                            )}
                        />
                        <div
                            className={clsx(
                                'pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-[#151e31] to-transparent transition-opacity',
                                { 'opacity-100': isHiddenBelow, 'opacity-0': !isHiddenBelow },
                            )}
                        />
                    </div>
                )}

                <Button onClick={onGoToGuide} disabled={selectedId === null} className={'w-full'}>
                    Go to Guide
                </Button>
            </div>
        </aside>
    )
}

const CharacterForm = ({ onCreate, onCancel }: ICharacterFormProps): ReactElement => {
    const [faction, setFaction] = useState<FactionType>('Alliance')
    const [gender, setGender] = useState<GenderType>('Male')
    const [race, setRace] = useState<RaceType>(RACES_BY_FACTION.Alliance[0])
    const [cls, setCls] = useState<ClassType>(CLASSES_BY_RACE[RACES_BY_FACTION.Alliance[0]][0])
    const [name, setName] = useState<string>('')

    const races: RaceType[] = RACES_BY_FACTION[faction]
    const availableClasses: Set<ClassType> = useMemo(() => new Set(CLASSES_BY_RACE[race]), [race])

    const selectFaction = (next: FactionType): void => {
        setFaction(next)
        const nextRace: RaceType = RACES_BY_FACTION[next][0]
        setRace(nextRace)
        setCls(CLASSES_BY_RACE[nextRace][0])
    }

    const selectRace = (next: RaceType): void => {
        setRace(next)
        if (!CLASSES_BY_RACE[next].includes(cls)) {
            setCls(CLASSES_BY_RACE[next][0])
        }
    }

    const canCreate: boolean = name.length > 0

    const submit = (): void => {
        if (!canCreate) return
        onCreate({ faction, gender, race, class: cls, name })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                submit()
            }}
            className={'flex flex-1 flex-col gap-5'}
        >
            <Tabs tabs={FACTIONS} value={faction} onChange={selectFaction} icon={factionIconSrc} />

            <div className={'flex items-start gap-3'}>
                <Section title={'Name'} className={'flex-1'}>
                    <Input
                        value={name}
                        onChange={(event) => setName(formatName(event.target.value))}
                        placeholder={'Bruenor'}
                        maxLength={MAX_NAME_LENGTH}
                        autoComplete={'off'}
                        aria-label={'Character name'}
                    />
                </Section>

                <Section title={'Gender'} className={'items-end'}>
                    <Toggle options={GENDERS} value={gender} onChange={setGender} />
                </Section>
            </div>

            <Section title={'Race'}>
                <div className={'grid grid-cols-3 gap-3 sm:grid-cols-5'}>
                    {races.map((raceOption: RaceType) => (
                        <Card
                            key={raceOption}
                            label={raceOption}
                            iconSrc={raceIconSrc(raceOption, gender)}
                            isSelected={raceOption === race}
                            onClick={() => selectRace(raceOption)}
                        />
                    ))}
                </div>
            </Section>

            <Section title={'Class'}>
                <div className={'grid grid-cols-3 gap-3 sm:grid-cols-5'}>
                    {CLASSES.map((classOption: ClassType) => (
                        <Card
                            key={classOption}
                            label={classOption}
                            iconSrc={classIconSrc(classOption)}
                            accentColor={CLASS_COLORS[classOption]}
                            isSelected={classOption === cls}
                            isDisabled={!availableClasses.has(classOption)}
                            onClick={() => setCls(classOption)}
                        />
                    ))}
                </div>
            </Section>

            <div className={'flex gap-3'}>
                <Button type={'submit'} disabled={!canCreate} className={'flex-1'}>
                    Create Character
                </Button>
                <Button variant={'Secondary'} className={'flex-1'} onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}

const CharacterSelect = ({
    characters,
    addCharacter,
    removeCharacter,
    onPlay,
    initialSelectedId,
}: ICharacterSelectProps): ReactElement => {
    const [selectedId, setSelectedId] = useState<string | null>(initialSelectedId ?? null)
    const [formKey, setFormKey] = useState<number>(0)

    const resetForm = (): void => setFormKey((key: number) => key + 1)

    const handleCreate = (character: ICharacter): void => {
        const saved: ISavedCharacter = addCharacter(character)
        setSelectedId(saved.id)
        resetForm()
    }

    const handleDelete = (id: string): void => {
        removeCharacter(id)
        setSelectedId((current: string | null) => (current === id ? null : current))
    }

    const handleGoToGuide = (): void => {
        const selected: ISavedCharacter | undefined = characters.find(
            (character: ISavedCharacter) => character.id === selectedId,
        )
        if (selected) onPlay(selected)
    }

    return (
        <div
            className={
                'flex w-full max-w-6xl flex-col gap-6 rounded-xl border border-slate-700 bg-slate-800/40 p-6 sm:p-8 lg:flex-row'
            }
        >
            <Roster
                characters={characters}
                selectedId={selectedId}
                onSelect={(character) => setSelectedId(character.id)}
                onDelete={handleDelete}
                onGoToGuide={handleGoToGuide}
            />

            <div className={'hidden w-px self-stretch bg-slate-700 lg:block'} />

            <CharacterForm key={formKey} onCreate={handleCreate} onCancel={resetForm} />
        </div>
    )
}

export default CharacterSelect
