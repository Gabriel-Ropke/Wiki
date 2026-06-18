import { useState } from "react"
import "./Parts.css"
import { POKEMON_DB } from "../../config/pokemonDb"
import { TryInput } from "../../components/TryInput/TryInput"
import { SelectedPokemonList } from "../../components/SelectedPokemonList/SelectedPokemonList"
import { getDailyPokemon } from "../../utils/daily"
export function Parts({ onWin }) {
    const [availablePokemons, setAvailablePokemons] = useState(POKEMON_DB)
    const [chosenPokemons, setChosenPokemons] = useState([])

    // O Pokémon que o usuário precisa adivinhar
    const targetData = getDailyPokemon("parts")
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
        <div className="parts-game-container">
            <div className="parts-image-container">
                 {/* Por enquanto apenas recortamos uma parte da imagem usando clip-path para o jogo "Parts" */}
                 <img src={targetData.img} alt="Pokémon Part" style={{ width: '200px', clipPath: 'circle(35% at 40% 30%)' }} />
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