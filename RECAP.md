# Recap della Repository — riccardo-portfolio

> Generato il 2026-05-22

---

## Panoramica

**riccardo-portfolio** è un sito web di portfolio personale per **Riccardo Cariello**, sviluppato con React. Il progetto si trova in fase iniziale: la struttura base è implementata, ma le pagine dei singoli progetti sono ancora da popolare.

Il tema visivo è **retrò/arcade** — sfondo nero, testo chiaro e font custom [PressStart2P](https://fonts.google.com/specimen/Press+Start+2P).

---

## Stack Tecnologico

| Categoria       | Tecnologia                        |
|-----------------|-----------------------------------|
| Framework UI    | React 18.2.0                      |
| Routing         | React Router DOM 7.12.0           |
| Build tool      | Create React App (react-scripts 5)|
| Linguaggio      | JavaScript (JSX)                  |
| Styling         | CSS puro + font custom TTF        |
| Testing         | Jest + React Testing Library      |
| Performance     | web-vitals                        |
| IDE/Cloud dev   | IDX.dev (Google) con Node 20      |

---

## Struttura del Progetto

```
riccardo-portfolio/
├── font/
│   └── PressStart2P-vaV7.ttf      # Font retrò custom
├── public/
│   ├── index.html                 # Entry point HTML
│   ├── manifest.json              # PWA manifest
│   └── robots.txt
├── src/
│   ├── index.js                   # Bootstrap React
│   ├── App.js                     # Router root + route definitions
│   ├── App.css                    # Stili globali (dark theme, font)
│   ├── LandingPage.js             # Homepage (User + CardList + TechStack)
│   ├── User.js                    # Dati personali di Riccardo
│   ├── CardList.js                # Container con i 3 link-progetto
│   ├── Card.js                    # Componente link riutilizzabile
│   ├── TechStack.js               # Sezione tech skills
│   ├── Project1.js                # Pagina progetto 1 (stub)
│   ├── Project2.js                # Pagina progetto 2 (stub)
│   ├── Project3.js                # Pagina progetto 3 (stub)
│   ├── State.js                   # Esempio useState (non usato)
│   └── Exercise.js                # Componente Planets (non usato)
├── .idx/dev.nix                   # Config IDX.dev (Node 20, preview)
├── package.json
└── package-lock.json
```

---

## Routing

```
/           →  LandingPage    (homepage con info, card, tech stack)
/project1   →  Project1       (pagina progetto — da completare)
/project2   →  Project2       (pagina progetto — da completare)
/project3   →  Project3       (pagina progetto — da completare)
```

---

## Componenti — Dettaglio

### `LandingPage.js`
Componente principale della homepage. Compone:
- `User` — nome, cognome, età, email di Riccardo
- `CardList` — tre card cliccabili verso i progetti
- `TechStack` — lista delle tecnologie (HTML, CSS, JS, React)

### `Card.js`
Wrapper `<Link>` di React Router. Props: `to` (URL), `children` (contenuto). Styling tramite classe CSS `card`.

### `User.js`
Esporta il componente `Riccardo` con dati personali hardcoded:
- Nome: Riccardo Cariello
- Età: 28
- Email: riccardo.c1995@outlook.com

### `TechStack.js`
Lista statica delle tecnologie: HTML, CSS, JavaScript, React.

### `Project1/2/3.js`
Attualmente contengono solo un `<h1>Project X</h1>`. Pronti per essere popolati con contenuto reale.

---

## Stile e Tema

- **Background**: nero (`#000`)
- **Testo**: bianco fumé (`whitesmoke`)
- **Font**: PressStart2P (caricato via `@font-face` dal file TTF locale)
- **Allineamento**: centrato via `.App`
- **Dark mode**: definita direttamente nel CSS globale
- **Accessibilità**: media query `prefers-reduced-motion` presente per le animazioni

---

## Script Disponibili

```bash
npm start    # Dev server su porta 3000
npm run build  # Build di produzione in /build
npm test     # Test runner Jest in watch mode
npm run eject  # Eject da CRA (irreversibile)
```

---

## Stato del Codice

| Aspetto                      | Stato                               |
|------------------------------|-------------------------------------|
| Struttura pagine             | Implementata                        |
| Routing                      | Funzionante                         |
| Landing page                 | Funzionante                         |
| Pagine progetti (1/2/3)      | Stub vuoti — da completare          |
| Stili globali                | Implementati (dark + font retrò)    |
| CI/CD                        | Assente                             |
| PWA metadata                 | Generica (ancora "React App")       |
| TypeScript                   | Non configurato                     |
| Componenti non usati         | `State.js`, `Exercise.js`           |

---

## Punti da Completare

1. **Pagine progetto** — aggiungere descrizioni, screenshot, link ai repository o demo
2. **PWA metadata** — aggiornare `name` e `short_name` in `public/manifest.json`
3. **Titolo HTML** — aggiornare il `<title>` in `public/index.html` da "React App"
4. **Pulizia codice** — rimuovere o spostare `State.js` ed `Exercise.js` se non necessari
5. **Deploy** — configurare GitHub Actions o Vercel/Netlify per deployment automatico
6. **Accessibilità e SEO** — aggiungere meta description e `alt` text alle immagini

---

## Storia Git (ultimi commit)

| Hash      | Messaggio                              |
|-----------|----------------------------------------|
| `4923a46` | modifiche                              |
| `47a7c63` | creazioni card pagine secondarie       |
| `d267604` | push permessi                          |
| `b961abb` | Creazione Landing Page                 |
| `ab4be9a` | Initialize project using Create React App |
