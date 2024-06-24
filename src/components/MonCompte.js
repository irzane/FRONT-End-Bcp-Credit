import React from 'react';
import Navbar from './Navbar'; // Importez votre Navbar personnalisé
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const MonCompte = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-20 p-4 text-center">
        <h2 className="text-2xl font-bold mb-10">Mon Compte</h2> {/* Titre h2 ajouté */}
        <img src="/user.png" alt="User" className="h-20 mx-auto mb-10" />
        <div className="mx-auto w-2/3">
          <div className="flex mb-4">
            <div className="w-1/2 pr-2 text-left"> {/* Alignement à gauche */}
              <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value="Doe" // Remplacez par la valeur appropriée
                readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-1/2 pl-2 text-left"> {/* Alignement à gauche */}
              <label htmlFor="prenom" className="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value="John" // Remplacez par la valeur appropriée
                readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2 text-left"> {/* Alignement à gauche */}
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value="john.doe@example.com" // Remplacez par la valeur appropriée
                readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-1/2 pl-2 text-left"> {/* Alignement à gauche */}
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                value="*********" // Remplacez par la valeur appropriée
                readOnly
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
          <div className="flex justify-center mb-6 mt-10"> {/* Ajout de marge en haut (mt-10) et en bas (mb-6) */}
            <button className="bg-[#EE5F08] text-white px-6 py-2 rounded-lg focus:outline-none transition duration-300 ease-in-out hover:bg-[#f38f58]">Modifier mot de passe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonCompte;
