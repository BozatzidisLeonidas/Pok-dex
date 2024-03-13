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

  fetchUserData= async () => {
      try{
        const data = await fetchUserData();
        if (data.userName && data.pokemonList) {
          const { userName, pokemonList } = data;
          this.setState({ userName, pokemonList });
        } else {
          console.error('Invalid user data received:', data);
        }  
      }catch(error){
        console.log('Fetching user Data failed:',error);
      }

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
