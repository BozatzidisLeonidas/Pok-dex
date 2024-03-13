import React, { useState } from "react";
import './Modal.css';
import { replacePokemon } from '../../Services/services';

const Modal = (props) => {
    const userName = localStorage.getItem('userName');
    const pokemonListJSON = props.pokemonList;
    const selectedPokemon = props.selectedPokemon.name;
    const updatePokemonList = props.updatePokemonList;
    
    const replace = async (pokemon) => {
        const sessionToken = localStorage.getItem('token');
        try {
            const data = await replacePokemon(pokemon, selectedPokemon, sessionToken);
            if (data.success) {
                localStorage.setItem('pokemonList', JSON.stringify(data.data));
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
                    <h2>Hello {userName} your Pokemon list is full. Choose a Pokemon to be replaced</h2>
                    <div>
                        {pokemonListJSON.map((pokemon) => (
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
