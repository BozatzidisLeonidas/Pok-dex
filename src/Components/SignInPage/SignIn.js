import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
    this.onRouteChange = this.props.onRouteChange;
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(async (response) => {
          const res = await response.json()
          if (res.success) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userName', res.data.name);
            localStorage.setItem('pokemonList', JSON.stringify(res.data.list));
            this.onRouteChange("home")
        }
      })
  }

  render(){
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" > 
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <legend className="f1 fw6 ph0 mh0 underline">Trainer!</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-transparent br3 hover-black w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  value={this.state.signInEmail}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-transparent br3 hover-black w-100"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.signInPassword}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={() => this.onSubmitSignIn()}
                className="black ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 br2 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => this.onRouteChange('Register')} className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    </div>
    );
  }
}

export default SignIn;