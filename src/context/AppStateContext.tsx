import { createContext, useState } from 'react'
import type { ReactNode, ReactElement } from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage'
import type { AppModeType, IAppStateContext } from '../Types'

const AppStateContext: React.Context<IAppStateContext | null> =
    createContext<IAppStateContext | null>(null)

export const AppStateProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const [activeCharacterId, setActiveCharacterId] = useLocalStorage<string | null>(
        'activeCharacterId',
        null,
    )
    const [appMode, setAppMode] = useState<AppModeType>(
        activeCharacterId ? 'Guide' : 'CharacterSelect',
    )

    return (
        <AppStateContext.Provider
            value={{ appMode, setAppMode, activeCharacterId, setActiveCharacterId }}
        >
            {children}
        </AppStateContext.Provider>
    )
}

export { AppStateContext }
