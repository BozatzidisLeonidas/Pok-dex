import React, {useState} from "react";
import './Modal.css';


const Modal = (props) => {

    const userName = localStorage.getItem('userName');
    const pokemonListJSON = props.pokemonList;
    const selectedPokemon=props.selectedPokemon.name;
    
    const replace = ( pokemon ) => {
        const sessionToken = localStorage.getItem('token');
        fetch('http://localhost:3000/replacePokemon', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pokemon , selectedPokemon, sessionToken }),
          })
          .then(async (response) => {
            const res = await response.json()
            if (res.success) {
              localStorage.setItem('pokemonList', JSON.stringify(res.data.list));  
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });  
    }
    
    return (
        <div>
          <div className="modal">
            <div className="overlay" onClick={() => props.toggleModal()}></div>
            <div className="modal-content">
              <h2>Hello {userName} your Pokemon list is full. Choose a Pokemon to be replaced</h2>
              <div>
                { pokemonListJSON.map((pokemon) => (
                  <div className="black b pv2 bb bw3 b--mid-gray br2 center pl3" id="CatchButton" key={pokemon} onClick={() => {
                    props.toggleModal();
                    replace(pokemon);
                  }}>
                    {pokemon}
                  </div>
                ))}
              </div>
              <a href="#" className="close" role="button" onClick={() => props.toggleModal()}>close</a>
            </div>
          </div>
        </div>
      );
      
};

export default Modal;