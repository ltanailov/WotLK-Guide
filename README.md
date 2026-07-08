# WotLK Guide

An interactive, step-by-step leveling guide for _World of Warcraft: Wrath of the Lich King_ (3.3.5a). Create a character, pick your race and class, and follow an ordered checklist of quests, travel, and level-up milestones - each step shown on the zone map with numbered waypoints and a dashed route between them.

## Features

- **Character roster** - create multiple characters (faction, race, class, gender) and resume each one where you left off. Progress is saved locally in your browser.
- **Guided sections** - the guide is broken into small sections (≤ 5 steps each). Every step has an action type (_Accept Quest_, _Do Quest_, _Turn In Quest_, _Travel_, _Level Up_, _Note_, _Set Hearthstone_), a map location, and a description.
- **Interactive map** - the current section's steps are plotted on the WotLK zone map as numbered waypoints connected by a dashed trail; the active waypoint is highlighted.
- **Class/race-aware filtering** - steps that apply only to specific races or classes are shown or hidden automatically.
- **Continuous journey** - starter guides chain into shared leveling guides, so navigation flows across guide boundaries. A progress bar tracks your level from 1 toward 80 and lets you seek to a level.
- **Live tooltips** - quests, items, NPCs, and objects link to Wowhead / WotLKDB and render rich in-page tooltips.
- **Quest log & hearthstone helpers** - the app replays your completed steps to show your current quest log and hearthstone location.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and builds
- [Tailwind CSS 4](https://tailwindcss.com/) for styling
- ESLint + Prettier for code quality

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Then open the URL printed in the terminal (default http://localhost:5173).

### Build

```bash
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build locally
```

### Lint & format

```bash
npm run lint         # check
npm run lint:fix     # check and auto-fix
npm run format       # write formatting
npm run format:check # verify formatting
```

## Project structure

```
guide/               Guide data (.guide JSON files), e.g. guide/enGB/alliance/
guide.schema.json    JSON Schema for a guide file
public/              Static assets (step icons, map images)
src/
  components/        Presentational UI (Map, Step, ProgressBar, Card, …)
  features/          Screens (CharacterSelect, Guide, Header, Footer)
  hooks/             State hooks (useCharacters, useAppState, useLocalStorage, …)
  lib/               Guide loading, section building, journey/progress logic
  data/              Zone and area lookup tables
  context/           App-level state context
  Types.ts           Shared TypeScript interfaces
  Constants.ts       Factions, classes, class colors, step-type metadata
```

## Guide data format

Each guide is a JSON file (`*.guide`) describing an ordered list of steps. It is validated against [`guide.schema.json`](guide.schema.json). Example:

```json
{
  "name": "WotLK Guide - Alliance - Night Elf - (1 - 13)",
  "locale": "enGB",
  "faction": "Alliance",
  "race": "Night Elf",
  "startHearthstone": 256,
  "next": "WotLK Guide - Alliance - (13 - 20)",
  "stepList": [
    {
      "type": "Accept Quest",
      "coordinates": { "zoneID": 141, "areaID": 256, "x": 60, "y": 42 },
      "questID": 456
    }
  ]
}
```

Guides are loaded at build time from `guide/**/*.guide` and indexed by their `name`. The `next` field chains guides together into a continuous leveling journey.

> **Note:** Currently only Alliance leveling guides (roughly levels 1–30) are authored. Other combinations fall back to a "guide not found" message.

## License

Licensed under the [GNU Affero General Public License v3.0](LICENSE).

This is a fan-made project. World of Warcraft and Wrath of the Lich King are trademarks of Blizzard Entertainment, Inc. This project is not affiliated with or endorsed by Blizzard Entertainment.
