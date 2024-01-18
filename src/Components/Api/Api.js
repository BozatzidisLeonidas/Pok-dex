import React, { Component } from 'react';
import Card from '../Card/Card';
import './Api.css';

class Api extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pokemon: [],
      };
    }
  
    componentDidMount() {
      this.fetchData();
    }

   
    fetchData = async () => {

        const promises = [];

        for (let i = 1; i <= 50; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
         }

        const results = await Promise.all(promises);

        const formattedPokemon = results.map((data) => ({

            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            weight: data.weight,
            height: data.height,
            type: data.types.map((type) => type.type.name),
            stats: data.stats.map(function(stat){
                return{
                    name: stat.stat.name, //stats[0-6].stat.name
                    base_stat: stat.base_stat,
                };
            }),
                
        }));

        // console.log("hi")

        this.setState({ pokemon: formattedPokemon });

        // console.log(this.state.pokemon)
    };
    
    render(){

        return (
            <div className="window">
              <div className="pokemon-list-container">
                {this.state.pokemon.map((p, index) => (
                  <div key={index} className="pokemon-list-item">
                    <Card pokemonList={p} onCardClick={this.props.onPokemonSelect} />
                  </div>
                ))}
              </div>
            </div>
        );
    }
    
}

export default Api;