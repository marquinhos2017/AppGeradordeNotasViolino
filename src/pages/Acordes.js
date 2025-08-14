import React, { useState } from "react";

export default function Acordes() {
    const tons = ["C", "D", "E", "F", "G", "A", "B"];
    const tipos = ["Maior", "Menor"];
    const [tomSelecionado, setTomSelecionado] = useState("C");
    const [tipoSelecionado, setTipoSelecionado] = useState("Maior");
    const notasCromaticas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


    const gerarAcorde = (tom, tipo) => {
        const notasCrom = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const indice = notasCrom.indexOf(tom);

        let terca, quinta;

        if (tipo === "Maior") {
            terca = notasCrom[(indice + 4) % 12]; // +4 semitons
            quinta = notasCrom[(indice + 7) % 12]; // +7 semitons
        } else {
            terca = notasCrom[(indice + 3) % 12]; // +3 semitons
            quinta = notasCrom[(indice + 7) % 12]; // +7 semitons
        }

        return {
            nome: `${tom} ${tipo}`,
            notas: [tom, terca, quinta],
            intervalos:
                tipo === "Maior"
                    ? [`Tônica (${tom})`, `Terça maior (${terca})`, `Quinta justa (${quinta})`]
                    : [`Tônica (${tom})`, `Terça menor (${terca})`, `Quinta justa (${quinta})`],
            posicao: `Violino: ${tom} na corda G, ${terca} na corda D, ${quinta} na corda D | Violoncelo: ${tom} na corda C, ${terca} na corda A, ${quinta} na corda A`
        };
    };


    const acorde = gerarAcorde(tomSelecionado, tipoSelecionado);

    // estilos inline
    const styles = {
        app: {
            maxWidth: "400px",
            margin: "20px auto",
            padding: "20px",
            textAlign: "center",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: "#f5f5f7",
            borderRadius: "12px"
        },
        select: {
            width: "48%",
            padding: "10px",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "12px",
            outline: "none",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            marginBottom: "10px"
        },
        card: {
            backgroundColor: "#6f68dd",
            color: "#fff",
            borderRadius: "20px",
            padding: "15px 20px",
            marginTop: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease-in-out"
        },
        cardTitle: {
            fontSize: "1.5rem",
            marginBottom: "10px",
            textAlign: "center"
        },
        cardText: {
            fontSize: "1rem",
            marginBottom: "8px",
            lineHeight: "1.4"
        }
    };

    return (
        <div style={styles.app}>
            <h1>🎻 Gerador de Acordes</h1>
            <p>Escolha um tom e o tipo de acorde:</p>

            <div style={{ marginBottom: "10px" }}>
                <select
                    style={styles.select}
                    value={tomSelecionado}
                    onChange={(e) => setTomSelecionado(e.target.value)}
                >
                    {tons.map((tom) => (
                        <option key={tom} value={tom}>
                            {tom}
                        </option>
                    ))}
                </select>

                <select
                    style={{ ...styles.select, marginLeft: "10px" }}
                    value={tipoSelecionado}
                    onChange={(e) => setTipoSelecionado(e.target.value)}
                >
                    {tipos.map((tipo) => (
                        <option key={tipo} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>
            </div>

            <div style={styles.card}>
                <h2 style={styles.cardTitle}>{acorde.nome}</h2>
                <p style={styles.cardText}>
                    <strong>Notas:</strong> {acorde.notas.join(", ")}
                </p>
                <p style={styles.cardText}>
                    <strong>Intervalos:</strong> {acorde.intervalos.join(", ")}
                </p>
                <p style={styles.cardText}>
                    <strong>Posição no braço:</strong> {acorde.posicao}
                </p>
            </div>
        </div>
    );
}
