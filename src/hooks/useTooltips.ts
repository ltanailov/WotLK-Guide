import { useEffect } from 'react'

const DB_HOST: string = 'wotlkdb.com'
let injected: boolean = false

declare global {
    interface Window {
        aowow_tooltips?: { colorlinks: boolean; iconizelinks: boolean; renamelinks: boolean }
        $WowheadPower?: { refreshLinks?: () => void; hideTooltip?: () => void }
    }
}

const fillFallback = (): void => {
    document.querySelectorAll<HTMLAnchorElement>('a[data-db]').forEach((a: HTMLAnchorElement) => {
        if (!a.textContent?.trim()) a.textContent = a.getAttribute('data-db') || ''
    })
}

const injectPower = (): void => {
    if (injected) return
    injected = true
    window.aowow_tooltips = { colorlinks: true, iconizelinks: true, renamelinks: true }
    const script: HTMLScriptElement = document.createElement('script')
    script.src = `https://${DB_HOST}/static/widgets/power.js`
    script.onerror = fillFallback
    document.body.appendChild(script)
}

const suppressTooltips = (on: boolean): void => {
    document.documentElement.classList.toggle('tt-hide', on)
}

export const hideTooltips = (): void => {
    suppressTooltips(true)
}

export const refreshTooltips = (attempt: number = 0): void => {
    injectPower()
    const power: typeof window.$WowheadPower = window.$WowheadPower
    if (power?.refreshLinks) {
        try {
            power.refreshLinks()
        } catch {
            void 0
        }
    } else if (attempt < 50) {
        setTimeout(() => refreshTooltips(attempt + 1), 200)
    }
    setTimeout(fillFallback, 10000)
}

export const useTooltips = (dep: unknown): void => {
    useEffect(() => {
        hideTooltips()
        refreshTooltips()
    }, [dep])

    useEffect(() => {
        const sync = (event: MouseEvent): void => {
            const el: Element | null = event.target as Element | null
            const allow: boolean =
                !!el &&
                typeof el.closest === 'function' &&
                (!!el.closest('a[data-db]') || !!el.closest('.wowhead-tooltip'))
            suppressTooltips(!allow)
        }
        const onDown = (): void => hideTooltips()
        const onScroll = (): void => hideTooltips()
        suppressTooltips(true)
        document.addEventListener('mouseover', sync)
        document.addEventListener('mousemove', sync)
        document.addEventListener('mousedown', onDown)
        window.addEventListener('scroll', onScroll, true)
        return () => {
            document.removeEventListener('mouseover', sync)
            document.removeEventListener('mousemove', sync)
            document.removeEventListener('mousedown', onDown)
            window.removeEventListener('scroll', onScroll, true)
        }
    }, [])
}
