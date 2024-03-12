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
      pokemonList: [],
      userName: null,
      sessionToken: null
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

  fetchUserData() {
    const sessionToken = localStorage.getItem('token');
    fetch('http://localhost:3000/userData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionToken })
    })
    .then(response => response.json())
    .then(data => {
        const { userName, pokemonList } = data;
        this.setState({ userName, pokemonList, sessionToken });
        // this.props.updatePokemonList(pokemonList);
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
  }

  componentDidMount() {
    this.fetchUserData();
  }

  render() {
    const { selectedPokemon, modal, pokemonList, userName} = this.state;
    return (
      <div className="App">
        <Navigation />
        <User pokemonList = {this.state.pokemonList} userName = {userName}/>
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
        {modal && <Modal toggleModal={this.toggleModal} pokemonList={pokemonList} selectedPokemon={selectedPokemon} updatePokemonList={this.updatePokemonList}/>}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
