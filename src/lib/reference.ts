import zoneIds from '../data/zone_ids.json'
import areaTable from '../data/area_table.json'
import type { IZoneEntry, IAreaEntry } from '../Types'

import { asset } from './asset'

const zoneName: Record<number, string> = {}
const zoneFile: Record<number, string> = {}
for (const zone of zoneIds as IZoneEntry[]) {
    zoneName[zone.id] = zone.name
    zoneFile[zone.id] = zone.filename
}

const areaName: Record<number, string> = {}
for (const area of areaTable as IAreaEntry[]) areaName[area.entry] = area.name

export const getZoneName = (id: number): string => zoneName[id] ?? areaName[id] ?? `Zone ${id}`

export const getAreaName = (id: number): string => areaName[id] ?? zoneName[id] ?? `Area ${id}`

export const getMapUrl = (id: number): string | null => {
    const file: string = zoneFile[id]
    return file ? asset(`/maps/enGB/${encodeURIComponent(file)}.png`) : null
}
