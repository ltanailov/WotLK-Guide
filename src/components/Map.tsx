import { useState } from 'react'
import type { ReactElement } from 'react'
import clsx from 'clsx'

import { MARKER_STYLE } from '../Constants'
import type { IMapProps, IMapMarker } from '../Types'

const Map = ({
    src,
    alt,
    markers = [],
    activeMarker,
    onMarkerHover,
    onMarkerClick,
}: IMapProps): ReactElement => {
    const [brokenUrl, setBrokenUrl] = useState<string | null>(null)
    const showMap: boolean = brokenUrl !== src

    const points: string = markers.map((m: IMapMarker) => `${m.x},${m.y}`).join(' ')

    return (
        <div className={'relative block w-full leading-0'}>
            {showMap ? (
                <img
                    src={src}
                    alt={alt ?? 'Zone map'}
                    onError={() => setBrokenUrl(src)}
                    className={'block h-auto w-full'}
                />
            ) : (
                <div
                    className={
                        'flex aspect-3/2 w-full items-center justify-center text-sm text-slate-500'
                    }
                >
                    No map for this zone
                </div>
            )}

            {showMap && markers.length > 1 && (
                <svg
                    className={'pointer-events-none absolute inset-0 h-full w-full'}
                    viewBox={'0 0 100 100'}
                    preserveAspectRatio={'none'}
                >
                    <polyline
                        points={points}
                        fill={'none'}
                        stroke={'#000'}
                        strokeOpacity={0.85}
                        strokeWidth={5.5}
                        strokeDasharray={'0.1 8'}
                        strokeLinecap={'round'}
                        vectorEffect={'non-scaling-stroke'}
                    />
                    <polyline
                        points={points}
                        fill={'none'}
                        stroke={'#fbbf24'}
                        strokeWidth={2.8}
                        strokeDasharray={'0.1 8'}
                        strokeLinecap={'round'}
                        vectorEffect={'non-scaling-stroke'}
                    />
                </svg>
            )}

            {showMap &&
                markers.map((m: IMapMarker) => (
                    <button
                        key={m.number}
                        type={'button'}
                        onMouseEnter={() => onMarkerHover?.(m.number)}
                        onMouseLeave={() => onMarkerHover?.(null)}
                        onClick={() => onMarkerClick?.(m.number)}
                        title={`Step ${m.number}`}
                        className={clsx(
                            'absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-[0.65rem] font-bold leading-none shadow transition-transform duration-150',
                            activeMarker === m.number && 'z-10 scale-125',
                        )}
                        style={{ left: `${m.x}%`, top: `${m.y}%`, ...MARKER_STYLE }}
                    >
                        {m.number}
                    </button>
                ))}
        </div>
    )
}

export default Map
