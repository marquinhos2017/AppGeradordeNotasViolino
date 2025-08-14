import React, { useState } from "react";

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const scalePatterns = {
    maior: [2, 2, 1, 2, 2, 2, 1],
    menor: [2, 1, 2, 2, 1, 2, 2],
    pentatonica_maior: [2, 2, 3, 2, 3],
    pentatonica_menor: [3, 2, 2, 3, 2],
};

export default function Escalas() {
    const [tonic, setTonic] = useState("C");
    const [scaleType, setScaleType] = useState("maior");
    const [scale, setScale] = useState([]);
    const [title, setTitle] = useState("🎵 Gerador de Escalas");

    const generateScale = () => {
        let startIndex = notes.indexOf(tonic);
        let pattern = scalePatterns[scaleType];
        let result = [notes[startIndex]];

        let index = startIndex;
        for (let step of pattern) {
            index = (index + step) % notes.length;
            result.push(notes[index]);
        }

        setScale(result);
        setTitle(`🎵 Escala ${tonic} (${scaleType.replace("_", " ")})`);
    };

    return (
        <div className="app">
            <h1 className="title fade-in">{title}</h1>

            <div className="form-group slide-up">
                <label>Tom:</label>
                <select value={tonic} onChange={(e) => setTonic(e.target.value)}>
                    {notes.map((note) => (
                        <option key={note} value={note}>
                            {note}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group slide-up">
                <label>Tipo de Escala:</label>
                <select value={scaleType} onChange={(e) => setScaleType(e.target.value)}>
                    <option value="maior">Maior</option>
                    <option value="menor">Menor</option>
                    <option value="pentatonica_maior">Pentatônica Maior</option>
                    <option value="pentatonica_menor">Pentatônica Menor</option>
                </select>
            </div>

            <button className="generate-btn bounce" onClick={generateScale}>
                Gerar Escala
            </button>

            {scale.length > 0 && (
                <div className="scale-card scale-appear">
                    <p>{scale.join(" - ")}</p>
                </div>
            )}
        </div>
    );
}
