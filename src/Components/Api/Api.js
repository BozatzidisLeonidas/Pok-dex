import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Api.css';

const Api = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const promises = [];

            for (let i = 1; i <= 1; i++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                promises.push(fetch(url).then((res) => res.json()));
            }

            const results = await Promise.all(promises);

            const formattedPokemon = results.map((data) => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map((type) => type.type.name),
                stats: data.stats.map(function(stat){
                    return{
                        name: stat.stat.name, //stats[0-6].stat.name
                        base_stat: stat.base_stat,
                    }
                  }),
                

            }));
            console.log(pokemon)
            setPokemon(formattedPokemon);
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount
    
    return (
    <div className="window">
        <div className="pokemon-list-container">
            {pokemon.map((p, index) => (
                <div key={index} className="pokemon-list-item">
                     <Card pokemonList={p} />
                </div>
            ))}
        </div>

    </div>
    );
}

export default Api;