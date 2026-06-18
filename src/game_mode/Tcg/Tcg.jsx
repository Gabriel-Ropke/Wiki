import { useState, useEffect, useRef } from "react"
import { TryInput } from "../../components/TryInput/TryInput"
import { POKEMON_DB } from "../../config/pokemonDb"
import "./Tcg.css"
import { SelectedPokemonList } from "../../components/SelectedPokemonList/SelectedPokemonList"
import { getDailyPokemon } from "../../utils/daily"
export function Tcg({ onWin }) {
    const [availablePokemons, setAvailablePokemons] = useState(POKEMON_DB)
    const [chosenPokemons, setChosenPokemons] = useState([])

    // O Pokémon que o usuário precisa adivinhar
    const TARGET_POKEMON_DATA = getDailyPokemon("tcg")
    const TARGET_POKEMON = TARGET_POKEMON_DATA.name

    // O jogo acaba se o último pokémon escolhido for o alvo
    const isGameOver = chosenPokemons.some(poke => poke.name === TARGET_POKEMON)

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = TARGET_POKEMON_DATA.cards[0];
        
        img.onload = () => {
            // Limpa o canvas antes de desenhar
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Aplica o blur progressivo (começa em 40, reduz 5 a cada tentativa, mínimo 0)
            if (!isGameOver) {
                const currentBlur = Math.max(0, 40 - (chosenPokemons.length * 5));
                ctx.filter = `blur(${currentBlur}px)`;
            } else {
                ctx.filter = 'none';
            }
            
            // Desenha a imagem preenchendo o canvas
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }, [TARGET_POKEMON_DATA, isGameOver, chosenPokemons.length]);

    const handleSelectPokemon = (selectedPokemon) => {
        // Adiciona aos escolhidos
        setChosenPokemons(prev => [...prev, selectedPokemon])
        // Remove dos disponíveis
        setAvailablePokemons(prev => prev.filter(p => p.id !== selectedPokemon.id))

        if (selectedPokemon.name === TARGET_POKEMON) {
            if (onWin) {
                // Passa os dados do pokémon e o número de tentativas (as anteriores + a atual) para o PopUp
                onWin(selectedPokemon, chosenPokemons.length + 1);
            }
        }
    }

    return (
        <div className="tcg-container">
            <div className="cardContainer">
                <canvas ref={canvasRef} width={350} height={500} className="card"></canvas>
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