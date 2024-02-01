import React, {useState, Component} from 'react';
import "./User.css";
import White from '../../Images/White.png';

const User = () => {
    return (
        <div id='allElements' >
            <div id='textTrainer' >
                <p>Hello Placeholder, here are your Pokémon:</p>
            </div>
            <div class="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill" >
                <img src={White} alt='pokeball_icon_caught' style={{width: "25px"}}></img>
            </div>
            <div class="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill" >
                <img src={White} alt='pokeball_icon_caught' style={{width: "25px"}}></img>
            </div>
            <div class="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill" >
                <img src={White} alt='pokeball_icon_caught' style={{width: "25px"}}></img>
            </div>
            <div class="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill" >
                <img src={White} alt='pokeball_icon_caught' style={{width: "25px"}}></img>
            </div>
            <div class="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill" >
                <img src={White} alt='pokeball_icon_caught' style={{width: "25px"}}></img>
            </div>
            <div class="white b pv2 ph3 bg-gray hover-bg-mid-gray bn br-pill" >
                <img src={White} alt='pokeball_icon_caught' style={{width: "25px"}}></img>
            </div>
        </div>
    );
  };

export default User;