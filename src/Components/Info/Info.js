import React from 'react';
import "./Info.css";

const Info = ({ image, id,  name ,height, weight , type , stats}) => {
    return (
      <div id='allInfo'>
        <div id='imageBig'>
             <img src={image} alt={name} />
        </div>
        {/* <p>ID: {id}</p> */}
        {/* <p>weight: {weight}</p>
        <p>height: {height}</p>
        <p>Type(s): {type}</p> */}
        {/* <p>Stats: {stats}</p> */}

        
        {/* <p>Name: {name}</p> */}
        {/* Add more details as needed */}
      </div>
    );
  };

export default Info;