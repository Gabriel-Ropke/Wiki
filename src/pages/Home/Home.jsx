import { Header } from "../../components/Header/Header";
import "./Home.css";
import { ArrowRight } from "lucide-react";
import ParticleEffect from "../../components/ParticleEffects/ParticleEffects";
import { element_assets } from "../../assets/constants/elementAssets";
import { useState } from "react";
import news from "./news";
import { Footer } from "../../components/Footer/Footer";
import solrock from "../../assets/icons/solrock.png"
import pokeman from "../../assets/icons/Pokeman.png"
import rotomDex from "../../assets/icons/RotomDex.png"
import whosThatPokemon from "../../assets/icons/whosThatPokemon.png"
import { PageWithHeader } from "../../layouts/PageWithHeader/PageWithHeader";
import { Link } from "react-router-dom";

export function Home({ elementId }) {
  const element = elementId.replace("--", "");
  const selectedElement = element_assets[element];
  const heroImage = selectedElement.Hero;
  const [heroActive, setHeroActive] = useState(false)
  function getRandomSide() {
    const side = parseInt(Math.random() * 2)
    return side === 1 ? "left" : "right"
  }
  function handleClickHeroTitle() {

    window.scrollTo({ top: 0 })
    return setHeroActive(!heroActive)
  }

  const side = getRandomSide()
  const ourContentImage = selectedElement[side]
  return (
    <PageWithHeader>
      <div className={heroActive ? "hero-container active" : "hero-container"}>
        <div className="img-container">
          <ParticleEffect type={selectedElement.type} />
          <img className="hero-image" src={heroImage} alt="" />
          <div className="overlay"></div>
        </div>
        <div className="hero-content-container">
          <h2 className="title" onClick={() => handleClickHeroTitle()}>
            Wiki <span>PokéNew</span>
          </h2>
          <ul className="hero-game-list">
            <li className="hero-game" style={{ "--primary-color": "rgb(var(--fire))" }}>
              <Link to="/pokedex">
                <div className="icon" data-name="Fogo">
                  <ArrowRight size={40} />
                </div>
                <div className="cardContent">
                  <div className="elementImg">
                    <img src={element_assets["fire"].icon} alt="" />
                  </div>
                </div>
              </Link>
            </li>
            <li className="hero-game" style={{ "--primary-color": "rgb(var(--water))" }}>
              <Link to="/pokedex">
                <div className="icon" data-name="Água">
                  <ArrowRight size={40} />
                </div>
                <div className="cardContent">
                  <div className="elementImg">
                    <img src={element_assets["water"].icon} alt="" />
                  </div>
                </div>
              </Link>
            </li>
            <li className="hero-game" style={{ "--primary-color": "rgb(var(--grass))" }}>
              <Link to="/pokedex">
                <div className="icon" data-name="Grama">
                  <ArrowRight size={40} />
                </div>
                <div className="cardContent">
                  <div className="elementImg">
                    <img src={element_assets["grass"].icon} alt="" />
                  </div>
                </div>
              </Link>
            </li>
            <li className="hero-game" style={{ "--primary-color": "rgb(var(--fighting))" }}>
              <Link to="/pokedex">
                <div className="icon" data-name="Lutador">
                  <ArrowRight size={40} />
                </div>
                <div className="cardContent">
                  <div className="elementImg">
                    <img src={element_assets["fighting"].icon} alt="" />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={heroActive ? "quantity-container active" : "quantity-container"}>
        <ul>
          <li>
            <a href="#Pokédex">
              <span className="number">5</span>
              <span className="text">Gerações</span>
            </a>
          </li>
          <li>
            <a href="#Quests">
              <span className="number">7</span>
              <span className="text">Games</span>
            </a>
          </li>
          <li>
            <a href="#NPCs">
              <span className="number">1.029</span>
              <span className="text">Players</span>
            </a>
          </li>
          <li>
            <a href="#Outfit">
              <span className="number">330</span>
              <span className="text">Registros</span>
            </a>
          </li>
        </ul>
      </div>
      <section className={`our-better-content-section ${side}`}>
        <h4>Nossos Conteúdos</h4>
        <img className="poke" src={selectedElement.Poke} alt="" />
        <ul>
          <li>
            <Link to="/daily">
              <div className="icon">
                <img src={solrock} className="floating" alt="" />
              </div>
              <span>Jogos diários</span>
            </Link>
          </li>
          <li>
            <Link to="/pokedex">
              <div className="icon">
                <img src={rotomDex} className="floating" alt="" />
              </div>
              <span>PokeDéx</span>
            </Link>
          </li>
          <li>
            <Link to="/pokedle">
              <div className="icon">
                <img src={whosThatPokemon} className="vertical" alt="" />
              </div>
              <span>Pokédle</span>
            </Link>
          </li>
          <li>
            <Link to="/minigames">
              <div className="icon">
                <img src={pokeman} className="horizontal" alt="" />
              </div>
              <span>Minigames</span>
            </Link>
          </li>
          <li>
            <Link to="/hackrom">
              <div className="icon">
                <img src={pokeman} className="horizontal" alt="" />
              </div>
              <span>Hack ROMs</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="icon"></div>
              <span>Outros</span>
            </Link>
          </li>
        </ul>
        <img className="icon" src={ourContentImage} alt="" />
      </section>
      <div className={`last-updates ${side}`}>
        <h4>Últimas Atualizações</h4>
        <ul>
          {news.map((notice, idx) => {
            return <li key={idx}>
              <a href={notice.url}>
                <div className="icon">
                  <ArrowRight size={32} />
                </div>
                <span className="date">{notice.date}</span>
                <h5>{notice.title}</h5>
                <p>{notice.p}</p>
              </a>
            </li>
          })}
        </ul>
      </div>
      <Footer />
    </PageWithHeader>
  );
}
