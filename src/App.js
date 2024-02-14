import React, { Component }  from 'react';
import Navigation from './Components/Navigation/Navigation';
import User from './Components/User/User';
import Modal from './Components/Modal/Modal'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonList from './Components/PokemonList/PokemonList';
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
        {/* <User /> */}
        <div className="PokemonListInfo">
          {selectedPokemon && <Info pokemon={selectedPokemon} />}
        </div>
        <div className='PokemonList'>
          <PokemonList onPokemonSelect={this.handlePokemonSelect} />
        </div>
        <Modal/>
        <ToastContainer />
      </div>
    );
  }
}

export default App;