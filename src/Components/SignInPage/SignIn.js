import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../Services/services';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '' 
    }
  }

  // Update email state when input changes
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  // Update password state when input changes
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  // Handle sign in submission
  onSubmitSignIn = async () => {
    const { email, password } = this.state;
    try {
      const response = await signin(email, password);
      if (response.success) {
        // Store user data in local storage and redirect to App
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.name);
        localStorage.setItem('pokemonList', JSON.stringify(response.data.list));
        window.location.href = "/App";
      }
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  }

  render() {
    const { email, password } = this.state;
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
                    value={email}
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
                    value={password}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignIn}
                  className="black ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 br2 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <Link to="/Register" className="no-underline">
                  <p className="f5 link dim black db pointer">
                    Register
                  </p>
                </Link>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }

}

export default SignIn;
