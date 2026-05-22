import { Link } from 'react-router-dom';
import posts from '../data/devlog';
import './Devlog.css';

function Devlog() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="devlog-page">
      <header className="page-header">
        <p className="page-header-tag">{'> SYSTEM LOG'}</p>
        <h1 className="page-title">DEVLOG</h1>
        <p className="page-desc">
          Registro dei miei sviluppi, esperimenti e riflessioni da programmatore.
        </p>
      </header>

      <div className="post-list">
        {sorted.map((post) => (
          <Link to={`/devlog/${post.slug}`} key={post.slug} className="post-entry">
            <div className="post-entry-meta">
              <span className="post-date">{post.date}</span>
              <div className="post-tags">
                {post.tags.map((t) => (
                  <span key={t} className="tag">#{t}</span>
                ))}
              </div>
            </div>
            <h2 className="post-entry-title">{post.title}</h2>
            <p className="post-entry-excerpt">{post.excerpt}</p>
            <span className="post-read-more">{'> READ MORE'}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Devlog;
