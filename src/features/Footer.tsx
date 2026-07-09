import type { ReactElement } from 'react'

const GithubIcon = (): ReactElement => (
    <svg viewBox={'0 0 24 24'} className={'h-4 w-4'} fill={'currentColor'} aria-hidden={'true'}>
        <path
            d={
                'M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.1.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.7-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.72.08-.71.08-.71 1.2.08 1.83 1.2 1.83 1.2 1.07 1.77 2.81 1.26 3.5.96.11-.76.42-1.26.76-1.55-2.67-.29-5.47-1.29-5.47-5.75 0-1.27.47-2.31 1.24-3.12-.12-.29-.54-1.46.12-3.05 0 0 1.01-.31 3.3 1.19a11.7 11.7 0 0 1 3-.39c1.02 0 2.05.13 3 .39 2.28-1.5 3.29-1.19 3.29-1.19.66 1.59.24 2.76.12 3.05.77.81 1.24 1.85 1.24 3.12 0 4.47-2.81 5.45-5.49 5.74.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.83.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z'
            }
        />
    </svg>
)

const Footer = (): ReactElement => {
    const year: number = new Date().getFullYear()

    return (
        <footer className={'mt-auto border-t border-slate-700 bg-slate-900/60'}>
            <div
                className={
                    'mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center'
                }
            >
                <div
                    className={
                        'flex flex-col items-center gap-2 text-sm text-slate-400 sm:flex-row sm:gap-4'
                    }
                >
                    <span>&copy; {year} WotLK Guide</span>
                    <a
                        href={'https://github.com/ltanailov/WotLK-Guide'}
                        target={'_blank'}
                        rel={'noreferrer'}
                        className={
                            'inline-flex items-center gap-1.5 transition-colors hover:text-slate-100'
                        }
                    >
                        <GithubIcon />
                        GitHub
                    </a>
                </div>

                <p className={'max-w-2xl text-xs leading-relaxed text-slate-500'}>
                    This is a fan-made, non-commercial project and is not affiliated with or
                    endorsed by Blizzard Entertainment. World of Warcraft and Wrath of the Lich King
                    are trademarks of Blizzard Entertainment, Inc. All rights reserved by Blizzard
                    Entertainment.
                </p>
            </div>
        </footer>
    )
}

export default Footer
