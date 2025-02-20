import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { throttle } from 'lodash-es';
import './Header.css';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about-us' },
  { name: 'Blog', path: '/blog' },
];

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const handleScroll = throttle(() => {
      const shouldScrolled = window.scrollY > heroSection.offsetHeight;
      headerRef.current?.classList.toggle('scrolled', shouldScrolled);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink to="/" className="logo" aria-label="Home">
          NUBIS
        </NavLink>

        <div className="nav-menu">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}