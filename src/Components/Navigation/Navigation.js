import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Seen from '../../Images/seen.png';
import Caught from '../../Images/caught.png';
import { signout } from '../../Services/services'; 

const Navigation = () => {
  
  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      const data = await signout();
      if (!data.success) {
        console.error('Signout failed:', data.message);
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  return (
    <div id='Navigation_title'>
      {/* Title and icons for caught and seen */}
      <div id='Navigation_titleLeft'>
        <p>Pokédex</p>
        <div id='Navigation_caught-seen' >
          <div id='Navigation_caught'>
            <img src={Caught} alt='pokeball_icon_caught' style={{ width: "25px" }}></img>
            <p>186</p>
          </div>
          <div id='Navigation_seen'>
            <img src={Seen} alt='pokeball_icon_seen' style={{ width: "25px" }}></img>
            <p>431</p>
          </div>
        </div>
      </div>
      {/* Navigation link for signing out */}
      <p id='byNumber'>By Number</p>
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
