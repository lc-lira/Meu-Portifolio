import { useState } from 'react';

const dadosExperiencia = [
    { ano: 2023, texto: "Início no curso técnico intergrado ao ensino médio em T.I. na Firjan Senai Sesi" },
    { ano: 2024, texto: "Participação em diversos projetos extra-curriculares, como o Grand Prix e o Firjan Math en Jeans." },
    { ano: 2025, texto: "Participação no SAEP 2025, fesenvolvimento do sistema IoT VItaLink como Projeto Integrador do Senai e formação no ensino médio e no curso técnico." },
    { ano: 2026, texto: "Iniciei o curso superior de Tecnólogo em Tecnologia da Informação e Comunicação na FAETERJ Petrópolis e o Curso de Residência TIC em Software Do Serratec - Até o momento..." }
];

export default function Experiencia() {
    const [indexAtivo, setIndexAtivo] = useState(dadosExperiencia.length - 1);

    return (
        <section className="timeline-section" id="experiencia">
            <div className="section-title-container">
                <span className="section-subtitle">TRAJETÓRIA</span>
                <h2 className="section-title">Minha Experiência</h2>
            </div>

            <div className="timeline-arc-container">
                {dadosExperiencia.map((item, index) => {
                    const distancia = Math.abs(index - indexAtivo);
                    const deslocamentoY = distancia * distancia * 15;
                    const rotacao = (index - indexAtivo) * 6;         

                    return (
                        <div
                            key={item.ano}
                            className={`timeline-node ${index === indexAtivo ? 'active' : ''}`}
                            style={{
                                transform: `translateY(${deslocamentoY}px) rotate(${rotacao}deg)`,
                            }}
                            onClick={() => setIndexAtivo(index)}
                        >
                            <span className="node-year">{item.ano}</span>
                            <div className="node-dot">
                                {index === indexAtivo && <div className="active-line"></div>}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="timeline-content">
                <h3 className="content-year">{dadosExperiencia[indexAtivo].ano}</h3>
                <p className="content-text">{dadosExperiencia[indexAtivo].texto}</p>
            </div>
        </section>
    );
}