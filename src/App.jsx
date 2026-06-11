import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contato from './components/Contato';
import Experiencia from './components/Experiencia';

function App() {
  const [temaEscuro, setTemaEscuro] = useState(true);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  useEffect(() => {
    if (!temaEscuro) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [temaEscuro]);

  return (
    <main>
        <Header temaEscuro={temaEscuro} alternarTema={alternarTema} />
        <Hero />
        <Skills />
        <Projects />
        <Experiencia />
    <footer>
        <Contato />
    </footer>
    </main>

  );
}

export default App;