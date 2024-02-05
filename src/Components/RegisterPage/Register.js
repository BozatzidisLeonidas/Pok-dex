import React from 'react';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      route:'SignIn'
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  onRouteChange = (route) => {
    this.setState({route: route})    
  }

  render(){
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
          <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
              <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0">Register</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-b br3 hover-black w-100"
                      type="text"
                      name="name"
                      id="nameTrainer"
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input
                      className="pa2 input-reset ba br3 bg-transparent hover-bg-b hover-black w-100"
                      type="email"
                      name="email-address"
                      id="email-address"
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input
                      className="b pa2 input-reset ba bg-transparent br3 hover-bg-b hover-black w-100"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                </fieldset>
                <div className="RoutesRegister" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <input
                    className="black ph3 pv2 input-reset ba b--black bg-transparent br2 grow pointer f6 dib"
                    type="submit"
                    value="Register"
                  />
                  <h4 onClick={() => this.onRouteChange('Signin')} style={{textDecoration: 'underline',cursor: 'pointer'}}> Back to Sign In</h4>
                </div>
                
              </div>
            </main>
          </article>
      </div>      
    );
  }

}



 export default Register;