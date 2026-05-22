import { useState, useEffect } from 'react';
import './Home.css';

const FULL_NAME = 'RICCARDO CARIELLO';

const TECH = [
  'HTML', 'CSS', 'JavaScript', 'React',
  'Python', 'Unity', 'C#', 'Git',
];

const COMPETENZE = [
  {
    id: 'unity',
    label: 'UNITY DEVELOPMENT',
    accent: '#bf5fff',
    text: `Placeholder — sviluppo di giochi e applicazioni interattive con Unity e C#.
Esperienza con sistemi di gameplay, animazioni, fisica, shading e ottimizzazione
delle performance su piattaforme desktop e mobile.
Progetti personali che spaziano dal prototipo arcade al tool interno.`,
    tags: ['Unity', 'C#', 'GameDev', 'Shaders', 'Physics'],
  },
  {
    id: 'frontend',
    label: 'FRONTEND DEVELOPMENT',
    accent: '#00e5ff',
    text: `Placeholder — sviluppo di interfacce web moderne con React, HTML e CSS.
Attenzione a user experience, responsive design e accessibilità.
Propensione a costruire UI che abbiano sia solidità tecnica che identità visiva.`,
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'UX'],
  },
  {
    id: 'backend',
    label: 'BACKEND DEVELOPMENT',
    accent: '#00ff41',
    text: `Placeholder — sviluppo lato server, progettazione di API, gestione di database
e logica applicativa. Esperienza con Python e architetture server-side.
Interesse per la qualità del codice, la testabilità e la manutenibilità.`,
    tags: ['Python', 'REST API', 'Database', 'Server', 'Testing'],
  },
  {
    id: 'arte',
    label: 'PERCORSO ARTISTICO',
    accent: '#ffaa00',
    text: `Placeholder — creazione di fumetti originali, illustrazioni digitali e concept art.
La dimensione artistica non è separata da quella tecnica: si alimentano a vicenda.
Storie visive come estensione naturale del modo di pensare a sistemi e interfacce.`,
    tags: ['Fumetti', 'Illustrazione', 'Pixel Art', 'Concept Art'],
  },
];

function Home() {
  const [displayed, setDisplayed] = useState('');
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i >= FULL_NAME.length) {
        clearInterval(timer);
        setTyped(true);
      }
    }, 90);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <p className="hero-tag">{'> INITIALIZING...'}</p>
        <h1
          className={`hero-name${typed ? ' glitch' : ''}`}
          data-text={displayed}
        >
          {displayed}<span className="cursor">_</span>
        </h1>
        <p className="hero-sub">DEVELOPER&nbsp;&nbsp;·&nbsp;&nbsp;CREATOR&nbsp;&nbsp;·&nbsp;&nbsp;NERD</p>

        <div className={`info-card${typed ? ' visible' : ''}`}>
          <div className="info-row">
            <span className="info-label">NAME</span>
            <span className="info-sep" />
            <span className="info-value">RICCARDO CARIELLO</span>
          </div>
          <div className="info-row">
            <span className="info-label">EMAIL</span>
            <span className="info-sep" />
            <span className="info-value">riccardo.c1995@outlook.com</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CHI SONO ── */}
      <section className="section">
        <h2 className="section-title">{'// CHI_SONO'}</h2>
        <div className="terminal-block">
          <div className="terminal-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="terminal-title">intro.txt</span>
          </div>
          <div className="terminal-body">
            <p><span className="prompt">$</span> <span className="cmd">cat intro.txt</span></p>
            <p className="output long">
              [PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sono uno sviluppatore con una forte passione per la tecnologia e la creatività.
              Mi muovo con naturalezza tra il codice e l'arte, cercando sempre nuovi modi per
              unire le due dimensioni in progetti che abbiano sia spessore tecnico che impatto visivo.
            </p>
            <p className="output long">
              Credo nel potere dei side project come spazio di sperimentazione libera —
              dove le regole sono quelle che scegli tu e l'unico limite è la curiosità.
              Questo sito è uno di quelli.
            </p>
            <p className="prompt blink-line">$ _</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── COMPETENZE ── */}
      <section className="section">
        <h2 className="section-title">{'// AREE_DI_COMPETENZA'}</h2>
        <div className="competenze-grid">
          {COMPETENZE.map((comp) => (
            <div
              key={comp.id}
              className="comp-card"
              style={{ '--accent': comp.accent }}
            >
              <p className="comp-label">{comp.label}</p>
              <p className="comp-text">{comp.text}</p>
              <div className="comp-tags">
                {comp.tags.map((t) => (
                  <span key={t} className="comp-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── TECH STACK ── */}
      <section className="section tech">
        <h2 className="section-title">{'// TECH_STACK'}</h2>
        <div className="tech-grid">
          {TECH.map((t) => (
            <div key={t} className="tech-tag">{t}</div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Home;
