import type { LocaleType, IDbLang } from '../Types'

const DB_HOST: string = 'wotlkdb.com'

const DB_LANGS: Record<LocaleType, IDbLang> = {
    enGB: { domain: '', locale: 0 },
    frFR: { domain: 'fr', locale: 2 },
    deDE: { domain: 'de', locale: 3 },
    esES: { domain: 'es', locale: 6 },
    ruRU: { domain: 'ru', locale: 8 },
}

export const dbUrl = (type: string, id: number | string, locale: LocaleType = 'enGB'): string => {
    const lang: IDbLang = DB_LANGS[locale] ?? DB_LANGS.enGB
    let url: string = `https://${DB_HOST}/?${type}=${id}`
    if (lang.domain) url += `&domain=${lang.domain}`
    if (lang.locale != null) url += `&locale=${lang.locale}`
    return url
}

export type DescToken = { kind: 'text'; text: string } | { kind: 'link'; type: string; id: number }

const TOKEN_RE: RegExp = /\[([a-z]+):(\d+)\]/g

export const parseDescription = (desc: string): DescToken[] => {
    const out: DescToken[] = []
    let last: number = 0
    let match: RegExpExecArray | null
    TOKEN_RE.lastIndex = 0
    while ((match = TOKEN_RE.exec(desc))) {
        if (match.index > last) out.push({ kind: 'text', text: desc.slice(last, match.index) })
        out.push({ kind: 'link', type: match[1], id: Number(match[2]) })
        last = TOKEN_RE.lastIndex
    }
    if (last < desc.length) out.push({ kind: 'text', text: desc.slice(last) })
    return out
}
