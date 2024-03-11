import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
import Seen from '../../Images/seen.png';
import Caught from '../../Images/caught.png';

const Navigation = () => {
    const handleSignOut = async () => {
        try{
            const response = await
            fetch('http://localhost:3000/signout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sessionToken: localStorage.getItem('token') })
            })
            const data = await response.json();    
            if (data.success) {
                localStorage.removeItem('token');
              } else {
                console.error('Signout error:', data.message);
              }
        }catch(error){
            console.error('Error signing out:', error);
        }
    }

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
        <p id='byNumber'>By Number</p>
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Link to="/" className='no-underline'>
                <p className='f3 link dim white underline pa3 pointer' onClick={handleSignOut}>
                    Sign Out
                </p>
            </Link>    
        </nav>
    </div>
 );
}

export default Navigation;