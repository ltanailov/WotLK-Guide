import clsx from 'clsx'
import type { ReactElement } from 'react'
import type { IButtonProps } from '../Types'

const Button = ({
    variant = 'Primary',
    className,
    children,
    type,
    ...rest
}: IButtonProps): ReactElement => {
    return (
        <button
            type={type ?? 'button'}
            className={clsx(
                'rounded-md px-5 py-3 text-sm font-bold tracking-wide uppercase transition-colors focus-visible:outline-2 focus-visible:outline-amber-400 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
                {
                    'bg-amber-400 text-slate-900 hover:bg-amber-300': variant === 'Primary',
                    'border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700':
                        variant === 'Secondary',
                },
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
