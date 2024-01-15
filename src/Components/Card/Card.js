import React, {useState} from 'react';
import "./Card.css";
import White from '../../Images/White.png';
import Info from '../Info/Info';



const Card = (props) => {
    // console.log(props)
    const { id, image, name, type , stats , height , weight} = props.pokemonList;
    const formattedId = String(id).padStart(3, '0');
    const formattedHeight = parseFloat(height.toString().slice(0, -1) + '.' + height.toString().slice(-1));
    const formattedWeight =parseFloat(weight.toString().slice(0, -1) + '.' + weight.toString().slice(-1));
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const formattedType = type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')
    const formattedStats = stats.map(stat => (
        `${stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}: ${stat.base_stat}`
    )).join(', ');
    const [showInfo, setShowInfo] = useState(false);
    const handleCardClick = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div id='container' onClick={handleCardClick}>
            <div id='all'>
                <div id='imageName'>
                    <img src={image} alt={name} />
                    <div id='id'>
                        <p>No. {formattedId}</p>
                    </div>
                </div>   
                <div id='name'>
                    <p>{formattedName}</p>
                </div> 
                <div id='caught'>
                    <img src={White} alt='pokeball' />
                </div>
                {/* <p>Type: {formattedType}</p>
                <p>Stats: {formattedStats}</p> */}
            </div>

        </div>
    );
}

export default Card;