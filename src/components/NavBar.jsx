import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-xl font-bold hover:text-text-rexdy-green">
            <Link to="/" className="hover:text-rexdy-green">Rexdy</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="Projects.html" className="hover:text-text-rexdy-green">Projects</a>
            <a href="Socials.html" className="hover:text-text-rexdy-green">Social Links</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white dark:bg-gray-900 shadow-md border-t border-gray-100 dark:border-gray-700">
        <ul className="space-y-3">
            <li>
            <Link
              to="/Projects" 
              className="block text-gray-800 dark:text-gray-200 hover:text-rexdy-green dark:hover:text-rexdy-green font-medium transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Socials" 
              className="block text-gray-800 dark:text-gray-200 hover:text-rexdy-green dark:hover:text-rexdy-green font-medium transition-colors duration-200"
            >
              Social Links
            </Link>
          </li>
        </ul>
      </div>      
      )}
    </nav>
  );
};

export default NavBar;