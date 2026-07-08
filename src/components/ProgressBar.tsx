import clsx from 'clsx'
import type { ReactElement } from 'react'
import type { IProgressBarProps } from '../Types'

const MIN_LEVEL: number = 1
const MAX_LEVEL: number = 80

const pct = (level: number): number =>
    Math.min(100, Math.max(0, ((level - MIN_LEVEL) / (MAX_LEVEL - MIN_LEVEL)) * 100))

const ProgressBar = ({ level, maxLevel, onSeek, className }: IProgressBarProps): ReactElement => {
    const lockedPct: number = pct(maxLevel)
    const fillPct: number = Math.min(pct(level), lockedPct)

    const seek = (event: React.MouseEvent<HTMLDivElement>): void => {
        const rect: DOMRect = event.currentTarget.getBoundingClientRect()
        const frac: number = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
        const target: number = Math.round(MIN_LEVEL + frac * (MAX_LEVEL - MIN_LEVEL))
        if (target <= maxLevel) onSeek(target)
    }

    return (
        <div className={clsx('flex items-center gap-2', className)}>
            <span className={'text-[0.6rem] font-semibold text-slate-500'}>{MIN_LEVEL}</span>
            <div
                onClick={seek}
                title={'Click a level to jump there'}
                className={
                    'relative h-2.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-slate-700'
                }
            >
                <div
                    className={'absolute inset-y-0 left-0 rounded-full bg-amber-400'}
                    style={{ width: `${fillPct}%` }}
                />
                {lockedPct < 100 && (
                    <div
                        className={'hatch-locked absolute inset-y-0 right-0 cursor-default'}
                        style={{ left: `${lockedPct}%` }}
                        title={'Coming soon'}
                        onClick={(event) => event.stopPropagation()}
                    />
                )}
            </div>
            <span className={'text-[0.6rem] font-semibold text-slate-500'}>{MAX_LEVEL}</span>
        </div>
    )
}

export default ProgressBar
