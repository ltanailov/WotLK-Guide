import clsx from 'clsx'
import type { ReactElement } from 'react'
import type { ITabsProps } from '../Types'

function Tabs<T extends string>({ tabs, value, onChange, icon }: ITabsProps<T>): ReactElement {
    return (
        <div className={'flex gap-6 border-b border-slate-700'}>
            {tabs.map((tab: T) => (
                <button
                    key={tab}
                    type={'button'}
                    onClick={() => onChange(tab)}
                    className={clsx(
                        '-mb-px inline-flex cursor-pointer items-center gap-2 border-b-2 px-1 pb-3 text-sm font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none',
                        {
                            'border-amber-400 text-amber-400': tab === value,
                            'border-transparent text-slate-500 hover:text-slate-300': tab !== value,
                        },
                    )}
                >
                    {icon && (
                        <img
                            src={icon(tab)}
                            alt={''}
                            className={clsx(
                                'h-5 w-5 rounded-sm object-cover transition-opacity',
                                tab !== value && 'opacity-60',
                            )}
                        />
                    )}
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default Tabs
