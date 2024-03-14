import React from "react";
import './Modal.css';
import { replacePokemon } from '../../Services/services';

const Modal = (props) => {
    // Retrieve user name and pokemon list from localStorage and props
    const userName = localStorage.getItem('userName');
    const pokemonListJSON = props.pokemonList;
    const selectedPokemon = props.selectedPokemon.name;
    const updatePokemonList = props.updatePokemonList;
    
    // Function to replace a pokemon
    const replace = async (pokemon) => {
        // Retrieve session token from localStorage
        const sessionToken = localStorage.getItem('token');
        try {
            // Call replacePokemon service to replace the pokemon
            const data = await replacePokemon(pokemon, selectedPokemon, sessionToken);
            if (data.success) {
                // Update localStorage with updated pokemon list
                localStorage.setItem('pokemonList', JSON.stringify(data.data));
                // Update pokemon list in the component state
                updatePokemonList(data.data);
            }
        } catch (error) {
            console.error('Error:', error);
        };
    }

    return (
        <div>
            <div className="modal">
                <div className="overlay" onClick={() => props.toggleModal()}></div>
                <div className="modal-content">
                    {/* Display greeting message with user name */}
                    <h2>Hello {userName} your Pokemon list is full. Choose a Pokemon to be replaced</h2>
                    <div>
                        {/* Map through pokemon list to display each pokemon */}
                        {pokemonListJSON.map((pokemon) => (
                            <div className="black b pv2 bb bw3 b--mid-gray br2 center pl3" id="CatchButton" key={pokemon} onClick={() => {
                                // Toggle modal and replace the pokemon when clicked
                                props.toggleModal();
                                replace(pokemon);
                            }}>
                                {pokemon}
                            </div>
                        ))}
                    </div>
                    {/* Close button */}
                    <a href="#" className="close" role="button" onClick={() => props.toggleModal()}>close</a>
                </div>
            </div>
        </div>
    );
};

export default Modal;
