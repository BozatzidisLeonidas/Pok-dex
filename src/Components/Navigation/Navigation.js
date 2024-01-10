import React from 'react';
import './Navigation.css';
import Seen from '../../Images/seen.png';
import Caught from '../../Images/caught.png';

const Navigation = () => {
    return(
    <div id='Navigation_title'>
        <div id='Navigation_titleLeft'>
            <p>Pokédex</p>
            <div id='Navigation_caught-seen' >
                <div id='Navigation_caught'>
                    <img src={Caught} alt='pokeball_icon_caught' style={{width: "25px"}}></img>
                    <p>186</p>
                </div>
                <div id='Navigation_seen'>
                    <img src={Seen} alt='pokeball_icon_seen' style={{width: "25px"}}></img>
                    <p>431</p>
                </div>
            </div>
        </div>
    </div>
 );
}

export default Navigation;