import { useState } from "react"
import "./Description.css"
import { POKEMON_DB } from "../../config/pokemonDb"
import { TryInput } from "../../components/TryInput/TryInput"
import { SelectedPokemonList } from "../../components/SelectedPokemonList/SelectedPokemonList"
import { getDailyPokemon } from "../../utils/daily"
export function Description({ onWin }) {
    const [availablePokemons, setAvailablePokemons] = useState(POKEMON_DB)
    const [chosenPokemons, setChosenPokemons] = useState([])

    // O Pokémon que o usuário precisa adivinhar
    const targetData = getDailyPokemon("description")
    const TARGET_POKEMON = targetData.name

    const isGameOver = chosenPokemons.some(poke => poke.name === TARGET_POKEMON)

    const handleSelectPokemon = (selectedPokemon) => {
        setChosenPokemons(prev => [...prev, selectedPokemon])
        setAvailablePokemons(prev => prev.filter(p => p.id !== selectedPokemon.id))

        if (selectedPokemon.name === TARGET_POKEMON) {
            if (onWin) {
                onWin(selectedPokemon, chosenPokemons.length + 1);
            }
        }
    }

    return (
        <div className="description-game-container">
            <div className="description-container"><p>"{targetData.description}"</p></div>
            <div className="input-container">
                <TryInput
                    availableOptions={availablePokemons}
                    onSelect={handleSelectPokemon}
                    disabled={isGameOver}
                />
                <SelectedPokemonList chosenPokemons={chosenPokemons} targetPokemonName={TARGET_POKEMON} />
            </div>
        </div>
    )
}