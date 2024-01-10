import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignInPage/SignIn';
import Register from './Components/RegisterPage/Register'
import Api from './Components/Api/Api';
import Card from './Components/Card/Card';
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation />
        <Api />
        {/* <Register />
        <SignIn /> */}

      </div>
    );
  } 
}

export default App;
