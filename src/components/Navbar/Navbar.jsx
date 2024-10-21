import Logo from "../../assets/logo/logo_blue.png"
import search from "../../assets/icons/search.png"
import burger from "../../assets/icons/burger-bar.png"
import { useState } from 'react';
import "./Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white relative shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-evenly h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src={Logo} alt="Logo-oria" className="w-72" />
          </a>
        </div>

        {/* Navigation as - hidden on small screens */}

        <div className="lien hidden md:flex  space-x-8 text-gray-700 m-0 bg-red-300  ">
          <a href="/" className="hover:text-blue-600 active-link md:bg-yellow-400">ACCUEIL</a>
          <a href="/about" className="hover:text-blue-600">A PROPOS</a>
          <a href="/filiales" className="hover:text-blue-600">NOS FILIALES</a>
          <a href="/projects" className="hover:text-blue-600">NOS PROJETS</a>
          <a href="/contact" className="hover:text-blue-600">CONTACTS</a>
        </div>

        {/* Right Section: Search Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="recherche text-gray-600 hover:text-blue-600">
            <img className="icon-loop" src={search} alt="icone recherche" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="burger md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img className="icon-burger" src={burger} alt="icone recherche" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when menu button is clicked */}
      {isOpen && (
        <div className="md:hidden absolute z-10 bg-white shadow-md">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">ACCUEIL</a>
          <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">A PROPOS</a>
          <a href="/filiales" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">NOS FILIALES</a>
          <a href="/projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">NOS PROJETS</a>
          <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">CONTACTS</a>
        </div>
      )}
    </nav>
  );
}
