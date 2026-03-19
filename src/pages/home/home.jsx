import { Header } from "../../components/header/header";
import fire from "../../assets/Hero/Fire.jpg";
import grass from "../../assets/Hero/Grass.jpg";
import water from "../../assets/Hero/Water.jpg";
import fighting from "../../assets/Hero/Fighting.jpg";
import elementFire from "../../assets/Elements/Fire.png";
import elementLeaf from "../../assets/Elements/Leaf.png";
import elementWater from "../../assets/Elements/Water.png";
import elementFighting from "../../assets/Elements/Fighting.png";
import pokeFire from "../../assets/Poke/Fire.png";
import pokeGrass from "../../assets/Poke/Grass.png";
import pokeWater from "../../assets/Poke/Water.png";
import pokeFighting from "../../assets/Poke/Fighting.png";
import "./home.css";
import { ArrowRight, MapIcon, Search } from "lucide-react";
import ParticleEffect from "../../components/ParticleEffects";
import { useUI } from "../../components/UIContext";
ArrowRight;

export function Home({ imageId }) {
  const { activeSearching, toggleMenu } = useUI();
  function searchInput() {
    activeSearching();
    toggleMenu();
  }
  const images = {
    fire: [fire, elementFire, pokeFire],
    water: [water, elementWater, pokeWater],
    fighting: [fighting, elementFighting, pokeFighting],
    grass: [grass, elementLeaf, pokeGrass],
  };
  const selectedType = imageId.replace("--", "");
  const heroImage = images[selectedType][0];
  return (
    <>
      <Header />
      <div className="hero-container">
        <div className="img-container">
          <ParticleEffect type={selectedType} />
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
        <img className="poke" src={images[selectedType][2]} alt="" />
        <img className="element" src={images[selectedType][1]} alt="" />
        <ul className={`${selectedType}`}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <img className="element" src={images[selectedType][1]} alt="" />
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
