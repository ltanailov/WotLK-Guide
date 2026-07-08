import type {
    IGuide,
    IStep,
    ICharacter,
    IFilteredStep,
    ISection,
    IStepGroup,
    ICoordinates,
    IOnlyFor,
} from '../Types'

const MAX_STEPS_PER_SECTION: number = 5

const matchesCharacter = (step: IStep, char: ICharacter): boolean => {
    if (!step.onlyFor || step.onlyFor.length === 0) return true
    return step.onlyFor.some(
        (r: IOnlyFor) => (!r.race || r.race === char.race) && (!r.class || r.class === char.class),
    )
}

export const filterSteps = (guide: IGuide, char: ICharacter): IFilteredStep[] => {
    const out: IFilteredStep[] = []
    guide.stepList.forEach((step: IStep) => {
        if (matchesCharacter(step, char)) out.push({ step, filteredIndex: out.length })
    })
    return out
}

const coordKey = (x: number, y: number): string => `${x},${y}`

export const buildSections = (filtered: IFilteredStep[]): ISection[] => {
    const sections: ISection[] = []
    const seen: Set<string>[] = []

    const addGroup = (section: ISection, seenCoords: Set<string>, fs: IFilteredStep): void => {
        const c: ICoordinates = fs.step.coordinates
        section.groups.push({
            marker: section.groups.length + 1,
            x: c.x,
            y: c.y,
            areaID: c.areaID,
            steps: [fs],
        })
        seenCoords.add(coordKey(c.x, c.y))
    }

    const startSection = (fs: IFilteredStep): void => {
        const section: ISection = { zoneID: fs.step.coordinates.zoneID, groups: [] }
        const seenCoords: Set<string> = new Set<string>()
        sections.push(section)
        seen.push(seenCoords)
        addGroup(section, seenCoords, fs)
    }

    for (const fs of filtered) {
        const c: ICoordinates = fs.step.coordinates
        const current: ISection = sections[sections.length - 1]
        if (!current) {
            startSection(fs)
            continue
        }
        const seenCoords: Set<string> = seen[seen.length - 1]
        const last: IStepGroup = current.groups[current.groups.length - 1]
        const sameAsLast: boolean = c.zoneID === current.zoneID && c.x === last.x && c.y === last.y

        if (sameAsLast) {
            last.steps.push(fs)
        } else if (
            c.zoneID !== current.zoneID ||
            seenCoords.has(coordKey(c.x, c.y)) ||
            current.groups.length >= MAX_STEPS_PER_SECTION
        ) {
            startSection(fs)
        } else {
            addGroup(current, seenCoords, fs)
        }
    }
    return sections
}
