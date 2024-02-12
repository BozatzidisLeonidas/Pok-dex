import React, { Component , }  from 'react';
import Navigation from './Components/Navigation/Navigation';
import User from './Components/User/User';
import SignIn from './Components/SignInPage/SignIn';
import PokemonList from './Components/PokemonList/PokemonList';
import Register from './Components/RegisterPage/Register'
import Info from './Components/Info/Info';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
    selectedPokemon: null,
    }
  }

  handlePokemonSelect = (pokemon) => {
    this.setState({ selectedPokemon: pokemon });
  };
 
  render(){
    const { selectedPokemon } = this.state;
    return (
      <div className="App">
        <Navigation />
        <div className="PokemonListInfo">
          {selectedPokemon && <Info pokemon={selectedPokemon} />}
        </div>
        <div className='PokemonList'>
          <PokemonList onPokemonSelect={this.handlePokemonSelect} />
        </div>
        <User />
      </div>
    );
  }
}

export default App;
