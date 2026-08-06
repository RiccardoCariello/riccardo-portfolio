# CLAUDE.md — Contesto tecnico: riccardo-portfolio

Questo file descrive la struttura tecnica completa del progetto.
Usalo come contesto per qualsiasi sessione di sviluppo.

---

## Panoramica

Portfolio personale di **Riccardo Cariello** (sviluppatore, 28 anni).
Tre sezioni principali: **Home** (bio + competenze), **Devlog** (blog di sviluppo),
**Comics** (galleria fumetti). Tema visivo: hacker/cyberpunk — sfondo nero, verde CRT,
font pixel retrò, effetti glitch e scanlines CSS.

---

## Stack & dipendenze

| Pacchetto            | Versione  | Ruolo                                  |
|----------------------|-----------|----------------------------------------|
| react                | 18.2.0    | UI library                             |
| react-dom            | 18.2.0    | DOM rendering                          |
| react-router-dom     | 7.12.0    | Client-side routing (BrowserRouter)    |
| react-markdown       | 8.0.7     | Rendering Markdown nei post devlog     |
| react-scripts (CRA)  | 5.0.1     | Build tool / dev server                |
| web-vitals           | 2.1.4     | Performance monitoring                 |

**Linguaggio:** JavaScript (JSX) — nessun TypeScript.
**CSS:** file CSS separati per componente — nessun Sass, nessun framework UI.
**Font:** `PressStart2P` caricato da file TTF locale (`font/PressStart2P-vaV7.ttf`).

---

## Struttura directory

```
riccardo-portfolio/
├── font/
│   └── PressStart2P-vaV7.ttf       # Font pixel retrò (OFL license)
├── public/
│   ├── index.html                  # title: "Riccardo Cariello"
│   └── manifest.json               # PWA: name "Riccardo Cariello", bg #000000
├── src/
│   ├── index.js                    # Bootstrap React 18 (createRoot)
│   ├── App.js                      # BrowserRouter + Routes + Navbar
│   ├── App.css                     # Reset globale, variabili CSS, scanlines
│   ├── components/
│   │   ├── Navbar.js               # Navbar fissa, usa useLocation()
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.js                 # Landing page: hero, bio, competenze, tech
│   │   ├── Home.css
│   │   ├── Devlog.js               # Lista post (legge da data/devlog.js)
│   │   ├── DevlogPost.js           # Singolo post con ReactMarkdown
│   │   ├── Devlog.css              # CSS condiviso per Devlog + DevlogPost
│   │   ├── Comics.js               # Galleria fumetti (legge da data/comics.js)
│   │   └── Comics.css
│   └── data/
│       ├── devlog.js               # Array di post del blog
│       └── comics.js               # Array di fumetti
├── CLAUDE.md                       # Questo file
└── package.json
```

---

## Routing

Definito in `src/App.js`. La `<Navbar />` è fuori da `<Routes>` e appare su tutte le pagine.

| Path              | Componente    | Descrizione                            |
|-------------------|---------------|----------------------------------------|
| `/`               | `<Home />`    | Landing page principale                |
| `/devlog`         | `<Devlog />`  | Lista di tutti i post                  |
| `/devlog/:slug`   | `<DevlogPost />`| Singolo post, slug da `devlog.js`    |
| `/comics`         | `<Comics />`  | Galleria fumetti                       |

Non esiste una route 404 catch-all. `DevlogPost` gestisce slug non trovati
con un messaggio inline `ERROR_404: POST_NOT_FOUND`.

---

## Architettura CSS

### Variabili globali (`:root` in `App.css`)

```css
:root {
  --green:     #00ff41;   /* verde CRT — accento primario */
  --cyan:      #00e5ff;   /* cyan — accento secondario    */
  --bg:        #0a0a0a;   /* sfondo base                  */
  --text:      #e0e0e0;   /* testo principale             */
  --text-dim:  #555;      /* testo attenuato              */
  --border:    #1a1a1a;   /* bordi sottili                */
}
```

### Palette colori completa

| Colore           | Hex              | Uso                                          |
|------------------|------------------|----------------------------------------------|
| Verde CRT        | `#00ff41`        | Accento primario, navbar border, glitch       |
| Cyan             | `#00e5ff`        | Link, Comics header, bracket `[RC]` Navbar    |
| Sfondo           | `#0a0a0a`        | Background pagina                            |
| Card bg          | `#080808`        | Background card e blocchi terminale           |
| Testo            | `#e0e0e0`        | Testo principale                             |
| Testo dim        | `#555` / `#666`  | Output terminale, descrizioni                |
| Bordo sottile    | `#1a1a1a`        | Bordi card                                   |
| Viola            | `#bf5fff`        | Accent card Unity                            |
| Arancio          | `#ffaa00`        | Accent card Arte                             |
| Rosso errore     | `#ff3333`        | Messaggio 404                                |
| Dot rosso        | `#ff5f57`        | Terminal header (macOS style)                |
| Dot giallo       | `#febc2e`        | Terminal header                              |
| Dot verde dot    | `#28c840`        | Terminal header                              |

### Pattern CSS ricorrenti

**Scanlines CRT** — `body::after` in `App.css`:
```css
body::after {
  content: '';
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: repeating-linear-gradient(
    0deg, transparent, transparent 2px,
    rgba(0,0,0,0.045) 2px, rgba(0,0,0,0.045) 4px
  );
  pointer-events: none;
  z-index: 9998;
}
```

**Blocco terminale** — usato in `Home.css`, replicabile su altre pagine:
```html
<div class="terminal-block">
  <div class="terminal-header">
    <span class="dot red"/> <span class="dot yellow"/> <span class="dot green"/>
    <span class="terminal-title">nomefile.txt</span>
  </div>
  <div class="terminal-body">
    <p><span class="prompt">$</span> <span class="cmd">comando</span></p>
    <p class="output">output testo</p>
  </div>
</div>
```

**Accent color per-card** — usato nelle competenze in `Home.css`:
```jsx
<div className="comp-card" style={{ '--accent': '#00e5ff' }}>
  {/* .comp-label usa color: var(--accent) */}
  {/* .comp-tag  usa border-color: var(--accent) */}
  {/* .comp-card ha border-top: 3px solid var(--accent) */}
</div>
```

**Intestazione pagina standard** — pattern copiato da `Devlog.css`:
```html
<header class="page-header">
  <p class="page-header-tag">&gt; LABEL</p>
  <h1 class="page-title">TITOLO</h1>
  <p class="page-desc">Descrizione breve.</p>
</header>
```

**Divisore tra sezioni** — `Home.css`:
```html
<div class="divider"></div>
```
Gradiente: `transparent → #1a1a1a → #00ff41 → #1a1a1a → transparent` (opacity 0.35).

### Font usage

- `PressStart2P` — tutta l'UI: navbar, heading, titoli, tag, label
- `'Courier New', monospace` — testo lungo leggibile: output terminale, corpo post, descrizioni card

---

## Componenti — comportamento

### `Navbar.js`

- `position: fixed`, altezza `58px`, sopra ogni pagina
- Brand `[RC]`: parentesi in `--cyan`, "RC" in `--green`
- Usa `useLocation()` per determinare link attivo:
  - `/` → attivo solo se `pathname === '/'`
  - `/devlog` → attivo se `pathname.startsWith('/devlog')`
  - `/comics` → attivo se `pathname === '/comics'`
- Link non attivo: `#444`; hover: `--cyan`; attivo: `--green` con `text-shadow` glow
- Sottolineatura animata (`width 0 → 100%`) su hover e stato attivo

### `Home.js`

Tre costanti definite nel file:

```js
const FULL_NAME = 'RICCARDO CARIELLO';
const TECH = ['HTML','CSS','JavaScript','React','Python','Unity','C#','Git'];
const COMPETENZE = [
  { id:'unity',    label:'UNITY DEVELOPMENT',    accent:'#bf5fff', tags:[...] },
  { id:'frontend', label:'FRONTEND DEVELOPMENT',  accent:'#00e5ff', tags:[...] },
  { id:'backend',  label:'BACKEND DEVELOPMENT',   accent:'#00ff41', tags:[...] },
  { id:'arte',     label:'PERCORSO ARTISTICO',    accent:'#ffaa00', tags:[...] },
];
```

**Animazione typewriter:** `setInterval` da 90ms/carattere, scrive `FULL_NAME`
lettera per lettera via stato `displayed`. Quando finisce: `typed = true`.

**Effetto glitch:** attivato da classe `.glitch` sull'`<h1>` quando `typed === true`.
Usa `::before` e `::after` con `content: attr(data-text)` e `clip-path` per tagliare
fasce orizzontali del nome. Ciclo 5 secondi, glitch attivo a ~87–94%.

**Info card:** appare con `opacity 0→1` + `translateY(8px→0)` quando `typed === true`
(classe `.info-card.visible`). Mostra NAME e EMAIL in stile "data table" monospace.

**Struttura sezioni:** Hero → `.divider` → `// CHI_SONO` (terminal block) →
`.divider` → `// AREE_DI_COMPETENZA` (grid 2×2) → `.divider` → `// TECH_STACK`.

### `Devlog.js`

- Importa l'array da `src/data/devlog.js`
- Ordina per data decrescente: `[...posts].sort((a,b) => new Date(b.date) - new Date(a.date))`
- Ogni post è un `<Link to="/devlog/{slug}">` con classe `post-entry`
- Left border animato: `#1a1a1a` → `#00ff41` con glow su hover

### `DevlogPost.js`

- `const { slug } = useParams()`
- `posts.find(p => p.slug === slug)` — se null, mostra 404 inline
- Renderizza `post.content` (stringa Markdown) con `<ReactMarkdown>{post.content}</ReactMarkdown>`

### `Comics.js`

- Importa l'array da `src/data/comics.js`
- Grid `auto-fill, minmax(240px, 1fr)` — adattiva
- `cover === null` → placeholder con pattern diagonale + icona `?`
- `pages.length > 0` → bottone `> LEGGI`; altrimenti `{'// COMING SOON'}`

---

## Schema dati

### `src/data/devlog.js` — aggiungere un post

```js
const posts = [
  {
    slug: 'titolo-url-safe',          // usato come parametro URL /devlog/:slug
    title: 'Titolo Visibile',          // mostrato nella lista e nel post
    date: '2026-06-01',               // formato YYYY-MM-DD, usato per ordinamento
    tags: ['react', 'css'],           // array stringhe, mostrate come #tag
    excerpt: 'Testo breve per lista.', // visibile solo nella lista post
    content: `# Titolo H1\n\nTesto **markdown** completo.\n\n## Sezione\n...`,
  },
  // ... altri post
];

export default posts;
```

### `src/data/comics.js` — aggiungere un fumetto

```js
const comics = [
  {
    slug: 'nome-fumetto',
    title: 'TITOLO FUMETTO',
    date: '2026',
    cover: '/comics/nome-fumetto/cover.jpg',  // null = mostra placeholder
    description: 'Descrizione breve.',
    pages: [                                  // array vuoto = "COMING SOON"
      '/comics/nome-fumetto/pag-01.jpg',
      '/comics/nome-fumetto/pag-02.jpg',
    ],
  },
];

export default comics;
```

Le immagini dei fumetti vanno messe in `public/comics/nome-fumetto/` —
il path `/comics/...` è relativo alla cartella `public/`.

---

## Convenzioni di codice

- **Nessun TypeScript** — usare JSX standard
- **CSS separati** per ogni componente/pagina (importati nel file JS corrispondente)
- **Classi CSS in kebab-case**: `.post-entry`, `.comp-card`, `.hero-name`
- **Nuova pagina:** seguire la struttura di `Devlog.js` + `Devlog.css`:
  - Wrapper `<main className="[pagina]-page">` con `padding-top: 80px`
  - `<header className="page-header">` + `.page-header-tag` + `.page-title` + `.page-desc`
  - `max-width` tra 860px e 1100px, centrato con `margin: 0 auto`
- **Nessun commento JSX non protetto**: le stringhe che iniziano con `//` dentro JSX
  vanno scritte come `{'// testo'}` (ESLint `react/jsx-no-comment-textnodes`)
- **Build su Vercel usa `CI=true`**: qualsiasi warning ESLint blocca il deploy

---

## Script npm

```bash
npm start          # Dev server su http://localhost:3000
npm run build      # Build produzione in /build (CI=true su Vercel)
npm test           # Jest in watch mode
```

---

## Deployment

- **Piattaforma:** Vercel (collegato al repo GitHub)
- **Branch di default:** `master` (non `main`)
- **Auto-deploy:** ogni push su `master` triggera un nuovo deploy
- **Preview URL:** ogni branch secondario ottiene un URL di anteprima automatico
- **Build command:** `npm run build` (rilevato automaticamente da Vercel per CRA)
- **Output directory:** `build/`
- **Attenzione ESLint:** Vercel usa `CI=true` → i warning ESLint sono errori bloccanti.
  Verificare sempre con `npm run build` (senza `CI=false`) prima di pushare.
