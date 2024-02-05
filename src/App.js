import React, { Component , }  from 'react';
import Navigation from './Components/Navigation/Navigation';
import User from './Components/User/User';
import SignIn from './Components/SignInPage/SignIn';
import Register from './Components/RegisterPage/Register'
import Api from './Components/Api/Api';
import Info from './Components/Info/Info';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
    selectedPokemon: null,
    route:'SignIn',
    isSignedIn:false
    }
  }

  handlePokemonSelect = (pokemon) => {
    this.setState({ selectedPokemon: pokemon });
  };

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})    
  }
  
  render(){
    return (
      <div className="App">
        { this.state.route === 'home'
          ?<div >
            <Navigation onRouteChange={this.onRouteChange}/>
            <User />
            <div className="PokemonListInfo">
              {this.state.selectedPokemon && <Info pokemon={this.state.selectedPokemon} />}
              <Api onPokemonSelect={this.handlePokemonSelect} />
            </div>
          </div>
          :(
            this.state.route==='SignIn'
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )
        }  
      </div>
      
    );
  } 
}

export default App;
