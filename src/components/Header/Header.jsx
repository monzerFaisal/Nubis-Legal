import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about-us" },
  { name: "Blog", path: "/blog" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation(); // Get current path

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero");
      if (heroSection && headerRef.current) {
        const shouldScrolled = window.scrollY > heroSection.offsetHeight;
        headerRef.current.classList.toggle("scrolled", shouldScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle resizing the window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu")
      ) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle the mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsDropdownOpen(false); // Close dropdown when opening mobile menu
  }, []);

  // Toggle the dropdown menu
  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  // Close all menus
  const closeMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar container">
        {/* Logo */}
        <Link to="/" className="logo">
          NUBIS
        </Link>

        {/* Desktop & Tablet Menu */}
        <div
          className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}
          ref={menuRef}
        >
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dropdown for smaller screens */}
        <div
          className="dropdown-menu"
          ref={dropdownRef}
          onClick={toggleDropdown}
          role="menu"
          aria-label="Toggle dropdown menu"
        >
          <button className="dropdown-btn">
            Menu <i className={`fas ${isDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-links" role="menu">
              {NAV_LINKS.map((link) => (
                <li key={link.path} role="menuitem">
                  <Link
                    to={link.path}
                    className={`dropdown-link ${isActive(link.path) ? "active" : ""}`}
                    onClick={closeMenus}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="mobile-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && toggleMobileMenu()}
        >
          <i
            className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
