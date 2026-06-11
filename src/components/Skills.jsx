import iconeHtml from '../assets/html5-original.svg';
import iconeCss from '../assets/css3-original.svg';
import iconeJs from '../assets/javascript-original.svg';
import iconeReact from '../assets/react-original.svg';
import iconeNode from '../assets/nodejs-original.svg';
import iconeJava from '../assets/java-original.svg';
import iconeSpring from '../assets/spring-original.svg';
import iconePostgres from '../assets/postgresql-original.svg';
import SkillCard from './SkillsCard';

export default function Skills() {
    const listaDeHabilidades = [
        { id: 1, nome: "HTML5", imagem: iconeHtml },
        { id: 2, nome: "CSS3", imagem: iconeCss },
        { id: 3, nome: "JavaScript", imagem: iconeJs },
        { id: 4, nome: "React", imagem: iconeReact },
        { id: 5, nome: "Node.js", imagem: iconeNode },
        { id: 6, nome: "Java", imagem: iconeJava },
        { id: 7, nome: "Spring Boot", imagem: iconeSpring },
        { id: 8, nome: "PostgreSQL", imagem: iconePostgres }
    ];
    return (
        <section className="habilidade-section" id="habilidades">
            <div className="section-title-container">
                <h2 className="section-title">Minhas Habilidades</h2>
            </div>
            <div className="grid-habilidade">
                {listaDeHabilidades.map((hab, index) => (
                    <SkillCard key={index} nome={hab.nome} imagem={hab.imagem} />
                ))}
            </div>
        </section>
    );
}