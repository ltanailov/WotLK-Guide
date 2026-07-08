import { useEffect, useRef, useState } from 'react'
import type { ReactElement, RefObject } from 'react'
import clsx from 'clsx'

import { dbUrl } from '../lib/db'
import { hideTooltips, refreshTooltips } from '../hooks/useTooltips'

const QuestLogButton = ({ questLog }: { questLog: number[] }): ReactElement => {
    const [open, setOpen] = useState<boolean>(false)
    const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!open) return
        const onDown = (event: MouseEvent): void => {
            if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
        }
        document.addEventListener('mousedown', onDown)
        return () => document.removeEventListener('mousedown', onDown)
    }, [open])

    useEffect(() => {
        if (open) refreshTooltips()
        else hideTooltips()
    }, [open, questLog])

    return (
        <div ref={ref} className={'relative'}>
            <button
                type={'button'}
                onClick={() => setOpen((value: boolean) => !value)}
                title={'Quests in your log'}
                className={clsx(
                    'flex cursor-pointer items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-semibold',
                    open
                        ? 'border-amber-400 text-amber-400'
                        : 'border-slate-600 text-slate-300 hover:border-slate-500',
                )}
            >
                <span>Quest Log</span>
                <span className={'rounded bg-amber-400/20 px-1.5 text-amber-300'}>
                    {questLog.length}
                </span>
            </button>

            {open && (
                <div
                    className={
                        'absolute top-full right-0 z-40 mt-1.5 max-h-80 w-64 overflow-auto rounded-lg border border-slate-700 bg-slate-800 p-2 shadow-xl'
                    }
                >
                    {questLog.length === 0 ? (
                        <p className={'px-1 py-2 text-xs text-slate-500'}>No quests in your log.</p>
                    ) : (
                        <ul className={'flex flex-col'}>
                            {questLog.map((id: number) => (
                                <li key={id}>
                                    <a
                                        href={dbUrl('quest', id)}
                                        data-db={`quest=${id}`}
                                        target={'_blank'}
                                        rel={'noopener noreferrer'}
                                        className={
                                            'block truncate rounded px-2 py-1 text-sm text-amber-300 hover:bg-slate-700 hover:underline'
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}

export default QuestLogButton
