import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import posts from '../data/devlog';
import './Devlog.css';

function DevlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="devlog-page">
        <div className="not-found">
          <p className="nf-error">ERROR_404: POST_NOT_FOUND</p>
          <Link to="/devlog" className="back-link">{'< TORNA AL DEVLOG'}</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="devlog-page">
      <Link to="/devlog" className="back-link">{'< DEVLOG'}</Link>
      <article className="post-full">
        <div className="post-full-meta">
          <span className="post-date">{post.date}</span>
          <div className="post-tags">
            {post.tags.map((t) => (
              <span key={t} className="tag">#{t}</span>
            ))}
          </div>
        </div>
        <h1 className="post-full-title">{post.title}</h1>
        <div className="post-full-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

export default DevlogPost;
