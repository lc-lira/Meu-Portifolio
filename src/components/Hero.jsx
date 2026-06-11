import fotoPerfil from '../assets/fotohero.jpeg'
export default function Hero() {
    return (
        <section className="hero-container" id="inicio">
            <div className="hero-content">
                <span className="hero-subtitle">DESENVOLVEDOR FULL STACK</span>
                <h1 className="hero-title">
                    Olá, eu sou <br />
                    <span className="text-highlight">Lucas Lira</span>
                </h1>
                <p className="hero-description">
                    Conheça um pouco mais sobre mim
                </p>

                <div className="hero-buttons">
                    <a href="curriculo.pdf" download className="btn-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Baixar Currículo
                    </a>
                    <a href="#projetos" className="btn-secondary">
                        Ver Projetos
                    </a>
                </div>
            </div>
            <div className="hero-image-area">
                <img src= {fotoPerfil} alt="Foto de perfil de Lucas Lira" className="profile-img" />
            </div>
        </section>
    );
}