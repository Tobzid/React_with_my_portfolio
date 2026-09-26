import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";



function Navbar(){

const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#about" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    // { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navContainer">
        {/* Brand Logo */}
        <a href="#home" className="navLogo">
          Portfolio<span className="logoDot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navLinksDesktop">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="navLink">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="mobileToggleBtn" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dark Overlay Backdrop */}
      {isOpen && <div className="navOverlay" onClick={toggleMenu} />}

      {/* Mobile Slide-Over Menu (Slides in from Right) */}
      <div className={`mobileDrawer ${isOpen ? "open" : ""}`}>
        <div className="drawerHeader">
          <button 
            className="closeBtn" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="mobileNavLinks">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="mobileNavLink"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;




