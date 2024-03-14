import React, { useState, useEffect } from 'react';
import "./PokemonList.css";
import White from '../../Images/White.png';
import { fetchPokemonList } from '../../Services/services';

const PokemonList = ({ onPokemonSelect }) => {
  // State to store the list of Pokémon
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Fetch the list of Pokémon when the component mounts
    const getPokemonList = async () => {
      try {
        const data = await fetchPokemonList();
        const { success, pokemon } = data;
        if (success) {
          // Update the state with the fetched list of Pokémon
          setPokemonList(pokemon);
        } else {
          console.error('Error fetching Pokemon list');
        }
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };
    getPokemonList();
  }, []); // Empty dependency array ensures useEffect runs only once after the component mounts

  // Function to handle click event on Pokémon card
  const handleCardClick = (pokemon) => {
    // Call the onPokemonSelect function passed as prop with the selected Pokémon
    onPokemonSelect(pokemon);
  };

  return (
    <div className="pokemon-list-container">
      {/* Map over the list of Pokémon and render each card */}
      {pokemonList.map((pokemon, index) => (
        <div id='container' key={index} onClick={() => handleCardClick(pokemon)}>
          <div id='all'>
            <div id='imageName'>
              {/* Display Pokémon image and ID */}
              <img src={pokemon.image} alt={pokemon.name} />
              <div id='id'>
                <p>No. {pokemon.id}</p>
              </div>
            </div>   
            <div id='name'>
              {/* Display Pokémon name */}
              <p>{pokemon.name}</p>
            </div> 
            <div id='caught'>
              {/* Display a placeholder image */}
              <img src={White} alt='pokeball' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
