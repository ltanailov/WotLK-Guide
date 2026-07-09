# WotLK Guide

An interactive, step-by-step leveling guide for _World of Warcraft: Wrath of the Lich King_ (3.3.5a). Create a character, pick your race and class, and follow an ordered checklist of quests, travel, and level-up milestones - each step shown on the zone map with numbered waypoints and a dashed route between them.

App is hosted on _GitHub Pages_ - **[WotLK Guide](https://ltanailov.github.io/WotLK-Guide/)**

> **Note:** Currently only Alliance leveling guides (levels 1–35) are authored. Other combinations fall back to a "guide not found" message.

## Features

- **Character roster** - create multiple characters (faction, race, class, gender) and resume each one where you left off. Progress is saved locally in your browser.
- **Guided sections** - the guide is broken into small sections (≤ 5 steps each). Every step has an action type (_Accept Quest_, _Do Quest_, _Turn In Quest_, _Travel_, _Level Up_, _Note_, _Set Hearthstone_), a map location, and a description.
- **Interactive map** - the current section's steps are plotted on the WotLK zone map as numbered waypoints connected by a dashed trail; the active waypoint is highlighted.
- **Class/race-aware filtering** - steps that apply only to specific races or classes are shown or hidden automatically.
- **Continuous journey** - starter guides chain into shared leveling guides, so navigation flows across guide boundaries. A progress bar tracks your level from 1 toward 80 and lets you seek to a level.
- **Live tooltips** - quests, items, NPCs, and objects link to WotLKDB and render rich in-page tooltips.
- **Quest log & hearthstone helpers** - the app replays your completed steps to show your current quest log and hearthstone location.

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
npm run build
npm run preview
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

## License

Licensed under the [GNU Affero General Public License v3.0](LICENSE).

This is a fan-made project. World of Warcraft and Wrath of the Lich King are trademarks of Blizzard Entertainment, Inc. This project is not affiliated with or endorsed by Blizzard Entertainment.
