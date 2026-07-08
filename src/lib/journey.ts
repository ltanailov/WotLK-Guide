import type { ICharacter, IGuide, IJourney, IJourneyStop, ISection } from '../Types'
import { starterGuideFor, nextGuide } from './guides'
import { buildSections, filterSteps } from './sections'

export const chainFromStarter = (character: ICharacter): IGuide[] => {
    let guide: IGuide | undefined = starterGuideFor(character)
    const chain: IGuide[] = []
    const seen: Set<string> = new Set<string>()
    while (guide && !seen.has(guide.name)) {
        chain.push(guide)
        seen.add(guide.name)
        guide = nextGuide(guide)
    }
    return chain
}

export const buildJourney = (character: ICharacter): IJourney => {
    const stops: IJourneyStop[] = []
    let level: number = 1
    for (const guide of chainFromStarter(character)) {
        const sections: ISection[] = buildSections(filterSteps(guide, character))
        sections.forEach((section: ISection, index: number) => {
            stops.push({ guide: guide.name, section: index, level })
            for (const group of section.groups) {
                for (const { step } of group.steps) {
                    if (step.type === 'Level Up' && step.description) {
                        const value: number = Number(step.description)
                        if (Number.isFinite(value)) level = Math.max(level, value)
                    }
                }
            }
        })
    }
    const maxLevel: number = Math.max(1, level, ...stops.map((stop: IJourneyStop) => stop.level))
    return { stops, maxLevel }
}

export const stopForLevel = (journey: IJourney, level: number): IJourneyStop | undefined => {
    let best: IJourneyStop | undefined
    for (const stop of journey.stops) {
        if (stop.level <= level && (!best || stop.level > best.level)) best = stop
    }
    return best ?? journey.stops[0]
}
