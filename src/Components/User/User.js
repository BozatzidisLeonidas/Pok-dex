import React, { Component} from 'react';
import "./User.css";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          pokemonList: [],
          sessionToken: ''
        };
    }

  componentDidMount() {
    const userName = localStorage.getItem('userName');
    const pokemonListJSON = localStorage.getItem('pokemonList');
    const sessionToken = localStorage.getItem('token');
    let pokemonList = [];

    if (pokemonListJSON) {
        try {
          pokemonList = JSON.parse(pokemonListJSON);
        } catch (error) {
          console.error('Error parsing pokemonList JSON:', error);
        }
    }

    this.setState({ userName, pokemonList, sessionToken}, () =>{
      this.sendTokenToBackend();
    });
  }

  sendTokenToBackend() {

    const { sessionToken, pokemonList } = this.state;

    fetch('http://localhost:3000/usersPokemon', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionToken , pokemonList })
    })
    .then(data => {
        console.log("Token sent to backend successfully:", data);
    })
    .catch(error => {
        console.error("Error sending token to backend:", error);
    });
  }

  handlePokemonClick = (pokemon) => {
    console.log('Clicked Pokemon:', pokemon);
    // Perform any other actions here, such as sending to the backend
  };

    render(){
        const { userName, pokemonList, } = this.state;
        return (
            <div id='frame' >
              <div id='allElements'>
                <div id='textTrainer'>
                    <p>Hello {userName}, here are your Pokémon:</p>
                </div>
                <div className="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill" >
                  {pokemonList.join(', ')}
                </div>
              </div>
              
            </div>
        );
    }
};

export default User;
