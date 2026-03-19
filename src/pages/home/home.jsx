import { Header } from "../../components/header/header";
import fire from "../../assets/Hero/Fire.jpg";
import grass from "../../assets/Hero/Grass.jpg";
import water from "../../assets/Hero/Water.jpg";
import fighting from "../../assets/Hero/Fighting.jpg";
import "./home.css";
import { MapIcon } from "lucide-react";
import ParticleEffect from "../../components/ParticleEffects";
export function Home({ imageId }) {
  const images = {
    fire: fire,
    water: water,
    fighting: fighting,
    grass: grass,
  };
  const selectedType = imageId.replace("--", "");
  const heroImage = images[selectedType];
  console.log(selectedType);
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
    </>
  );
}
