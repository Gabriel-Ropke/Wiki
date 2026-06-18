import "./SelectedPokemonList.css"

export function SelectedPokemonList({ chosenPokemons, targetPokemonName }) {
    return (
        <ul className="selected-pokemon-list hide-scroll">
            {chosenPokemons.length === 0 ? (
                <li className="nothing">Nenhum Pokémon Selecionado</li>
            ) : (
                [...chosenPokemons].reverse().map((poke) => {
                    const isCorrect = targetPokemonName ? poke.name === targetPokemonName : false;
                    return (
                        <li key={poke.id} className={`card ${isCorrect ? "correct" : "error"}`}>
                            <img src={poke.img} alt={poke.name} />
                            <span>{poke.name}</span>
                        </li>
                    )
                })
            )}
        </ul>
    )
}
