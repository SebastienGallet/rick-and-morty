import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard.jsx";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setCharacters(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(characters);

  return (
    <div className="containercards">
      {characters.map((character) => (
        <CharacterCard 
          key={character.id} 
          name={character.name} 
          image={character.image} 
          status={character.status} 
          gender={character.gender} 
          species={character.species} 
          origin={character.origin.name} 
          location={character.location.name} 
/>
      ))}
    </div>
  ); 
}

export default CharacterList;
