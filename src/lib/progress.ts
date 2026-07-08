import type { ICharacter, IGuide, ISection } from '../Types'
import { startHearthstoneFor } from '../Constants'

export const deriveQuestLog = (sections: ISection[], upto: number): number[] => {
    const log: Set<number> = new Set<number>()
    for (let i: number = 0; i < upto && i < sections.length; i++) {
        for (const group of sections[i].groups) {
            for (const { step } of group.steps) {
                if (step.questID == null) continue
                if (step.type === 'Accept Quest') log.add(step.questID)
                else if (step.type === 'Turn in Quest') log.delete(step.questID)
            }
        }
    }
    return [...log]
}

export const deriveHearthstone = (
    sections: ISection[],
    upto: number,
    guide: IGuide,
    character: ICharacter,
): number => {
    let hearthstone: number =
        guide.startHearthstone ?? startHearthstoneFor(character.race, character.class)
    for (let i: number = 0; i < upto && i < sections.length; i++) {
        for (const group of sections[i].groups) {
            for (const { step } of group.steps) {
                if (step.setHearthstone != null) hearthstone = step.setHearthstone
            }
        }
    }
    return hearthstone
}
