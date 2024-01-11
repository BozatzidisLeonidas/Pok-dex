import React from 'react';
import "./Card.css";
import Caught from '../../Images/caught.png';

const Card = (props) => {
    console.log(props)
    const { id, image, name, type } = props.pokemonList;
    const formattedId = String(id).padStart(3, '0');

    return (
        <div id='container'>
            <div id='all'>
                <img src={image} alt={name} />
                <div id='id'>
                    <p>No: {formattedId}</p>
                </div>
                <div id='name'>
                    <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                </div>
                <div id='caught'>
                    <img src={Caught} alt='pokeball' />
                </div>
                {/* <p>Type: {type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}</p> */}
                
            </div>
        </div>
    );
}

export default Card;