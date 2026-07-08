import { useState } from 'react'
import type { ReactElement } from 'react'
import clsx from 'clsx'

import Icon from './Icon'
import { CLASS_COLORS, raceIconSrc } from '../Constants'
import type { ICharacterCardProps } from '../Types'

import { asset } from '../lib/asset'

const CharacterCard = ({
    character,
    isSelected,
    onSelect,
    onDelete,
}: ICharacterCardProps): ReactElement => {
    const [isConfirming, setIsConfirming] = useState<boolean>(false)

    return (
        <div className={'group relative'}>
            <button
                type={'button'}
                onClick={onSelect}
                aria-pressed={isSelected}
                className={clsx(
                    'flex w-full cursor-pointer items-center gap-3 rounded-lg border py-2.5 pr-9 pl-2.5 text-left transition-[color,background-color,border-color] duration-150',
                    {
                        'border-amber-400 bg-amber-400/10': isSelected,
                        'border-slate-700 bg-slate-800/40 hover:border-slate-500 hover:bg-slate-800':
                            !isSelected,
                    },
                )}
            >
                <span
                    className={
                        'h-10 w-10 shrink-0 overflow-hidden rounded-md ring-1 ring-inset ring-black/40'
                    }
                    style={{ boxShadow: `inset 0 0 0 2px ${CLASS_COLORS[character.class]}` }}
                >
                    <img
                        src={raceIconSrc(character.race, character.gender)}
                        alt={`${character.race} ${character.gender}`}
                        loading={'lazy'}
                        className={'h-full w-full object-cover'}
                    />
                </span>
                <span className={'flex min-w-0 flex-1 flex-col'}>
                    <span
                        className={
                            'flex items-baseline gap-1.5 text-sm font-semibold text-slate-100'
                        }
                    >
                        <span className={'truncate'}>{character.name}</span>
                        <span className={'shrink-0 text-slate-500'}>·</span>
                        <span className={'shrink-0 tabular-nums'}>Lvl {character.level ?? 1}</span>
                    </span>
                    <span className={'truncate text-xs text-slate-400'}>
                        {character.race} · {character.class}
                    </span>
                </span>
            </button>

            {isConfirming ? (
                <div
                    className={
                        'absolute -inset-px flex items-center justify-end gap-2 rounded-lg bg-slate-900/70 pr-2.5 pl-3 backdrop-blur-sm'
                    }
                >
                    <span className={'mr-auto truncate text-xs font-medium text-slate-300'}>
                        Delete {character.name}?
                    </span>
                    <button
                        type={'button'}
                        onClick={() => onDelete?.()}
                        className={
                            'cursor-pointer rounded px-2 py-1 text-xs font-bold text-red-400 hover:bg-red-500/15'
                        }
                    >
                        Yes
                    </button>
                    <button
                        type={'button'}
                        onClick={() => setIsConfirming(false)}
                        className={
                            'cursor-pointer rounded px-2 py-1 text-xs font-medium text-slate-400 hover:text-slate-200'
                        }
                    >
                        No
                    </button>
                </div>
            ) : (
                <button
                    type={'button'}
                    onClick={() => setIsConfirming(true)}
                    aria-label={`Delete ${character.name}`}
                    className={
                        'absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded p-1.5 text-slate-500 transition-colors hover:text-red-400'
                    }
                >
                    <Icon src={asset('/icons/ui/IconTrash.svg')} className={'h-4 w-4'} />
                </button>
            )}
        </div>
    )
}

export default CharacterCard
