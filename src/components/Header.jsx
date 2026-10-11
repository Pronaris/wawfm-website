import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/how-it-works', label: 'Sign-off' },
  { to: '/employers', label: 'Employers' },
  { to: '/candidates', label: 'Candidates' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link to="/" className="brand" aria-label="WA WorkFit Medical home">
          <img src="/brand/logo-colour.svg" alt="WA WorkFit Medical" width="190" height="42" />
        </Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
          ))}
          <Link to="/quote" className="nav-quote">Get a quote</Link>
          <Link to="/book" className="btn btn-primary nav-cta">Book</Link>
        </nav>
      </div>
    </header>
  );
}
