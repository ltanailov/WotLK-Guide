import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

export const useLocalStorage = <T>(
    key: string,
    initialValue: T,
): readonly [T, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        try {
            const item: string | null = localStorage.getItem(key)

            if (item !== null) {
                return JSON.parse(item) as T
            }

            return initialValue
        } catch {
            return initialValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(`Failed to save '${key}' to localStorage`, error)
        }
    }, [key, value])

    return [value, setValue] as const
}
