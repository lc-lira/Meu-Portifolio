import ProjectCard from './ProjectCard';

export default function Projects() {
    const listaDeProjetos = [
        {
            id: 1,
            titulo: "E-commerce",
            descricao: "Loja virtual completa com carrinho de compras e pagamentos.",
            tecnologias: ["Html", "CSS", "Bootstrap", "JS"]
        }
    ];

    return (
        <section className="projeto-section" id="projetos">
            <div className="section-title-container">
            <h2 className="section-title" >Projetos</h2>
            </div>
            <div className='grid-projeto'>
                {listaDeProjetos.map((projeto) => (
                    <ProjectCard
                        key={projeto.id}
                        titulo={projeto.titulo}
                        descricao={projeto.descricao}
                        tecnologias={projeto.tecnologias}
                    />
                ))}
            </div>
        </section>
    );
}