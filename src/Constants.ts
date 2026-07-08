import type { CSSProperties } from 'react'

import type {
    ActionType,
    FactionType,
    RaceType,
    ClassType,
    GenderType,
    GuideType,
    IStepTypeMeta,
} from './Types'

export const FACTIONS: FactionType[] = ['Alliance', 'Horde']

export const GENDERS: GenderType[] = ['Male', 'Female']

export const CLASSES: ClassType[] = [
    'Warrior',
    'Paladin',
    'Hunter',
    'Rogue',
    'Priest',
    'Death Knight',
    'Shaman',
    'Mage',
    'Warlock',
    'Druid',
]

export const CLASS_COLORS: Record<ClassType, string> = {
    Warrior: '#C79C6E',
    Paladin: '#F58CBA',
    Hunter: '#ABD473',
    Rogue: '#FFF569',
    Priest: '#FFFFFF',
    'Death Knight': '#C41F3B',
    Shaman: '#0070DE',
    Mage: '#69CCF0',
    Warlock: '#9482C9',
    Druid: '#FF7D0A',
}

const RACE_SLUG: Record<RaceType, string> = {
    Human: 'human',
    Dwarf: 'dwarf',
    'Night Elf': 'nightelf',
    Gnome: 'gnome',
    Draenei: 'draenei',
    Orc: 'orc',
    Undead: 'undead',
    Tauren: 'tauren',
    Troll: 'troll',
    'Blood Elf': 'bloodelf',
}

const CLASS_SLUG: Record<ClassType, string> = {
    Warrior: 'warrior',
    Paladin: 'paladin',
    Hunter: 'hunter',
    Rogue: 'rogue',
    Priest: 'priest',
    'Death Knight': 'deathknight',
    Shaman: 'shaman',
    Mage: 'mage',
    Warlock: 'warlock',
    Druid: 'druid',
}

export const raceIconSrc = (race: RaceType, gender: GenderType): string =>
    `/icons/race/${RACE_SLUG[race]}_${gender.toLowerCase()}.jpg`

export const classIconSrc = (cls: ClassType): string => `/icons/class/${CLASS_SLUG[cls]}.jpg`

export const factionIconSrc = (faction: FactionType): string =>
    `/icons/faction/${faction.toLowerCase()}.jpg`

export const RACES_BY_FACTION: Record<FactionType, RaceType[]> = {
    Alliance: ['Human', 'Dwarf', 'Night Elf', 'Gnome', 'Draenei'],
    Horde: ['Orc', 'Undead', 'Tauren', 'Troll', 'Blood Elf'],
}

export const CLASSES_BY_RACE: Record<RaceType, ClassType[]> = {
    Human: ['Warrior', 'Paladin', 'Rogue', 'Priest', 'Death Knight', 'Mage', 'Warlock'],
    Dwarf: ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Death Knight'],
    'Night Elf': ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Death Knight', 'Druid'],
    Gnome: ['Warrior', 'Rogue', 'Death Knight', 'Mage', 'Warlock'],
    Draenei: ['Warrior', 'Paladin', 'Hunter', 'Priest', 'Death Knight', 'Shaman', 'Mage'],
    Orc: ['Warrior', 'Hunter', 'Rogue', 'Death Knight', 'Shaman', 'Warlock'],
    Undead: ['Warrior', 'Rogue', 'Priest', 'Death Knight', 'Mage', 'Warlock'],
    Tauren: ['Warrior', 'Hunter', 'Death Knight', 'Shaman', 'Druid'],
    Troll: ['Warrior', 'Hunter', 'Rogue', 'Priest', 'Death Knight', 'Shaman', 'Mage'],
    'Blood Elf': ['Warrior', 'Paladin', 'Hunter', 'Priest', 'Death Knight', 'Mage', 'Warlock'],
}

export const START_GUIDE_BY_RACE: Record<RaceType, GuideType> = {
    Human: 'WotLK Guide - Alliance - Human - (1 - 13)',
    Dwarf: 'WotLK Guide - Alliance - Dwarf - (1 - 13)',
    'Night Elf': 'WotLK Guide - Alliance - Night Elf - (1 - 13)',
    Gnome: 'WotLK Guide - Alliance - Gnome - (1 - 13)',
    Draenei: 'WotLK Guide - Alliance - Draenei - (1 - 13)',
    Orc: 'WotLK Guide - Horde - Orc - (1 - 13)',
    Undead: 'WotLK Guide - Horde - Undead - (1 - 13)',
    Tauren: 'WotLK Guide - Horde - Tauren - (1 - 13)',
    Troll: 'WotLK Guide - Horde - Troll - (1 - 13)',
    'Blood Elf': 'WotLK Guide - Horde - Blood Elf - (1 - 13)',
}

export const STEP_TYPES: Record<ActionType, IStepTypeMeta> = {
    'Accept Quest': {
        label: 'Accept',
        badge: 'bg-amber-900/60 text-amber-200',
        icon: 'IconAcceptQuest.png',
        needsQuest: true,
    },
    'Do Quest': {
        label: 'Do',
        badge: 'bg-red-900/60 text-red-200',
        icon: 'IconDoQuest.png',
        needsQuest: true,
    },
    'Turn in Quest': {
        label: 'Turn in',
        badge: 'bg-green-900/60 text-green-200',
        icon: 'IconTurnInQuest.png',
        needsQuest: true,
    },
    'Level Up': {
        label: 'Level Up',
        badge: 'bg-teal-500/25 text-teal-200',
        icon: 'IconLevelUp.png',
    },
    Travel: { label: 'Travel', badge: 'bg-blue-900/60 text-blue-200', icon: 'IconTravel.png' },
    Hearthstone: {
        label: 'Hearthstone',
        badge: 'bg-purple-900/60 text-purple-200',
        icon: 'IconHearthstone.png',
    },
    Note: { label: 'Note', badge: 'bg-slate-600 text-slate-200', icon: 'IconNote.png' },
}

export const MARKER_STYLE: CSSProperties = {
    backgroundColor: '#fbbf24',
    border: '1px solid #000',
    color: '#0f172a',
}

export const START_HEARTHSTONE_BY_RACE: Record<RaceType, number> = {
    Human: 9,
    Dwarf: 77,
    'Night Elf': 256,
    Gnome: 77,
    Draenei: 3527,
    Orc: 364,
    Undead: 154,
    Tauren: 221,
    Troll: 364,
    'Blood Elf': 3484,
}

export const startHearthstoneFor = (race: RaceType, cls: ClassType): number =>
    cls === 'Death Knight' ? 4342 : START_HEARTHSTONE_BY_RACE[race]

export const GUIDE_SLUGS: Record<GuideType, string> = {
    'WotLK Guide - Alliance - Human - (1 - 13)': 'alliance/human_1-13',
    'WotLK Guide - Alliance - Dwarf - (1 - 13)': 'alliance/dwarf_1-13',
    'WotLK Guide - Alliance - Night Elf - (1 - 13)': 'alliance/nightElf_1-13',
    'WotLK Guide - Alliance - Gnome - (1 - 13)': 'alliance/gnome_1-13',
    'WotLK Guide - Alliance - Draenei - (1 - 13)': 'alliance/draenei_1-13',
    'WotLK Guide - Alliance - Death Knight - (55 - 60)': 'alliance/deathKnight_55-60',
    'WotLK Guide - Alliance - (13 - 20)': 'alliance/13-20',
    'WotLK Guide - Alliance - (20 - 25)': 'alliance/20-25',
    'WotLK Guide - Alliance - (25 - 30)': 'alliance/25-30',
    'WotLK Guide - Alliance - (30 - 35)': 'alliance/30-35',
    'WotLK Guide - Alliance - (35 - 40)': 'alliance/35-40',
    'WotLK Guide - Alliance - (40 - 45)': 'alliance/40-45',
    'WotLK Guide - Alliance - (45 - 50)': 'alliance/45-50',
    'WotLK Guide - Alliance - (50 - 55)': 'alliance/50-55',
    'WotLK Guide - Alliance - (55 - 60)': 'alliance/55-60',
    'WotLK Guide - Alliance - (60 - 62)': 'alliance/60-62',
    'WotLK Guide - Alliance - (62 - 64)': 'alliance/62-64',
    'WotLK Guide - Alliance - (64 - 66)': 'alliance/64-66',
    'WotLK Guide - Alliance - (66 - 68)': 'alliance/66-68',
    'WotLK Guide - Alliance - (68 - 70)': 'alliance/68-70',
    'WotLK Guide - Alliance - (70 - 72)': 'alliance/70-72',
    'WotLK Guide - Alliance - (72 - 74)': 'alliance/72-74',
    'WotLK Guide - Alliance - (74 - 76)': 'alliance/74-76',
    'WotLK Guide - Alliance - (76 - 78)': 'alliance/76-78',
    'WotLK Guide - Alliance - (78 - 80)': 'alliance/78-80',
    'WotLK Guide - Horde - Orc - (1 - 13)': 'horde/orc_1-13',
    'WotLK Guide - Horde - Undead - (1 - 13)': 'horde/undead_1-13',
    'WotLK Guide - Horde - Tauren - (1 - 13)': 'horde/tauren_1-13',
    'WotLK Guide - Horde - Troll - (1 - 13)': 'horde/troll_1-13',
    'WotLK Guide - Horde - Blood Elf - (1 - 13)': 'horde/bloodElf_1-13',
    'WotLK Guide - Horde - Death Knight - (55 - 60)': 'horde/deathKnight_1-13',
    'WotLK Guide - Horde - (13 - 20)': 'horde/13-20',
    'WotLK Guide - Horde - (20 - 25)': 'horde/20-25',
    'WotLK Guide - Horde - (25 - 30)': 'horde/25-30',
    'WotLK Guide - Horde - (30 - 35)': 'horde/30-35',
    'WotLK Guide - Horde - (35 - 40)': 'horde/35-40',
    'WotLK Guide - Horde - (40 - 45)': 'horde/40-45',
    'WotLK Guide - Horde - (45 - 50)': 'horde/45-50',
    'WotLK Guide - Horde - (50 - 55)': 'horde/50-55',
    'WotLK Guide - Horde - (55 - 60)': 'horde/55-60',
    'WotLK Guide - Horde - (60 - 62)': 'horde/60-62',
    'WotLK Guide - Horde - (62 - 64)': 'horde/62-64',
    'WotLK Guide - Horde - (64 - 66)': 'horde/64-66',
    'WotLK Guide - Horde - (66 - 68)': 'horde/66-68',
    'WotLK Guide - Horde - (68 - 70)': 'horde/68-70',
    'WotLK Guide - Horde - (70 - 72)': 'horde/70-72',
    'WotLK Guide - Horde - (72 - 74)': 'horde/72-74',
    'WotLK Guide - Horde - (74 - 76)': 'horde/74-76',
    'WotLK Guide - Horde - (76 - 78)': 'horde/76-78',
    'WotLK Guide - Horde - (78 - 80)': 'horde/78-80',
}
