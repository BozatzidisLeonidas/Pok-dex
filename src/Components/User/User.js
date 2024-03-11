import React, { Component } from 'react';
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
    this.fetchUserData();
  }

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
        this.props.updatePokemonList(pokemonList);
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
}


  render(){
    const { userName , pokemonList } = this.state;
    return (
        <div id='frame' >
          <div id='allElements'>
            <div id='textTrainer'>
                <p>Hello {userName}, these are your Pokémon:</p>
            </div>
            <div className="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill" >
              {pokemonList?.join(', ')}
            </div>
          </div>
        </div>
    );
  }
};

export default User;
