import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const Api = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const promises = [];

            for (let i = 1; i <= 10; i++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                promises.push(fetch(url).then((res) => res.json()));
            }

            const results = await Promise.all(promises);

            const formattedPokemon = results.map((data) => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map((type) => type.type.name),
            }));
            console.log(pokemon)
            setPokemon(formattedPokemon);
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount
    
    return (
        <div>
            {pokemon.map((p, index) => (
                <Card key={index} pokemonList={p} />
            ))}
        </div>
    );
}

export default Api;