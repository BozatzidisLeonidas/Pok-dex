import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import User from './Components/User/User';
import Modal from './Components/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonList from './Components/PokemonList/PokemonList';
import Info from './Components/Info/Info';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedPokemon: null,
      modal: false,
      pokemonList: []
    };
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handlePokemonSelect = (pokemon) => {
    this.setState({ selectedPokemon: pokemon });
  };

  updatePokemonList = (list) => {
    this.setState({ pokemonList: list });
  };

  render() {
    const { selectedPokemon, modal, pokemonList } = this.state;
    return (
      <div className="App">
        <Navigation />
        <User updatePokemonList={this.updatePokemonList} />
        <div className="PokemonListInfo">
          {selectedPokemon && (
            <Info
              pokemon={selectedPokemon}
              toggleModal={this.toggleModal}
              updatePokemonList={this.updatePokemonList}
            />
          )}
        </div>
        <div className="PokemonList">
          <PokemonList onPokemonSelect={this.handlePokemonSelect} />
        </div>
        {modal && <Modal toggleModal={this.toggleModal} pokemonList={pokemonList} selectedPokemon={selectedPokemon} />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
