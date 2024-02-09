import React, { Component } from 'react';
import "./Info.css";
import White from '../../Images/White.png';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: '' 
    };
  }

  onSubmitSignIn = (pokemonName) => {
    fetch('http://localhost:3000/catchPokemon', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({pokemonName})
    })
      .then(async (response) => {
          const res = await response.json()
          if (res.success) {
            console.log(pokemonName)
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  render(){
    const { pokemon } = this.props;
    const { pokemonName } = this.state;
    const { id, image, name, type , stats , height , weight} = pokemon;
    const formattedId = String(id).padStart(3, '0');
    const formattedHeight = parseFloat(height.toString().slice(0, -1) + '.' + height.toString().slice(-1));
    const formattedWeight =parseFloat(weight.toString().slice(0, -1) + '.' + weight.toString().slice(-1));
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const formattedType = type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')
    const formattedStats = stats.map(stat => (
      <tr key={stat.name}>
        <td>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}</td>
        <td>{stat.base_stat}</td>
      </tr>
    ));

    // console.log(formattedStats)

    return (
      <div id='allInfo' >
        <div id='topBar'>
          <img src={image} alt='image' />
          <div id='Id'>
              <p>Νο. {formattedId}</p>
          </div>
          <div id='Name'>
              <p>{formattedName}</p>
          </div>
          <img src={White} alt='pokeball' />
        </div>
        <div id='imageBig'>
          <img src={image} alt='image' />
        </div>
        <div className='typeFull'>
          <div className='type'>
            <div className='typeText'>
              <p>Type</p>
            </div>
            <div className='typeVar'>
              <p>{formattedType}</p>
            </div>
          </div>
        </div>
        <div className='typeFull'>
          <div className='type'>
            <div className='typeText'>
              <p>Height</p>
            </div>
            <div className='typeVar'>
              <p>{formattedHeight} m</p>
            </div>
          </div>
        </div>
        <div className='typeFull'>
          <div className='type'>
            <div className='typeText'>
              <p>Weight</p>
            </div>
            <div className='typeVar'>
              <p>{formattedWeight} Kg</p>
            </div>
          </div>
        </div>
        <div id='statsTable'>
          <table>
            <tbody>
              {formattedStats}
            </tbody>
          </table>
        </div>
        <div className="black b pv2 bb bw3 b--mid-gray br2" id='CatchButton' onClick={() => { const formattedName = this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1); this.onSubmitSignIn(formattedName);}}>
          <div className="textCenter">
            <p>Catch!</p>
          </div>
        </div>


      </div>
    );
  }
}

export default Info;