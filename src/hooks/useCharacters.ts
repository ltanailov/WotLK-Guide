import { useCallback } from 'react'

import { useLocalStorage } from './useLocalStorage'
import { START_GUIDE_BY_RACE } from '../Constants'
import type { ICharacter, ISavedCharacter } from '../Types'

export const useCharacters = (): {
    characters: ISavedCharacter[]
    addCharacter: (character: ICharacter) => ISavedCharacter
    removeCharacter: (id: string) => void
    updateCharacter: (id: string, patch: Partial<ISavedCharacter>) => void
} => {
    const [characters, setCharacters] = useLocalStorage<ISavedCharacter[]>('characters', [])

    const addCharacter: (character: ICharacter) => ISavedCharacter = useCallback(
        (character: ICharacter): ISavedCharacter => {
            const saved: ISavedCharacter = {
                ...character,
                id: crypto.randomUUID(),
                level: 1,
                guide: START_GUIDE_BY_RACE[character.race],
                section: 0,
            }
            setCharacters((prev: ISavedCharacter[]) => [saved, ...prev])
            return saved
        },
        [setCharacters],
    )

    const removeCharacter: (id: string) => void = useCallback(
        (id: string) => {
            setCharacters((prev: ISavedCharacter[]) =>
                prev.filter((character: ISavedCharacter) => character.id !== id),
            )
        },
        [setCharacters],
    )

    const updateCharacter: (id: string, patch: Partial<ISavedCharacter>) => void = useCallback(
        (id: string, patch: Partial<ISavedCharacter>) => {
            setCharacters((prev: ISavedCharacter[]) =>
                prev.map((character: ISavedCharacter) =>
                    character.id === id ? { ...character, ...patch } : character,
                ),
            )
        },
        [setCharacters],
    )

    return { characters, addCharacter, removeCharacter, updateCharacter }
}
