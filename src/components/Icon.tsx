import clsx from 'clsx'
import type { ReactElement } from 'react'
import type { IIconProps } from '../Types'

const Icon = ({ src, className }: IIconProps): ReactElement => (
    <span
        aria-hidden
        className={clsx(
            'inline-block shrink-0 bg-current mask-contain mask-center mask-no-repeat',
            className,
        )}
        style={{
            maskImage: `url(${src})`,
            WebkitMaskImage: `url(${src})`,
        }}
    />
)

export default Icon
