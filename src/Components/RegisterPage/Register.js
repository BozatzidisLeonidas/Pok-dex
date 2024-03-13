import React from 'react';
import {Link} from 'react-router-dom';
import {register} from '../../Services/services';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
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

  onRegister = async () => {
    const { name, email, password } = this.state;
    try {
      const response = await register(name, email, password);
      if (response.success) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }

  render() {
    const { onNameChange, onEmailChange, onPasswordChange, onRegister} = this;
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
                    onChange={onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba br3 bg-transparent hover-bg-b hover-black w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-transparent br3 hover-bg-b hover-black w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="RoutesRegister" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <input
                  className="black ph3 pv2 input-reset ba b--black bg-transparent br2 grow pointer f6 dib"
                  type="submit"
                  value="Register"
                  onClick={onRegister}
                />
                <Link to="/" className="no-underline">
                  <p className="f5 link dim near-black db pointer" >
                    Back to Sign In
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

 export default Register;
 