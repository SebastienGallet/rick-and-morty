import React, { useState } from "react";
import CharacterModal from "./CharacterModal";
import "./CharacterCard.css";
import redCard from "../assets/images/redcard.webp";
import greenCard from "../assets/images/greencard.webp";

const CharacterCard = ({ name, image, status, gender, species, origin, location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const cardBackground = status === "Alive" ? greenCard : redCard;

  return (
    <div className="card" style={{ backgroundImage: `url(${cardBackground})`, backgroundSize: 'cover' }} onClick={() => setIsModalOpen(true)}>
      <img src={image} alt={name} />
      <div className="description">
        <h2 className="name">{name}</h2>
        <div className="aside">
          <p className="status">{status}</p>
          <p className="species">{species}</p>
        </div>
      </div>
      {/* {isModalOpen && 
        <CharacterModal 
          character={{ name, image, status, gender, species, origin, location }} 
          onClose={() => setIsModalOpen(false)} 
        />
      } */}
    </div>
  );
};

export default CharacterCard;
