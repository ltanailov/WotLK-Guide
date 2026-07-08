import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type AppModeType = 'Guide' | 'CharacterSelect'
export type GuideType =
    | 'WotLK Guide - Alliance - Human - (1 - 13)'
    | 'WotLK Guide - Alliance - Dwarf - (1 - 13)'
    | 'WotLK Guide - Alliance - Night Elf - (1 - 13)'
    | 'WotLK Guide - Alliance - Gnome - (1 - 13)'
    | 'WotLK Guide - Alliance - Draenei - (1 - 13)'
    | 'WotLK Guide - Alliance - Death Knight - (55 - 60)'
    | 'WotLK Guide - Alliance - (13 - 20)'
    | 'WotLK Guide - Alliance - (20 - 25)'
    | 'WotLK Guide - Alliance - (25 - 30)'
    | 'WotLK Guide - Alliance - (30 - 35)'
    | 'WotLK Guide - Alliance - (35 - 40)'
    | 'WotLK Guide - Alliance - (40 - 45)'
    | 'WotLK Guide - Alliance - (45 - 50)'
    | 'WotLK Guide - Alliance - (50 - 55)'
    | 'WotLK Guide - Alliance - (55 - 60)'
    | 'WotLK Guide - Alliance - (60 - 62)'
    | 'WotLK Guide - Alliance - (62 - 64)'
    | 'WotLK Guide - Alliance - (64 - 66)'
    | 'WotLK Guide - Alliance - (66 - 68)'
    | 'WotLK Guide - Alliance - (68 - 70)'
    | 'WotLK Guide - Alliance - (70 - 72)'
    | 'WotLK Guide - Alliance - (72 - 74)'
    | 'WotLK Guide - Alliance - (74 - 76)'
    | 'WotLK Guide - Alliance - (76 - 78)'
    | 'WotLK Guide - Alliance - (78 - 80)'
    | 'WotLK Guide - Horde - Orc - (1 - 13)'
    | 'WotLK Guide - Horde - Undead - (1 - 13)'
    | 'WotLK Guide - Horde - Tauren - (1 - 13)'
    | 'WotLK Guide - Horde - Troll - (1 - 13)'
    | 'WotLK Guide - Horde - Blood Elf - (1 - 13)'
    | 'WotLK Guide - Horde - Death Knight - (55 - 60)'
    | 'WotLK Guide - Horde - (13 - 20)'
    | 'WotLK Guide - Horde - (20 - 25)'
    | 'WotLK Guide - Horde - (25 - 30)'
    | 'WotLK Guide - Horde - (30 - 35)'
    | 'WotLK Guide - Horde - (35 - 40)'
    | 'WotLK Guide - Horde - (40 - 45)'
    | 'WotLK Guide - Horde - (45 - 50)'
    | 'WotLK Guide - Horde - (50 - 55)'
    | 'WotLK Guide - Horde - (55 - 60)'
    | 'WotLK Guide - Horde - (60 - 62)'
    | 'WotLK Guide - Horde - (62 - 64)'
    | 'WotLK Guide - Horde - (64 - 66)'
    | 'WotLK Guide - Horde - (66 - 68)'
    | 'WotLK Guide - Horde - (68 - 70)'
    | 'WotLK Guide - Horde - (70 - 72)'
    | 'WotLK Guide - Horde - (72 - 74)'
    | 'WotLK Guide - Horde - (74 - 76)'
    | 'WotLK Guide - Horde - (76 - 78)'
    | 'WotLK Guide - Horde - (78 - 80)'

export type FactionType = 'Alliance' | 'Horde'
export type RaceType =
    | 'Human'
    | 'Dwarf'
    | 'Night Elf'
    | 'Gnome'
    | 'Draenei'
    | 'Orc'
    | 'Undead'
    | 'Tauren'
    | 'Troll'
    | 'Blood Elf'
export type ClassType =
    | 'Warrior'
    | 'Paladin'
    | 'Hunter'
    | 'Rogue'
    | 'Priest'
    | 'Death Knight'
    | 'Shaman'
    | 'Mage'
    | 'Warlock'
    | 'Druid'
export type GenderType = 'Male' | 'Female'

export interface ICharacter {
    faction: FactionType
    gender: GenderType
    race: RaceType
    class: ClassType
    name: string
}

export interface ISavedCharacter extends ICharacter {
    id: string
    level: number
    guide: GuideType
    section: number
}

export type LocaleType = 'deDE' | 'enGB' | 'esES' | 'frFR' | 'ruRU'

export type ActionType =
    'Accept Quest' | 'Do Quest' | 'Turn in Quest' | 'Level Up' | 'Travel' | 'Hearthstone' | 'Note'

export interface IOnlyFor {
    race?: RaceType
    class?: ClassType
}

export interface ICoordinates {
    zoneID: number
    areaID?: number
    x: number
    y: number
}

export interface IStep {
    type: ActionType
    coordinates: ICoordinates
    questID?: number
    description?: string
    setHearthstone?: number
    onlyFor?: IOnlyFor[]
}

export interface IGuide {
    name: GuideType
    locale: LocaleType
    faction: FactionType
    race?: RaceType
    class?: ClassType
    stepList: IStep[]
    startHearthstone?: number
    next: string
}

export interface IStepTypeMeta {
    label: string
    badge: string
    icon: string
    needsQuest?: boolean
}

export interface IFilteredStep {
    step: IStep
    filteredIndex: number
}

export interface IStepGroup {
    marker: number
    x: number
    y: number
    areaID?: number
    steps: IFilteredStep[]
}

export interface ISection {
    zoneID: number
    groups: IStepGroup[]
}

export interface IJourneyStop {
    guide: GuideType
    section: number
    level: number
}

export interface IJourney {
    stops: IJourneyStop[]
    maxLevel: number
}

export interface IZoneEntry {
    filename: string
    id: number
    name: string
}

export interface IAreaEntry {
    name: string
    entry: number
}

export interface IDbLang {
    domain: string
    locale: number | null
}

export interface IMapMarker {
    number: number
    x: number
    y: number
}

export interface IMapProps {
    src: string
    alt?: string
    markers?: IMapMarker[]
    activeMarker?: number | null
    onMarkerHover?: (marker: number | null) => void
    onMarkerClick?: (marker: number) => void
}

export interface ICardProps {
    label: string
    iconSrc: string
    isSelected?: boolean
    isDisabled?: boolean
    accentColor?: string
    onClick?: () => void
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'Primary' | 'Secondary'
    children: ReactNode
}

export interface ICharacterCardProps {
    character: ISavedCharacter
    isSelected?: boolean
    onSelect?: () => void
    onDelete?: () => void
}

export interface IIconProps {
    src: string
    className?: string
}

export interface IProgressBarProps {
    level: number
    maxLevel: number
    onSeek: (level: number) => void
    className?: string
}

export interface ITabsProps<T extends string> {
    tabs: readonly T[]
    value: T
    onChange: (tab: T) => void
    icon?: (tab: T) => string
}

export interface IToggleProps<T extends string> {
    options: readonly T[]
    value: T
    onChange: (option: T) => void
}

export interface IRosterProps {
    characters: ISavedCharacter[]
    selectedId: string | null
    onSelect: (character: ISavedCharacter) => void
    onDelete: (id: string) => void
    onGoToGuide: () => void
}

export interface ICharacterFormProps {
    onCreate: (character: ICharacter) => void
    onCancel: () => void
}

export interface ICharacterSelectProps {
    characters: ISavedCharacter[]
    addCharacter: (character: ICharacter) => ISavedCharacter
    removeCharacter: (id: string) => void
    onPlay: (character: ISavedCharacter) => void
    initialSelectedId?: string | null
}

export interface IGuideProps {
    character: ISavedCharacter
    onExit: () => void
    onNavigate: (guide: GuideType, section: number, level: number) => void
}

export interface IAppStateContext {
    appMode: AppModeType
    setAppMode: (mode: AppModeType) => void
    activeCharacterId: string | null
    setActiveCharacterId: (id: string | null) => void
}
