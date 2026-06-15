import { Header } from "../../components/header/header";
import "./home.css";
import { ArrowRight } from "lucide-react";
import ParticleEffect from "../../components/ParticleEffects";
import { element_assets } from "../../assets/constants/elementAssets";
import { useState } from "react";
import news from "./news";
import { Footer } from "../../components/footer/Footer";
import solrock from "../../assets/icons/solrock.png"
import { PageWithHeader } from "../../components/header/pageWithHeader";

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
              <a href="#pokedex">
                <div className="icon" data-name="pokedex">
                  <ArrowRight size={40} />
                </div>
                <div className="cardContent">
                  <div className="elementImg">
                    <img src={element_assets["fire"].icon} alt="" />
                  </div>
                </div>
              </a>
            </li>
            <li className="hero-game" style={{ "--primary-color": "rgb(var(--water))" }}>
              <a href="#pokedex">
                <div className="icon" data-name="pokedex">
                  <ArrowRight size={40} />
                </div>
                <div className="cardContent">
                  <div className="elementImg">
                    <img src={element_assets["water"].icon} alt="" />
                  </div>
                </div>
              </a>
            </li>
            <li className="hero-game" style={{ "--primary-color": "rgb(var(--grass))" }}>
              <a href="#pokedex">
                <div className="icon" data-name="pokedex">
                  <ArrowRight size={40} />
                </div>
                <div className="cardContent">
                  <div className="elementImg">
                    <img src={element_assets["grass"].icon} alt="" />
                  </div>
                </div>
              </a>
            </li>
            <li className="hero-game" style={{ "--primary-color": "rgb(var(--fighting))" }}>
              <a href="#pokedex">
                <div className="icon" data-name="pokedex">
                  <ArrowRight size={40} />
                </div>
                <div className="cardContent">
                  <div className="elementImg">
                    <img src={element_assets["fighting"].icon} alt="" />
                  </div>
                </div>
              </a>
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
              <span className="text">Minigames</span>
            </a>
          </li>
          <li>
            <a href="#NPCs">
              <span className="number">1.029</span>
              <span className="text">Jogadores</span>
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
            <a href="#pokedex">
              <div className="icon">
                <img src={solrock} className="floating" alt="" />
              </div>
              <span>Jogos diários</span>
            </a>
          </li>
          <li>
            <a href="#pokedex">
              <div className="icon"></div>
              <span>PokeDéx</span>
            </a>
          </li>
          <li>
            <a href="#pokedex">
              <div className="icon"></div>
              <span>Pokédle</span>
            </a>
          </li>
          <li>
            <a href="#pokedex">
              <div className="icon"></div>
              <span>Minigames</span>
            </a>
          </li>
          <li>
            <a href="#pokedex">
              <div className="icon"></div>
              <span>Jogos diários</span>
            </a>
          </li>
          <li>
            <a href="#pokedex">
              <div className="icon"></div>
              <span>Jogos diários</span>
            </a>
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
