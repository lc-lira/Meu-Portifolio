import { Sun, Moon } from '@solar-icons/react';

export default function Header({ temaEscuro, alternarTema }) {
    return (
        <header className='header-container'>
            <h2>
                <span style={{ color: 'var(--cor-destaque)' }}>&lt;</span>
                Lucas Lira
                <span style={{ color: 'var(--cor-destaque)' }}> /&gt;</span>
            </h2>
            <nav>
                <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                </ul>
            </nav>
            <button onClick={alternarTema} className="btn-tema" style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}>
                {temaEscuro ? (
                    <Sun size={28} color="#FFD700" weight="Bold" />
                ) : (
                    <Moon size={28} color="#333333" weight="Bold" />
                )}
            </button> 
        </header>
    );
}