import "./TryInput.css"
import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"

export function TryInput({ availableOptions, onSelect, disabled }) {
    const [inputActive, setInputActive] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0)
    const containerRef = useRef(null)

    useEffect(() => {
        // Função para detectar o clique fora
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setInputActive(false)
            }
        }
        
        // Adiciona o ouvinte de eventos quando o componente é montado
        document.addEventListener("mousedown", handleClickOutside)
        
        // Limpa o ouvinte quando o componente for desmontado
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Rola para o item selecionado quando navega pelo teclado
    useEffect(() => {
        if (inputActive) {
            const selectedElement = containerRef.current?.querySelector('.suggest.selected');
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [selectedIndex, inputActive]);

    const filteredPokemon = availableOptions.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase()
        const searchText = searchTerm.toLowerCase()
        return pokemonName.startsWith(searchText)
    })
    
    return (
        <div className="tryInputContainer" ref={containerRef}>
            <input 
                type="text" 
                className={`${inputActive ? "active" : ""}`} 
                maxLength={14} 
                value={searchTerm} 
                placeholder={disabled ? "Jogo Finalizado" : "Tenta a sorte, otário"} 
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSelectedIndex(0); // Reseta a seleção ao digitar
                    if (!disabled) setInputActive(true);
                }} 
                onClick={() => {
                    if (!disabled) setInputActive(true);
                }} 
                onFocus={() => {
                    if (!disabled) setInputActive(true);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && inputActive && filteredPokemon.length > 0) {
                        onSelect(filteredPokemon[selectedIndex] || filteredPokemon[0]);
                        setInputActive(false);
                        setSearchTerm("");
                        setSelectedIndex(0);
                    } else if (e.key === "ArrowDown") {
                        e.preventDefault();
                        if (selectedIndex < filteredPokemon.length - 1) {
                            setSelectedIndex(prev => prev + 1);
                        }
                    } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        if (selectedIndex > 0) {
                            setSelectedIndex(prev => prev - 1);
                        }
                    }
                }}
                disabled={disabled}
            />
            <ul className={`suggest-list hide-scroll ${inputActive ? "active" : ""}`}>
                {filteredPokemon.length === 0 ? (
                    <li className="nothing"><span>Não há nada que possa ser encontrado com a busca <span className="searchTerm">'{searchTerm}'</span>, melhore</span></li>
                ) : (
                    filteredPokemon.map((pokemon, idx) => (
                        <li className={`suggest ${idx === selectedIndex ? "selected" : ""}`} key={pokemon.id} onClick={() => { 
                            onSelect(pokemon);
                            setInputActive(false); 
                            setSearchTerm(""); 
                            setSelectedIndex(0);
                        }} onMouseEnter={() => setSelectedIndex(idx)}>
                            <img src={pokemon.img} alt={pokemon.name} />
                            <span className="name">{pokemon.name}</span>
                            <span className="numberDex">#{pokemon.numberDex}</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}