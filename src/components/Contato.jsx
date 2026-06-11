import logoLinkedin from '../assets/linkedin.png';
import logoGitHub from '../assets/github.png';

const listaContatos = [
    {
        id: 1,
        plataforma: "Linkedin",
        url: "https://www.linkedin.com/in/lucas-b-lira",
        icone: logoLinkedin
    },
    {
        id: 2,
        plataforma: "GitHub",
        url: "https://github.com/lc-lira",
        icone: logoGitHub
    }

];
export default function Contato() {

    return (
        <footer className='footer-container' id="contato">
            <h3>Vamos nos conectar?</h3>
            <div className='contatos'>
                {listaContatos.map((contato) => (
                    <a key={contato.id}
                        href={contato.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Acessar meu ${contato.plataforma}`} >
                        <img src={contato.icone} alt={contato.plataforma} />
                    </a>
                ))}
            </div>
        </footer>
    );
}