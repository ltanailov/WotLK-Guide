import Header from './features/Header'
import CharacterSelect from './features/CharacterSelect'
import Guide from './features/Guide'
import Footer from './features/Footer'
import { useAppState } from './hooks/useAppState'
import { useCharacters } from './hooks/useCharacters'
import type { ReactElement } from 'react'
import type { GuideType, ISavedCharacter } from './Types'

const App = (): ReactElement => {
    const { appMode, setAppMode, activeCharacterId, setActiveCharacterId } = useAppState()
    const { characters, addCharacter, removeCharacter, updateCharacter } = useCharacters()

    const activeCharacter: ISavedCharacter | null =
        characters.find((character: ISavedCharacter) => character.id === activeCharacterId) ?? null

    const startGuide = (character: ISavedCharacter): void => {
        setActiveCharacterId(character.id)
        setAppMode('Guide')
    }

    const exitGuide = (): void => setAppMode('CharacterSelect')

    const handleRemove = (id: string): void => {
        removeCharacter(id)
        if (id === activeCharacterId) setActiveCharacterId(null)
    }

    const handleNavigate = (guide: GuideType, section: number, level: number): void => {
        if (activeCharacter) updateCharacter(activeCharacter.id, { guide, section, level })
    }

    return (
        <div className={'flex min-h-dvh flex-col bg-slate-900 text-slate-100'}>
            <Header />
            <main className={'flex w-full justify-center px-4 py-6'}>
                {appMode === 'Guide' && activeCharacter ? (
                    <Guide
                        character={activeCharacter}
                        onExit={exitGuide}
                        onNavigate={handleNavigate}
                    />
                ) : (
                    <CharacterSelect
                        characters={characters}
                        addCharacter={addCharacter}
                        removeCharacter={handleRemove}
                        onPlay={startGuide}
                        initialSelectedId={activeCharacterId}
                    />
                )}
            </main>
            <Footer />
        </div>
    )
}

export default App
