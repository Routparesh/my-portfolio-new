import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 64; // height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title - reduced text size on mobile */}
          <h1 className="text-lg md:text-xl font-bold">
            My Portfolio
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links */}
          <nav className={`${
            isOpen 
              ? 'absolute top-16 left-0 right-0 bg-white shadow-md py-4' 
              : 'hidden'
            } md:relative md:top-0 md:flex md:items-center md:space-x-6 md:py-0 md:shadow-none w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
              <li>
                <a
                  href="#about"
                  className="block px-4 md:px-0 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block px-4 md:px-0 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => handleNavClick(e, 'skills')}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block px-4 md:px-0 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => handleNavClick(e, 'projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 md:px-0 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
