import type { ReactElement } from 'react'

import { asset } from '../lib/asset'

const Header = (): ReactElement => {
    return (
        <header
            className={
                'sticky top-0 z-40 flex items-center gap-3 border-b border-slate-700 bg-slate-800/90 backdrop-blur h-12 sm:h-14'
            }
        >
            <img
                src={asset('/logo.png')}
                alt={'WotLK Guide'}
                className={
                    'pointer-events-none absolute left-1/2 w-auto -translate-x-1/2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] top-2.5 h-20 sm:top-2 sm:h-26'
                }
            />
        </header>
    )
}

export default Header
