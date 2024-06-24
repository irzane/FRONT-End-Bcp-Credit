import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const openServicesDropdown = () => {
    setIsServicesOpen(true);
  };

  const closeServicesDropdown = () => {
    setIsServicesOpen(false);
  };

  const openAccountDropdown = () => {
    setIsAccountOpen(true);
  };

  const closeAccountDropdown = () => {
    setIsAccountOpen(false);
  };

  return (
    <nav className="bg-white h-20 w-4/5 mx-auto mt-4 p-4 rounded-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-black text-lg font-bold" style={{ fontFamily: 'Arial', color: '#2C0B07' }}>
            <img src="/logo.png" alt="Logo" className="h-10 mr-2" /> {/* Utilisation de l'image du logo */}
          </div>
        </div>
        <ul className="flex space-x-8 text-center">
          <li className="text-black hover:text-[#EF6011] px-4 py-2" style={{ fontFamily: 'Arial' }}>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <a href="/">Home</a>
          </li>
          <li className="relative text-black px-4 py-2" style={{ fontFamily: 'Arial' }}
              onMouseEnter={openServicesDropdown} onMouseLeave={closeServicesDropdown}>
            <button className="focus:outline-none hover:text-[#EF6011]">
              Services <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isServicesOpen && (
              <ul className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg" style={{ fontFamily: 'Arial' }}
                  onMouseEnter={openServicesDropdown} onMouseLeave={closeServicesDropdown}>
                <li className="px-4 py-2 hover:bg-white-smoke">
                  <a href="/entreprise" className="hover:text-[#EF6011]">Entreprise</a>
                </li>
                <li className="px-4 py-2 hover:bg-white-smoke">
                  <a href="/particulier" className="hover:text-[#EF6011]">Particulier</a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative text-black px-4 py-2" style={{ fontFamily: 'Arial' }}
              onMouseEnter={openAccountDropdown} onMouseLeave={closeAccountDropdown}>
            <button className="focus:outline-none hover:text-[#EF6011]">
              Mon Compte <FontAwesomeIcon icon={faUserCircle} className="ml-1" />
            </button>
            {isAccountOpen && (
              <ul className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg " style={{ fontFamily: 'Arial' }}
                  onMouseEnter={openAccountDropdown} onMouseLeave={closeAccountDropdown}>
                <li className="px-4 py-2 hover:bg-white-smoke">
                  <a href="/moncompte" className="hover:text-[#EF6011]">Mon Compte</a>
                </li>
                <li className="px-4 py-2 hover:bg-white-smoke">
                  <a href="/login" className="hover:text-[#EF6011]">Logout</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
