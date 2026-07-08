import clsx from 'clsx'
import type { ReactElement, ReactNode } from 'react'

import Description from './Description'
import { STEP_TYPES } from '../Constants'
import { dbUrl } from '../lib/db'
import type { IStep, IStepTypeMeta } from '../Types'

const Step = ({ step }: { step: IStep }): ReactElement => {
    const meta: IStepTypeMeta = STEP_TYPES[step.type]

    let body: ReactNode
    if (step.type === 'Level Up') {
        body = <span>Level {step.description}</span>
    } else if (meta.needsQuest && step.questID != null) {
        body = (
            <span>
                <a
                    href={dbUrl('quest', step.questID)}
                    data-db={`quest=${step.questID}`}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    className={'font-semibold text-amber-400 hover:underline'}
                />
                {step.description && (
                    <span className={'text-slate-300'}>
                        {' — '}
                        <Description text={step.description} />
                    </span>
                )}
            </span>
        )
    } else if (step.description) {
        body = <Description text={step.description} />
    } else {
        body = <span className={'text-slate-500'}>{meta.label}</span>
    }

    return (
        <li
            className={
                'flex items-start gap-2 rounded-md border border-slate-700 bg-slate-800/40 px-3 py-2 text-sm leading-5 text-slate-200'
            }
        >
            <img
                src={`/icons/steps/${meta.icon}`}
                alt={''}
                className={'h-5 w-5 shrink-0 object-contain'}
            />
            <span
                className={clsx(
                    'inline-flex h-5 shrink-0 items-center rounded px-1.5 text-[0.65rem] font-bold tracking-wide uppercase',
                    meta.badge,
                )}
            >
                {meta.label}
            </span>
            <span className={'min-w-0 flex-1'}>{body}</span>
        </li>
    )
}

export default Step
