import { startGuideNameFor } from '../Constants'
import type { GuideType, ICharacter, IGuide } from '../Types'

const guideModules: Record<string, string> = import.meta.glob('/guide/**/*.guide', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>

const byName: Record<string, IGuide> = {}

for (const text of Object.values(guideModules)) {
    try {
        const guide: IGuide = JSON.parse(text) as IGuide
        if (guide && guide.name && Array.isArray(guide.stepList)) {
            byName[guide.name] = guide
        }
    } catch {
        continue
    }
}

export const getGuide = (name: GuideType): IGuide | undefined => byName[name]

export const allGuides = (): IGuide[] => Object.values(byName)

export const nextGuide = (guide: IGuide): IGuide | undefined => byName[guide.next]

export const starterGuideFor = (character: ICharacter): IGuide | undefined =>
    getGuide(startGuideNameFor(character))

export const prevGuide = (guide: IGuide, character: ICharacter): IGuide | undefined => {
    const candidates: IGuide[] = allGuides().filter((g: IGuide) => g.next === guide.name)
    return (
        candidates.find((g: IGuide) => g.race === character.race && g.class === character.class) ??
        candidates.find((g: IGuide) => g.race === character.race && !g.class) ??
        candidates.find((g: IGuide) => g.class === character.class && !g.race) ??
        candidates.find((g: IGuide) => !g.race && !g.class)
    )
}
