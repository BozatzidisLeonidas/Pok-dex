import React from 'react';
import "./Info.css";
import White from '../../Images/White.png';

const Info = ({ pokemon }) => {
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
        <div class='typeFull'>
          <div class='type'>
            <div class='typeText'>
              <p>Type</p>
            </div>
            <div class='typeVar'>
              <p>{formattedType}</p>
            </div>
          </div>
        </div>
        <div class='typeFull'>
          <div class='type'>
            <div class='typeText'>
              <p>Height</p>
            </div>
            <div class='typeVar'>
              <p>{formattedHeight} m</p>
            </div>
          </div>
        </div>
        <div class='typeFull'>
          <div class='type'>
            <div class='typeText'>
              <p>Weight</p>
            </div>
            <div class='typeVar'>
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
      </div>
    );
};

export default Info;