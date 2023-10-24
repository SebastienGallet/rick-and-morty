import React from "react";
import "./CharacterModal.css";

const CharacterModal = ({ character, onClose }) => {
  if (!character) return null; 
  console.log('here', character);

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>{character.status} - {character.species}</p>
        <p>Genre: {character.gender}</p>
        <p>Origine: {character.origin}</p>
        <p>Localisation actuelle: {character.location}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default CharacterModal;
