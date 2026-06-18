import "./Daily.css"
import { PageWithHeader } from "../../layouts/PageWithHeader/PageWithHeader";
import { useState, useEffect } from "react";
import solrock from "../../assets/icons/solrock.png"
import { Tcg } from "../../game_mode/Tcg/Tcg";
import { PopUpCongratulations } from "../../components/PopUpCongratulations/PopUpCongratulations"
import { Description } from "../../game_mode/Description/Description";
import { Pokedle } from "../../game_mode/Pokedle/Pokedle"
import { Parts } from "../../game_mode/Parts/Parts"
import { Who } from "../../game_mode/Who/Who"
export function Daily() {
    const [sideCollapsed, setSideCollapsed] = useState(true)
    const [activeGame, setActiveGame] = useState("tcg")
    const completeGames = ["tcg", "pokedle"]
    const [timeLeft, setTimeLeft] = useState("");

    // State to control the popup visibility and the won pokemon data
    const [showPopup, setShowPopup] = useState(false);
    const [wonPokemon, setWonPokemon] = useState(null);
    const [attemptsCount, setAttemptsCount] = useState(0);

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            // Cria a data da próxima meia-noite (00:00:00 do dia seguinte)
            const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

            const diffMs = tomorrow - now; // Milissegundos restantes

            // Extrai horas, minutos e segundos
            const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diffMs / 1000 / 60) % 60);
            const seconds = Math.floor((diffMs / 1000) % 60);

            // Formata com 2 dígitos (ex: "09:05:03")
            const formattedTime = [
                hours.toString().padStart(2, '0'),
                minutes.toString().padStart(2, '0'),
                seconds.toString().padStart(2, '0')
            ].join(':');

            setTimeLeft(formattedTime);
        };

        updateTimer(); // Roda a primeira vez
        const interval = setInterval(updateTimer, 1000); // Atualiza a cada 1 segundo

        return () => clearInterval(interval); // Limpeza ao desmontar
    }, []);

    const handleWin = (pokemon, attempts) => {
        setWonPokemon(pokemon);
        setAttemptsCount(attempts);
        setShowPopup(true);
    };

    const GAME_MODES = {
        "tcg": {
            id: "tcg",
            title: "TCG",
            icon: solrock,
            game_mode: <Tcg onWin={handleWin} />
        },
        "parts": {
            id: "parts",
            title: "Pokémon Parts",
            icon: solrock,
            game_mode: <Parts onWin={handleWin} />
        },
        "who": {
            id: "who",
            title: "Who's That Pokémon",
            icon: solrock,
            game_mode: <Who onWin={handleWin} />
        },
        "pokedle": {
            id: "pokedle",
            title: "Pokédle",
            icon: solrock,
            game_mode: <Pokedle onWin={handleWin} />
        },
        "description": {
            id: "description",
            title: "Description",
            icon: solrock,
            game_mode: <Description onWin={handleWin} />
        }
    }

    return (
        <>
            <PageWithHeader mainClass="daily-main">
                <aside className={`nav-container ${sideCollapsed ? "" : "collapsed"}`} >
                    <h2 onClick={() => setSideCollapsed(!sideCollapsed)}>
                        <img src={solrock} alt="" />
                    </h2>
                    <nav>
                        <ul>
                            {Object.values(GAME_MODES).map((mode, idx) => (
                                <li key={mode.id} className={`${activeGame == mode.id ? "active" : ""} ${completeGames.includes(mode.id) ? "completed" : ""}`} onClick={() => setActiveGame(mode.id)}>
                                    <div className="icon">
                                        <img src={mode.icon} alt="" />
                                    </div>
                                    <span>{mode.title}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <div className="game">
                    <h3>{GAME_MODES[activeGame].title}</h3>
                    {completeGames.includes(GAME_MODES[activeGame].id) ?
                        <span className="timer">Reseta novamente em {timeLeft}</span>
                        : ""}
                    <section className="mode-container">
                        {GAME_MODES[activeGame].game_mode}
                    </section>
                </div>
            </PageWithHeader>
            <PopUpCongratulations
                pokemon={wonPokemon}
                isActive={showPopup}
                onClose={() => setShowPopup(false)}
                attempts={attemptsCount}
            />
        </>
    )
}