import React, { useState, useEffect } from 'react';
import "./PokemonList.css";
import White from '../../Images/White.png';
import {fetchPokemonList} from '../../Services/services'

const PokemonList = ({ onPokemonSelect }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemonList  = async () => {
      try {
        const data = await fetchPokemonList();
        const { success, pokemon } = data
        if (success) {
          setPokemonList(pokemon);
        } else {
          console.error('Error fetching Pokemon list');
        }
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };
    getPokemonList();
  }, []);

  const handleCardClick = (pokemon) => {
    onPokemonSelect(pokemon);
  };

  return (
    <div className="pokemon-list-container">
      {pokemonList.map((pokemon, index) => (
        <div id='container' key={index} onClick={() => handleCardClick(pokemon)}>
          <div id='all'>
            <div id='imageName'>
              <img src={pokemon.image} alt={pokemon.name} />
              <div id='id'>
                <p>No. {pokemon.id}</p>
              </div>
            </div>   
            <div id='name'>
              <p>{pokemon.name}</p>
            </div> 
            <div id='caught'>
              <img src={White} alt='pokeball' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
