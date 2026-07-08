import clsx from 'clsx'
import type { ReactElement } from 'react'
import type { IToggleProps } from '../Types'

function Toggle<T extends string>({ options, value, onChange }: IToggleProps<T>): ReactElement {
    return (
        <div className={'inline-flex overflow-hidden rounded-md border border-slate-600'}>
            {options.map((option: T) => (
                <button
                    key={option}
                    type={'button'}
                    onClick={() => onChange(option)}
                    className={clsx(
                        'cursor-pointer font-semibold tracking-wide uppercase transition-colors focus-visible:outline-none px-4 py-3 text-sm',
                        {
                            'bg-slate-700 text-slate-100': option === value,
                            'bg-transparent text-slate-500 hover:text-slate-300': option !== value,
                        },
                    )}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

export default Toggle
