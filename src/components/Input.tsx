import clsx from 'clsx'
import type { InputHTMLAttributes, ReactElement } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ className, ...rest }: InputProps): ReactElement => {
    return (
        <input
            className={clsx(
                'w-full rounded-md border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40',
                className,
            )}
            {...rest}
        />
    )
}

export default Input
