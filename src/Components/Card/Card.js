import React from 'react';
import "./Card.css";
import Black from '../../Images/Black.png';
import White from '../../Images/White.png';



const Card = (props) => {
    console.log(props)
    const { id, image, name, type } = props.pokemonList;
    const formattedId = String(id).padStart(3, '0');

    return (
        <div id='container'>
            <div id='all'>
                <div id='imageName'>
                    <img src={image} alt={name} />
                    <div id='id'>
                        <p>No. {formattedId}</p>
                    </div>
                </div>   
                <div id='name'>
                    <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                </div> 
                <div id='caught'>
                    <img src={White} alt='pokeball' />
                </div>
                {/* <p>Type: {type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}</p> */}
            </div>
        </div>
    );
}

export default Card;