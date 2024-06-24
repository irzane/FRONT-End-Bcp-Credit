import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar'; // Importez votre Navbar personnalisé
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Entreprise = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [inputText, setInputText] = useState('');
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef1.current && !dropdownRef1.current.contains(event.target) &&
        dropdownRef2.current && !dropdownRef2.current.contains(event.target)
      ) {
        setIsDropdown1Open(false);
        setIsDropdown2Open(false);
      }
    };

    // Ajouter un écouteur d'événement à la fenêtre pour gérer les clics à l'extérieur des dropdowns
    document.addEventListener('click', handleClickOutside);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open);
    setIsDropdown2Open(false); // Fermer l'autre dropdown si ouvert
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
    setIsDropdown1Open(false); // Fermer l'autre dropdown si ouvert
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleDropdown1Click = (event) => {
    event.stopPropagation(); // Empêcher la propagation du clic pour éviter de fermer le dropdown
  };

  const handleDropdown2Click = (event) => {
    event.stopPropagation(); // Empêcher la propagation du clic pour éviter de fermer le dropdown
  };

  return (
    <div>
      <Navbar /> {/* Utilisation du Navbar que nous avons créé précédemment */}
      <div className="container mx-auto mt-20 p-4 text-center">
        <h2 className="text-2xl font-bold mb-10">Services / Particulier</h2>
        <div className="flex space-x-4 mb-10">
          {/* Dropdown 1 */}
          <div className="relative flex-1" onClick={handleDropdown1Click}>
            <button
              id="dropdownButton1"
              data-dropdown-toggle="dropdown"
              className={`text-black font-bold hover:text-[#EF6011] px-4 py-2 bg-white hover:bg-white-smoke focus:ring-1 focus:outline-none focus:ring-[#f7af88] font-medium rounded-lg text-sm inline-flex items-center w-full h-[40px] ${isDropdown1Open ? 'shadow-md' : ''}`}
              onClick={toggleDropdown1}
            >
              Code Produit <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isDropdown1Open && (
              <div ref={dropdownRef1} className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute mt-2" onClick={handleDropdown1Click}>
                <ul className="py-2 text-sm text-gray-700">
                  <li><a href="/option1" className="block px-4 py-2 hover:bg-gray-100">Option 1</a></li>
                  <li><a href="/option2" className="block px-4 py-2 hover:bg-gray-100">Option 2</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div className="relative flex-1" onClick={handleDropdown2Click}>
            <button
              id="dropdownButton2"
              data-dropdown-toggle="dropdown"
              className={`text-black font-bold hover:text-[#EF6011] px-4 py-2 bg-white hover:bg-white-smoke focus:ring-1 focus:outline-none focus:ring-[#f7af88] font-medium rounded-lg text-sm inline-flex items-center w-full h-[40px] ${isDropdown2Open ? 'shadow-md' : ''}`}
              onClick={toggleDropdown2}
            >
              Numéro Annexe <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isDropdown2Open && (
              <div ref={dropdownRef2} className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute mt-2" onClick={handleDropdown2Click}>
                <ul className="py-2 text-sm text-gray-700">
                  <li><a href="/option3" className="block px-4 py-2 hover:bg-gray-100">Option 3</a></li>
                  <li><a href="/option4" className="block px-4 py-2 hover:bg-gray-100">Option 4</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Text Input */}
          <div className="relative flex-1">
            <input
              type="text"
              id="textInput"
              name="textInput"
              placeholder="Code Banque"
              value={inputText}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500 h-[40px]"
            />
          </div>
        </div>

        {/* Table with Fixed Header and Scrollable Body */}
        <div className="overflow-x-auto">
          <div className="min-w-full shadow-md rounded-lg overflow-hidden">
            <div className="table-container overflow-y-auto h-64">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#f7af88]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider text-center">Colonne 1</th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider text-center">Colonne 2</th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider text-center">Colonne 3</th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider text-center">Colonne 4</th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider text-center">Colonne 5</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.from({ length: 20 }, (_, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ligne {i + 1} Colonne 1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ligne {i + 1} Colonne 2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ligne {i + 1} Colonne 3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ligne {i + 1} Colonne 4</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ligne {i + 1} Colonne 5</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entreprise;
