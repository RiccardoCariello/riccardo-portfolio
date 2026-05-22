import { useState, useEffect } from 'react';
import './Home.css';

const FULL_NAME = 'RICCARDO CARIELLO';
const TECH = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Git'];

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
      <section className="hero">
        <p className="hero-tag">{'> INITIALIZING...'}</p>
        <h1
          className={`hero-name${typed ? ' glitch' : ''}`}
          data-text={displayed}
        >
          {displayed}
          <span className="cursor">_</span>
        </h1>
        <p className="hero-sub">DEVELOPER&nbsp;&nbsp;·&nbsp;&nbsp;CREATOR&nbsp;&nbsp;·&nbsp;&nbsp;NERD</p>
      </section>

      <section className="bio">
        <div className="terminal-block">
          <div className="terminal-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="terminal-title">whoami.sh</span>
          </div>
          <div className="terminal-body">
            <p>
              <span className="prompt">$</span>{' '}
              <span className="cmd">cat bio.txt</span>
            </p>
            <p className="output">
              Sviluppatore appassionato di codice, fumetti e cultura hacker.
            </p>
            <p className="output">
              Costruisco cose, le rompo, le ricostruisco meglio.
            </p>
            <br />
            <p>
              <span className="prompt">$</span>{' '}
              <span className="cmd">echo $EMAIL</span>
            </p>
            <p className="output">riccardo.c1995@outlook.com</p>
            <br />
            <p>
              <span className="prompt">$</span>{' '}
              <span className="cmd">echo $AGE</span>
            </p>
            <p className="output">28</p>
            <br />
            <p className="prompt blink-line">$ _</p>
          </div>
        </div>
      </section>

      <section className="tech">
        <h2 className="section-title">{'// TECH_STACK'}</h2>
        <div className="tech-grid">
          {TECH.map((t) => (
            <div key={t} className="tech-tag">
              {t}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
