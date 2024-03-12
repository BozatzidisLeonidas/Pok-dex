import React, { Component } from 'react';
import "./User.css";

const User = (props) => {
    const { userName , pokemonList } = props;
    
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
  
};

export default User;
