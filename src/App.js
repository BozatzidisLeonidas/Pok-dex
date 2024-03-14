import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import User from './Components/User/User';
import Modal from './Components/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonList from './Components/PokemonList/PokemonList';
import Info from './Components/Info/Info';
import { fetchUserData } from './Services/services';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // Initialize state
    this.state = {
      selectedPokemon: null,
      modal: false,
      pokemonList: [],
      userName: null,
      sessionToken: null
    };
  }

  // Toggle modal visibility
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  // Handle selection of a Pokemon
  handlePokemonSelect = (pokemon) => {
    this.setState({ selectedPokemon: pokemon });
  };

  // Update the list of Pokemon
  updatePokemonList = (list) => {
    this.setState({ pokemonList: list });
  };

  // Fetch user data
  fetchUserData = async () => {
    try {
      const data = await fetchUserData();
      if (data.userName && data.pokemonList) {
        const { userName, pokemonList } = data;
        this.setState({ userName, pokemonList });
      } else {
        console.error('Invalid user data received:', data);
      }
    } catch (error) {
      console.log('Fetching user Data failed:', error);
    }
  }

  // Fetch user data when component mounts
  componentDidMount() {
    this.fetchUserData();
  }

  render() {
    const { selectedPokemon, modal, pokemonList, userName } = this.state;
    return (
      <div className="App">
        <Navigation />
        <User pokemonList={this.state.pokemonList} userName={userName} />
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
        {modal && <Modal toggleModal={this.toggleModal} pokemonList={pokemonList} selectedPokemon={selectedPokemon} updatePokemonList={this.updatePokemonList} />}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
