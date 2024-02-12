import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';
import notFound from '../../Images/404.png';

const NotFound = () => {
    return (
      <div id='page'>
      <div>
        <h1>Sorry</h1>
      </div>
      <div>
        <img src={notFound} alt='notFound'></img>
      </div>
      <div>
        <h1>PAGE NOT FOUND</h1>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button class="white b pv2 ph3 bg-gray hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2 pointer" style={{ fontSize: '1.5em' }}>
            Go back Home
          </button>
        </Link>
      </div>
    </div>
    );
  }

export default NotFound;