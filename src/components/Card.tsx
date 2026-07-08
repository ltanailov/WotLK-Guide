import clsx from 'clsx'
import type { ReactElement } from 'react'
import type { ICardProps } from '../Types'

const Card = ({
    label,
    iconSrc,
    isSelected,
    isDisabled,
    accentColor,
    onClick,
}: ICardProps): ReactElement => {
    return (
        <button
            type={'button'}
            onClick={onClick}
            disabled={isDisabled}
            aria-pressed={isSelected}
            className={clsx(
                'group flex flex-col items-center gap-2 rounded-lg border p-3 transition-[color,background-color,border-color,opacity] duration-150 focus-visible:outline-2 focus-visible:outline-amber-400',
                {
                    'cursor-not-allowed opacity-30': isDisabled,
                    'border-amber-400 bg-amber-400/10 cursor-pointer': !isDisabled && isSelected,
                    'border-slate-700 bg-slate-800/40 hover:border-slate-500 hover:bg-slate-800 cursor-pointer':
                        !isDisabled && !isSelected,
                },
            )}
        >
            <span
                className={
                    'flex h-11 w-11 items-center justify-center overflow-hidden rounded-md ring-1 ring-inset ring-black/40'
                }
                style={accentColor ? { boxShadow: `inset 0 0 0 2px ${accentColor}` } : undefined}
            >
                <img
                    src={iconSrc}
                    alt={label}
                    loading={'lazy'}
                    className={'h-full w-full object-cover'}
                />
            </span>
            <span className={'text-xs font-medium text-slate-300'}>{label}</span>
        </button>
    )
}

export default Card
