import { useEffect, useState, useRef, useCallback } from 'react';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      if (heroSection && headerRef.current) {
        const shouldScrolled = window.scrollY > heroSection.offsetHeight;
        headerRef.current.classList.toggle('scrolled', shouldScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const debounce = (fn, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    };

    const handleResize = debounce(() => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('.mobile-menu')
      ) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsDropdownOpen(false); // Close dropdown when opening mobile menu
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar container">
        <a href="#" className="logo">NUBIS</a>

        <div 
          className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}
          ref={menuRef}
        >
          <ul className="nav-links">
            <li><a href="/" className="nav-link active" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="/services" className="nav-link" onClick={closeMobileMenu}>Services</a></li>
            <li><a href="/about-us" className="nav-link" onClick={closeMobileMenu}>About</a></li>
            <li><a href="/blog" className="nav-link" onClick={closeMobileMenu}>Blog</a></li>
          </ul>
        </div>

        {/* Dropdown for smaller screens (480px and below) */}
        <div 
          className="dropdown-menu" 
          ref={dropdownRef} 
          onClick={toggleDropdown}
        >
          <button className="dropdown-btn">
            Menu <i className={`fas ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-links">
              <li><a href="/" className="dropdown-link" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="/services" className="dropdown-link" onClick={closeMobileMenu}>Services</a></li>
              <li><a href="/about-us" className="dropdown-link" onClick={closeMobileMenu}>About</a></li>
              <li><a href="/blog" className="dropdown-link" onClick={closeMobileMenu}>Blog</a></li>
            </ul>
          )}
        </div>

        <div 
          className="mobile-menu" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && toggleMobileMenu()}
        >
          <i 
            className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}
            aria-hidden="true"
          ></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
