import { Header } from "../../components/header/header";
import "./home.css";
import { ArrowRight, MapIcon, Search } from "lucide-react";
import ParticleEffect from "../../components/ParticleEffects";
import { useUI } from "../../components/UIContext";
import { element_assets } from "../../assets/constants/elementAssets";
import { PokemonCard } from "../../components/pokemonCard/PokemonCard";

export function Home({ elementId }) {
  const element = elementId.replace("--", "");
  const selectedElement = element_assets[element];
  const pokemon = selectedElement.Pokemon;
  const heroImage = selectedElement.Hero;
  const basicPokemon = Object.values(pokemon).filter(
    (p) => p.stage === "basic",
  );
  const { activeSearching, toggleMenu } = useUI();
  function searchInput() {
    activeSearching();
    toggleMenu();
  }
  return (
    <>
      <Header />
      <div className="hero-container">
        <div className="img-container">
          <ParticleEffect type={selectedElement.type} />
          <img src={heroImage} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="hero-content-container">
          <h2 className="title">
            Wiki <span>PokéNew</span>
          </h2>
          <ul className="select-list">
            <li data-text="Mapas">
              <a href="#Pokémon">
                <MapIcon size={32} />
              </a>
            </li>
            <li data-text="Mapas">
              <a href="#Pokémon">
                <MapIcon size={32} />
              </a>
            </li>
            <li data-text="Mapas">
              <a href="#Pokémon">
                <MapIcon size={32} />
              </a>
            </li>
            <li data-text="Mapas grandes">
              <a href="#Pokémon">
                <MapIcon size={32} />
              </a>
            </li>
          </ul>
          <div id="homeSearchInputContainer">
            <input
              type="text"
              id="homeSearchInput"
              placeholder="Pesquise aqui.."
              onClick={searchInput}
            />
            <label htmlFor="homeSearchInput">
              <Search size={24} />
            </label>
          </div>
        </div>
      </div>
      <div className="quantity-container">
        <ul>
          <li>
            <a href="#Pokédex">
              <span className="number">151</span>
              <span className="text">Pokémon</span>
            </a>
          </li>
          <li>
            <a href="#Quests">
              <span className="number">120</span>
              <span className="text">Quests</span>
            </a>
          </li>
          <li>
            <a href="#NPCs">
              <span className="number">60</span>
              <span className="text">NPCs</span>
            </a>
          </li>
          <li>
            <a href="#Outfit">
              <span className="number">520</span>
              <span className="text">Outfit</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="last-outfit">
        <h4>Últimos Pokémon</h4>
        <img className="poke" src={selectedElement.Poke} alt="" />
        <img className="element" src={selectedElement.icon} alt="" />
        <ul id="pokemonList" className={`${selectedElement.type}`}>
          {basicPokemon.map((base) => {
            return <PokemonCard pokemonList={pokemon} pokemon={base} />;
          })}
        </ul>
        <img className="element" src={selectedElement.icon} alt="" />
      </div>
      <div className="last-updates">
        <h4>Últimas Atualizações</h4>
        <ul>
          <li>
            <a href="#dragonite">
              <div className="icon">
                <ArrowRight size={32} />
              </div>
              <h5>Encontraram o Dragonite?</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ipsam saepe porro laborum obcaecati asperiores aliquid facere,
              </p>
            </a>
          </li>
          <li>
            <a href="#dragonite">
              <div className="icon">
                <ArrowRight size={32} />
              </div>
              <h5>Encontraram o Dragonite?</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ipsam saepe porro laborum obcaecati asperiores aliquid facere,
              </p>
            </a>
          </li>
          <li>
            <a href="#dragonite">
              <div className="icon">
                <ArrowRight size={32} />
              </div>
              <h5>Encontraram o Dragonite?</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ipsam saepe porro laborum obcaecati asperiores aliquid facere,
              </p>
            </a>
          </li>
          <li>
            <a href="#dragonite">
              <div className="icon">
                <ArrowRight size={32} />
              </div>
              <h5>Encontraram o Dragonite?</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ipsam saepe porro laborum obcaecati asperiores aliquid facere,
              </p>
            </a>
          </li>
        </ul>
        <a href="#seemore" className="see-more">
          ver mais
        </a>
      </div>
    </>
  );
}
