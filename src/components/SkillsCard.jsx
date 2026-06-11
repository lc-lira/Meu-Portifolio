export default function SkillCard({ nome, imagem }) {
    return (
        <div className="card-habilidade">
            <img src={imagem} alt={`Logo do ${nome}`} />
            <span>{nome}</span>
        </div>
    );
}