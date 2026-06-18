import { X } from "lucide-react";
import "./PopUpCongratulations.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer, CartesianGrid } from "recharts";

export function PopUpCongratulations({ pokemon, isActive, onClose, attempts }) {
    // Mock data based on the design requested
    const mockData = [
        { day: "Segunda", value: 1 },
        { day: "Terça", value: 2 },
        { day: "Quarta", value: 4 },
        { day: "Quinta", value: 5 },
        { day: "Sexta", value: 2 },
        { day: "Sábado", value: 6 },
        { day: "Domingo", value: 7 },
    ];

    return (
        <div className={`popUpCongratulations ${isActive ? "active" : ""}`}>
            <div className="background"></div>
            <div className="popUpContainer">
                <h3>Parabéns, você acertou!</h3>
                <span className="close-btn" onClick={onClose}><X size={32} strokeWidth={4} /></span>
                {pokemon?.img && <img src={pokemon.img} alt={pokemon?.name} className="pokemon-img" />}
                <span className="pokemon-name">
                    {pokemon?.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ""} {pokemon?.numberDex}
                </span>

                <div className="attempts-container">
                    <span className="attempts-label">Número de tentativas:</span>
                    <span className="attempts-value">{attempts}</span>
                </div>

                <div className="statistics">
                    <h4>Estatísticas da semana</h4>
                    <div className="graphics">
                        <BarChart width={380} height={200} data={mockData} margin={{ top: 20, right: 10, left: -20, bottom: 30 }}>
                            <CartesianGrid strokeDasharray="6 3" vertical={false} stroke="#4f4f4fff" />
                            <XAxis
                                dataKey="day"
                                axisLine={{ stroke: 'black', strokeWidth: 3 }}
                                tickLine={false}
                                interval={0}
                                tick={({ x, y, payload }) => {
                                    const isSabado = payload.value === "Sábado";
                                    return (
                                        <g transform={`translate(${x},${y})`}>
                                            <text
                                                x={0}
                                                y={0}
                                                dy={16}
                                                textAnchor="end"
                                                fill={isSabado ? "var(--primary-color)" : "black"}
                                                fontWeight="bold"
                                                fontSize={12}
                                                transform="rotate(-45)"
                                            >
                                                {payload.value}
                                            </text>
                                        </g>
                                    );
                                }}
                            />
                            <YAxis
                                axisLine={{ stroke: 'black', strokeWidth: 3 }}
                                tickLine={false}
                                tick={{ fill: 'black', fontWeight: 'bold', fontSize: 14 }}
                            />
                            <Tooltip
                                cursor={{ fill: 'rgba(255, 127, 0, 0.2)' }}
                                contentStyle={{ borderRadius: '10px', border: '2px solid var(--primary-color)', fontWeight: 'bold', color: 'black' }}
                            />
                            <Bar dataKey="value" name="Tentativas" radius={[8, 8, 0, 0]}>
                                {mockData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill="var(--primary-color, #ff7f00)" />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>
                </div>
                <span className="see-more">Ver mais</span>
            </div>
        </div>
    )
}