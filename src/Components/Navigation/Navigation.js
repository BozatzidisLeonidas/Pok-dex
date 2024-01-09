import React from 'react';
import './Navigation.css';
import Seen from '../../Images/seen.png';
import Caught from '../../Images/caught.png';

const Navigation = () => {
    return(
    <div className='title'>
        <div className='titleLeft'>
            <p>Pokédex</p>
            <div className='caught-seen' >
                <div className='caught'>
                    <img src={Caught} alt='pokeball_icon_caught' style={{width: "25px"}}></img>
                    <p>186</p>
                </div>
                <div className='seen'>
                    <img src={Seen} alt='pokeball_icon_seen' style={{width: "25px"}}></img>
                    <p>431</p>
                </div>
            </div>
        </div>
    </div>
 );
}

export default Navigation;