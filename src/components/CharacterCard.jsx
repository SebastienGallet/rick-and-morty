import React, { useState } from "react";
import CharacterModal from "./CharacterModal";

const CharacterCard = ({ name, image, status, gender, species, origin, location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card" onClick={() => setIsModalOpen(true)}> 
      <img src={image} alt={name} />
      <div className="description">
        <h2 className="name">{name}</h2>
        <p className="text-gray-700">{status}</p>
      </div>
      {isModalOpen && 
        <CharacterModal 
          character={{ name, image, status, gender, species, origin, location }} 
          onClose={() => setIsModalOpen(false)} 
        />
      }
    </div>
  );
};

export default CharacterCard;
