import React from 'react';
import "./Info.css";

const Info = ({ pokemon }) => {
  const { id, image, name, type , stats , height , weight} = pokemon;
  console.log(id)

    return (
      <div id='allInfo'>
        <div id='imageBig'>
             <img src={image} alt='image' />
        </div>
        <p>ID: {id}</p>
        <p>weight: {weight}</p>
        <p>height: {height}</p>
        <p>Type(s): {type}</p>
        {/* <p>Stats: {stats}</p> */}
        
        
        <p>Name: {name}</p>
        
      </div>
    );
  };

export default Info;