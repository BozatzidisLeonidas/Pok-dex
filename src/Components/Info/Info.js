import React, { Component } from 'react';
import './Info.css';
import White from '../../Images/White.png';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: '',
    };
  }

  onSubmitSignIn = (pokemonName) => {
    fetch('http://localhost:3000/catchPokemon', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pokemonName }),
    })
      .then(async (response) => {
        const res = await response.json();
        if (res.success) {
          console.log(pokemonName);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    const { id, image, name, type, stats, height, weight } = this.props.pokemon;
    const formattedTypes=type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ');

    return (
      <div id="allInfo">
        <div id="topBar">
          <img src={image} alt="topBar" />
          <div id="Id">
            <p>Νο. {id}</p>
          </div>
          <div id="Name">
            <p>{name}</p>
          </div>
          <img src={White} alt="pokeball" />
        </div>
        <div id="imageBig">
          <img src={image} alt="bigImage" />
        </div>
        <div className="typeFull">
          <div className="type">
            <div className="typeText">
              <p>Type(s)</p>
            </div>
            <div className="typeVar">
              <p>{formattedTypes}</p>
            </div>
          </div>
        </div>
        <div className="typeFull">
          <div className="type">
            <div className="typeText">
              <p>Height</p>
            </div>
            <div className="typeVar">
              <p>{height} m</p>
            </div>
          </div>
        </div>
        <div className="typeFull">
          <div className="type">
            <div className="typeText">
              <p>Weight</p>
            </div>
            <div className="typeVar">
              <p>{weight} Kg</p>
            </div>
          </div>
        </div>
        <div id="statsTable">
          <table>
            <tbody>
              {stats.map((stat, index) => (
                <tr key={index}>
                  <td>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}</td>
                  <td>{stat.base_stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="black b pv2 bb bw3 b--mid-gray br2"
          id="CatchButton"
          onClick={() => {
            this.onSubmitSignIn(name);
          }}
        >
          <div className="textCenter">
            <p>Catch!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
