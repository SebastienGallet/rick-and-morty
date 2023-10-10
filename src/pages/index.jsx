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
      });
  }, []);

  function sortByName() {
    const sortedCharacters = [...characters].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setCharacters(sortedCharacters);
  }

  function sortBySpecies() {
    const sortedCharacters = [...characters].sort((a, b) =>
      a.species.localeCompare(b.species)
    );
    setCharacters(sortedCharacters);
  }

  function sortByGender() {
    const sortedCharacters = [...characters].sort((a, b) =>
      a.gender.localeCompare(b.gender)
    );
    setCharacters(sortedCharacters);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortBySpecies}>Sort by Species</button>
      <button onClick={sortByGender}>Sort by Gender</button>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;

