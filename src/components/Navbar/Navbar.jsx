import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import burger from "../../assets/icons/burger-bar.png";
import Logo from "../../assets/logo/svg-oria.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();


  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };


  const handleLinkClick = () => {
    scrollToTop();
    setIsOpen(false);  
  };

  return (
    <nav
      className={`w-full bg-white  shadow-lg fixed top-0 left-0  z-[999] transition-all ease-in-out ${scrolled ? "h-16" : "h-20"
        }`}
      id="navbar"
    >
      <div className="container h-full mx-auto px-6 flex items-center justify-between lg:justify-evenly">
        {/* Logo */}
        <div className="div-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src={Logo}
              alt="Logo-oria"
              className={`logo-oria transition-all ease-in-out ${scrolled ? "w-14" : "w-14 md:w-16"
                } `}
              id="arrow-top"
            />
          </Link>
        </div>

        {/* Navigation as - hidden on small screens */}

        <div className="lien hidden lg:flex space-x-8 text-gray-700 m-0">
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/" ? "active-link" : ""
              }`}
          >
            ACCUEIL
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/about" ? "active-link" : ""
              }`}
          >
            A PROPOS
          </Link>
          <Link
            to="/filiales"
            onClick={handleLinkClick}
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/filiales" ? "active-link" : ""
              }`}
          >
            NOS FILIALES
          </Link>
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/projects" ? "active-link" : ""
              }`}
          >
            NOS PROJETS
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/contact" ? "active-link" : ""
              }`}
          >
            CONTACTS
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            ref={burgerRef}
            className="burger lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img className="icon-burger" src={burger} alt="icone recherche" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className={`lg:hidden z-10 bg-slate-50 p-4 shadow-md fixed top-20 left-0 w-full transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
            } ${isOpen ? "animate-slide-down" : "animate-slide-up"}`}
        >
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/" ? "active-link" : ""
              }`}
          >
            ACCUEIL
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/about" ? "active-link" : ""
              }`}
          >
            A PROPOS
          </Link>
          <Link
            to="/filiales"
            onClick={handleLinkClick}
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/filiales" ? "active-link" : ""
              }`}
          >
            NOS FILIALES
          </Link>
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/projects" ? "active-link" : ""
              }`}
          >
            NOS PROJETS
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/contact" ? "active-link" : ""
              }`}
          >
            CONTACTS
          </Link>
        </div>
      )}
    </nav>
  );
}
