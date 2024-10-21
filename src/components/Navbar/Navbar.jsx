import Logo from "../../assets/logo/logo_blue.png"
import { useState } from 'react';
import "./Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="w flex-shrink-0">
          <a href="/">
            <img src={Logo} alt="Logo-oria" className="h-20" />
          </a>
        </div>

        {/* Navigation Links - hidden on small screens */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="/" className="hover:text-blue-600">ACCUEIL</a>
          <a href="/about" className="hover:text-blue-600">A PROPOS</a>
          <a href="/filiales" className="hover:text-blue-600">NOS FILIALES</a>
          <a href="/projects" className="hover:text-blue-600">NOS PROJETS</a>
          <a href="/contact" className="hover:text-blue-600">CONTACTS</a>
        </div>

        {/* Right Section: Search Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible when menu button is clicked */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
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
