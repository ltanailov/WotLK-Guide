import { useState } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import clsx from 'clsx'

import { MARKER_STYLE } from '../Constants'
import type { IMapProps, IMapMarker } from '../Types'

const MAP_VARS: CSSProperties = {
    '--map-marker': 'clamp(0.875rem, 2.72cqw, 1.25rem)',
} as CSSProperties

const MARKER_SIZE: string = 'var(--map-marker)'
const MARKER_FONT: string = 'calc(var(--map-marker) * 0.52)'
const MARKER_BORDER: string = 'max(1px, calc(var(--map-marker) * 0.05)) solid #000'
const TRAIL_OUTLINE: string = 'calc(var(--map-marker) * 0.275)'
const TRAIL_STROKE: string = 'calc(var(--map-marker) * 0.14)'
const TRAIL_DASH: string = '0.1px calc(var(--map-marker) * 0.4)'

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
        <div className={'@container relative block w-full leading-0'} style={MAP_VARS}>
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
                        strokeLinecap={'round'}
                        vectorEffect={'non-scaling-stroke'}
                        style={{ strokeWidth: TRAIL_OUTLINE, strokeDasharray: TRAIL_DASH }}
                    />
                    <polyline
                        points={points}
                        fill={'none'}
                        stroke={'#fbbf24'}
                        strokeLinecap={'round'}
                        vectorEffect={'non-scaling-stroke'}
                        style={{ strokeWidth: TRAIL_STROKE, strokeDasharray: TRAIL_DASH }}
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
                            'absolute flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full font-bold leading-none shadow transition-transform duration-150',
                            activeMarker === m.number && 'z-10 scale-125',
                        )}
                        style={{
                            left: `${m.x}%`,
                            top: `${m.y}%`,
                            ...MARKER_STYLE,
                            width: MARKER_SIZE,
                            height: MARKER_SIZE,
                            fontSize: MARKER_FONT,
                            border: MARKER_BORDER,
                        }}
                    >
                        {m.number}
                    </button>
                ))}
        </div>
    )
}

export default Map
