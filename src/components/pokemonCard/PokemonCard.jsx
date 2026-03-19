import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pokemonCard.css";

export function PokemonCard({ pokemonList, pokemon }) {
  const navigate = useNavigate();

  let evolution = null;
  if (pokemon.evolve) {
    const evolutionId = pokemon.evolution_line.find(
      (id) => pokemonList[id].name !== pokemon.name,
    );
    evolution = pokemonList[evolutionId];
  }
  const [active, setActive] = useState(true);
  const [activePokemon, setActivePokemon] = useState(pokemon);
  function toggleActive() {
    setActive(!active);
    activePokemon === pokemon
      ? setActivePokemon(evolution)
      : setActivePokemon(pokemon);
  }
  const evolvedPokemon = () => {
    if (!active) {
      navigate(`pokemon/${evolution.name}`);
    } else {
      toggleActive();
    }
  };
  const basicPokemon = () => {
    if (active) {
      navigate(`pokemon/${pokemon.name}`);
    } else {
      toggleActive();
    }
  };
  return (
    <li key={pokemon.name} className="pokemon-card">
      <span className="name">{activePokemon.name}</span>
      {evolution ? (
        <div className="pokemon-container">
          <div
            onClick={basicPokemon}
            className={`pokemon ${active ? "active" : ""}`}
          >
            <img src={pokemon.sprite} alt="" />
          </div>
          <div
            onClick={evolvedPokemon}
            className={`pokemon ${active ? "" : "active"}`}
          >
            <img src={evolution.sprite} alt="" />
          </div>
        </div>
      ) : (
        <div className="pokemon-container">
          <div className="pokemon active" onClick={basicPokemon}>
            <img src={pokemon.sprite} alt="" />
          </div>
        </div>
      )}
      <ul>
        {activePokemon.type.map((type) => {
          return (
            <li style={{ backgroundColor: `rgb(var(--${type}))` }} key={type}>
              <a href={`#${type}`}>{type}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
