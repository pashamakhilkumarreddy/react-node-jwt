import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { isValidEmail, isValidPassword }  from '../../utils/constants';

import AuthenticationService from '../../services/AuthenticationService';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'john@doe.com',
      password: 'tilg6S7Tg9I2IYYZQpiI',
      rememberMe: true,
      emailValidation: {
        valid: true,
        text: ''
      },
      passwordValidation: {
        valid: true,
        text: ''
      },
      response: {
        error: true,
        text: ''
      },
      redirect: null,
    }
  }

  componentDidMount () {
    document.title = 'Login';
  }

  handleEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email
    });
    const { text, match } = isValidEmail(email);
    this.setState({
      emailValidation: {
        valid: match,
        text
      }
    });
  }

  handlePassword = (e) => {
    const password = e.target.value;
    this.setState({
      password
    });
    const {text, match} = isValidPassword(password);
    this.setState({
      passwordValidation: {
        valid: match,
        text
      }
    });
  }

  handleRememberMe = (e) => {
    this.setState({
      rememberMe: e.target.checked
    });
  }

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      if (this.state.email && this.state.password) {
        const response = await AuthenticationService.login({
          email: this.state.email,
          password: this.state.password
        });
        const { data } = response;
        if (!data.err) {
          localStorage.setItem('Authorization', `${data.token}`);
          localStorage.setItem('user', data.user);
          localStorage.setItem('isLoggedIn', true);
          setTimeout(() => {
            this.setState({
              redirect: '/users'
            })
          }, 0);
        }
      }
    } catch (err) {
      this.setState({
        response: {
          error: true,
          text: err.response.data.message
        }
      })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <section className={`hero`}>
      <div className={`hero-body`}>
        <div className={`container`}>
          <div className={`columns is-centered`}>
            <div className={`column is-5-widescreen is-7-desktop is-7-tablet`}>
              <form action="" className={`auth-form login-form`} id="auth-login-form" name="loginForm">
                <h1 className={`title is-2 has-text-centered`}>Login</h1>
                <div className={`field`} data-class="login-email">
                  <label htmlFor="login-email" className={`label`}>Email</label>
                  <div className={`control`}>
                    <input id="login-email" className={`input`} type="email" name="loginEmail"
                      placeholder="Please enter your email" autoComplete="off" required value={this.state.email} onChange={this.handleEmail} />
                  </div>
                  {this.state.emailValidation.text && <p className={'help ' + (this.state.emailValidation.valid ? 'is-success' : 'is-danger')}>{this.state.emailValidation.text}</p> }
                </div>
                <div className={`field`} data-class="login-password">
                  <label htmlFor="login-password" className={`label`}>Password</label>
                  <div className={`control`}>
                    <input id="login-password" className={`input`} type="password" name="loginPassword"
                      placeholder="Please enter your password" autoComplete="off" required value={this.state.password} onChange={this.handlePassword} />
                  </div>
                  {this.state.passwordValidation.text && <p className={'help ' + (this.state.passwordValidation.valid ? 'is-success' : 'is-danger')}>{this.state.passwordValidation.text}</p> }
                </div>
                <div className={`forgot-password-container`}>
                  <div className={`field`} data-class="login-checkbox">
                    <label htmlFor="login-checkbox" className={`checkbox`}>
                      <input id="login-checkbox" type="checkbox" checked={this.state.rememberMe} onChange={this.handleRememberMe} />
                      Remember Me
                    </label>
                  </div>
                  <div className={`field`}>
                    <Link to="/signup" className={`btn btn-link is-size-5`}>Not yet with us? Sign Up</Link>
                  </div>
                </div>
                {this.state.response.text && <p className={'help has-text-centered is-size-5 mb-2 ' + (this.state.response.error ? 'is-danger': 'is-success')}>{this.state.response.text}</p> }
                <div className={`field`} data-class="login-button">
                  <button id="login-button" className={`button is-link is-fullwidth`} name="loginButton" type="button" onClick={this.handleLoginSubmit}>Login</button>
                </div>
                <div className={`field has-text-centered is-size-5`}>
                  <Link to="/forgot-password" className={`btn btn-link`}>Forgot your Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
