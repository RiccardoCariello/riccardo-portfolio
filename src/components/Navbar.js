import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { pathname } = useLocation();

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-bracket">[</span>RC<span className="brand-bracket">]</span>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/devlog" className={`nav-link${isActive('/devlog') ? ' active' : ''}`}>
            DEVLOG
          </Link>
        </li>
        <li>
          <Link to="/comics" className={`nav-link${isActive('/comics') ? ' active' : ''}`}>
            COMICS
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
