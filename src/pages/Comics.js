import comics from '../data/comics';
import './Comics.css';

function Comics() {
  return (
    <main className="comics-page">
      <header className="page-header">
        <p className="page-header-tag">{'> VISUAL_UPLOAD'}</p>
        <h1 className="page-title">COMICS</h1>
        <p className="page-desc">Fumetti originali. Arte, pixel e storie digitali.</p>
      </header>

      <div className="comics-grid">
        {comics.map((comic) => (
          <div key={comic.slug} className="comic-card">
            <div className="comic-cover">
              {comic.cover ? (
                <img src={comic.cover} alt={comic.title} />
              ) : (
                <div className="comic-cover-placeholder">
                  <span className="cover-ph-icon">?</span>
                </div>
              )}
            </div>
            <div className="comic-info">
              <h2 className="comic-title">{comic.title}</h2>
              <p className="comic-date">{comic.date}</p>
              <p className="comic-desc">{comic.description}</p>
              {comic.pages.length > 0 ? (
                <button className="comic-read-btn">{'> LEGGI'}</button>
              ) : (
                <span className="comic-soon">// COMING SOON</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Comics;
