export default function ProjectCard({ titulo, descricao, tecnologias }) {
    return (
        <div className="card-projeto">
            <h4>{titulo}</h4>
            <p>{descricao}</p>

            <div className="tags-container">
                {tecnologias.map((tech, index) => (
                    <span key={index} className="tag">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}