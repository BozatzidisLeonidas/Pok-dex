import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Api from './Components/Api/Api';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation />
        <Api />
      </div>
    );
  } 
}

export default App;
