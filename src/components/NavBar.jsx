import { NavLink } from 'react-router-dom';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

/** Navigation shared across all six required portfolio pages. */
export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <NavLink to="/" className="brand" aria-label="Sadya portfolio home">
          <span className="brand-mark" aria-hidden="true">SS</span>
          <span className="brand-name">Sadya Sinthi</span>
        </NavLink>

        <div className="nav-links">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
