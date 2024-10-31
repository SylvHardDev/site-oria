import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import burger from "../../assets/icons/burger-bar.png";
import search from "../../assets/icons/search.png";
import Logo from "../../assets/logo/logo_blue.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Fonction pour gérer le clic en dehors du menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Fermer le menu si le clic est en dehors du menu
      }
    }
    // Ajouter l'événement de clic lorsque le menu est ouvert
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Nettoyer l'événement lors du démontage du composant ou lorsque le menu se ferme
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Fonction pour détecter le défilement et changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change 100 pour ajuster quand la navbar change de style
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

  return (

    <nav className={`bg-white relative shadow-md ${scrolled ? "fixed top-0 left-0 w-full h-16 z-50000 transition-all duration-300" : "h-20"}`}>
      <div className="container  mx-auto px-6 flex items-center justify-around lg:justify-evenly h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo-oria"
              className="w-52 md:w-72"
              id="arrow-top"
            />
          </Link>
        </div>

        {/* Navigation as - hidden on small screens */}

        <div className="lien hidden lg:flex space-x-8 text-gray-700 m-0">
          <Link
            to="/"
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/" ? "active-link" : ""
              }`}
          >
            ACCUEIL
          </Link>
          <Link
            to="/about"
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/about" ? "active-link" : ""
              }`}
          >
            A PROPOS
          </Link>
          <Link
            to="/filiales"
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/filiales" ? "active-link" : ""
              }`}
          >
            NOS FILIALES
          </Link>
          <Link
            to="/projects"
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/projects" ? "active-link" : ""
              }`}
          >
            NOS PROJETS
          </Link>
          <Link
            to="/contact"
            className={`hover:text-blue-600 text-[10px] md:text-[13px] ${location.pathname === "/contact" ? "active-link" : ""
              }`}
          >
            CONTACTS
          </Link>
        </div>

        {/* Right Section: Search Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="recherche text-gray-600 hover:text-blue-600">
            <img className="icon-loop" src={search} alt="icone recherche" />
          </button>

          {/* Mobile Menu Button */}
          <button
            ref={burgerRef}
            className="burger lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img className="icon-burger" src={burger} alt="icone recherche" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when menu button is clicked */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden p-2 z-10 bg-slate-50  shadow-md"
        >
          <Link
            to="/"
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/" ? "active-link" : ""
              }`}
          >
            ACCUEIL
          </Link>
          <Link
            to="/about"
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/about" ? "active-link" : ""
              }`}
          >
            A PROPOS
          </Link>
          <Link
            to="/filiales"
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/filiales" ? "active-link" : ""
              }`}
          >
            NOS FILIALES
          </Link>
          <Link
            to="/projects"
            className={`block px-6 py-4 text-gray-700  rounded-sm hover:bg-gray-100 text-[12px] md:text-[13px] ${location.pathname === "/projects" ? "active-link" : ""
              }`}
          >
            NOS PROJETS
          </Link>
          <Link
            to="/contact"
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
