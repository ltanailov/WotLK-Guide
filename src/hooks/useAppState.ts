import { useContext } from 'react'
import { AppStateContext } from '../context/AppStateContext'
import type { IAppStateContext } from '../Types'

export function useAppState(): IAppStateContext {
    const context: IAppStateContext | null = useContext(AppStateContext)

    if (!context) {
        throw new Error('useAppState must be used inside AppStateProvider')
    }

    return context
}
