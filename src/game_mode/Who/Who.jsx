import { useState } from "react"
import "./Who.css"
import { POKEMON_DB } from "../../config/pokemonDb"
import { TryInput } from "../../components/TryInput/TryInput"
import { SelectedPokemonList } from "../../components/SelectedPokemonList/SelectedPokemonList"
import { getDailyPokemon } from "../../utils/daily"
export function Who({ onWin }) {
    const [availablePokemons, setAvailablePokemons] = useState(POKEMON_DB)
    const [chosenPokemons, setChosenPokemons] = useState([])

    // O Pokémon que o usuário precisa adivinhar
    const targetData = getDailyPokemon("who")
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
        <div className="who-container">
            <div className="who-image-container">
                <img src={targetData.img} alt="Who's that Pokemon?" style={{ width: '300px', filter: isGameOver ? 'none' : 'brightness(0)' }} />
            </div>
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