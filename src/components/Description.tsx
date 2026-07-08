import { parseDescription, dbUrl } from '../lib/db'
import type { DescToken } from '../lib/db'
import { getZoneName } from '../lib/reference'
import type { ReactElement } from 'react'

const Description = ({ text }: { text: string }): ReactElement => {
    const tokens: DescToken[] = parseDescription(text)
    return (
        <>
            {tokens.map((token: DescToken, index: number) => {
                if (token.kind === 'text') return <span key={index}>{token.text}</span>
                if (token.type === 'zone') {
                    return (
                        <a
                            key={index}
                            href={dbUrl('zone', token.id)}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            className={'font-semibold text-amber-400 hover:underline'}
                        >
                            {getZoneName(token.id)}
                        </a>
                    )
                }
                return (
                    <a
                        key={index}
                        href={dbUrl(token.type, token.id)}
                        data-db={`${token.type}=${token.id}`}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        className={'font-semibold text-amber-400 hover:underline'}
                    />
                )
            })}
        </>
    )
}

export default Description
