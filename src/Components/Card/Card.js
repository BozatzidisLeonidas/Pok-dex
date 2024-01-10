import React from 'react';
import "./Card.css";

const Card = (props) => {
    console.log(props)
    const { id, image, name, type } = props.pokemonList;

    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={image} alt={name} />
            <div>
                <p>{name}</p>
                <p>ID: {id}</p>
                <p>Type: {type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}</p>
            </div>
        </div>
    );
}

export default Card;