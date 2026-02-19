
import React, { useState,  useEffect  } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLink =
    "relative px-2 py-1 font-bold text-white hover:text-orange-700 transition";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "backdrop-blur-md bg-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="px-3 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <a className="sm:text-3xl text-xl font-bold" href="#home">
          SANZ<span className="text-orange-700">IDA</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="#home" className={navLink}>Home</a>
          <a href="#about" className={navLink}>About</a>
            <a href="#services" className={navLink} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#skills" className={navLink} onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#project" className={navLink}>Projects</a>
          <a href="#contact" className={navLink}>Contact</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col bg-transparent backdrop-blur-md px-1 py-1 text-sm space-y-1">
          <a href="#home" className={navLink} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className={navLink} onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className={navLink} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#skills" className={navLink} onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#project" className={navLink} onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className={navLink} onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
