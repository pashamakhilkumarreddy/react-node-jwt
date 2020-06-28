import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Redirect } from 'react-router-dom';
import { isValidEmail, isValidPassword }  from '../../../utils/constants';
import { startUserSession }  from '../../../utils/helpers';
import AuthenticationService from '../../../services/AuthenticationService';

export default class SignUp extends Component {
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

  handleEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email
    })
    const { text, match } = isValidEmail(email);
    this.setState({
      emailValidation: {
        valid: match,
        text
      }
    })
  }

  handlePassword = (e) => {
    const password = e.target.value;
    this.setState({
      password
    })
    const { text, match } = isValidPassword(password);
    this.setState({
      passwordValidation: {
        valid: match,
        text
      }
    })
  }

  handleRememberMe = (e) => {
    this.setState({
      rememberMe: e.target.checked
    })
  }

  handleUserSignUp = async (e) => {
    e.preventDefault();
    try {
      if (this.state.email && this.state.password) {
        const response = await AuthenticationService.signup({
          email: this.state.email,
          password: this.state.password
        });
        const { data: { token, user } } = response;
        if (!response.data.err) {
          startUserSession(token, user);
          this.setState({
            response: {
              error: false,
              text: response.data.message
            }
          })
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
      <Fragment>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <div className={`columns is-centered is-vcentered is-mobile`}>
          <div className={`column is-5-widescreen is-7-desktop is-7-tablet`}>
            <form className={`auth-form signup-form`} id="auth-signup-form" name="signUpForm">
              <h1 className={`title is-2 has-text-centered`}>Register</h1>
              <div className={`field`} data-class="signup-email">
                <label htmlFor="signup-email" className={`label`}>Email</label>
                <div className={`control`}>
                  <input id="signup-email" className={`input`} type="email" name="signUpEmail"
                    placeholder="Please enter your email" autoComplete="off" required value={this.state.email}
                    onChange={this.handleEmail} />
                </div>
                {
                this.state.emailValidation.text && 
                  <p className={'help ' + (this.state.emailValidation.valid ? 'is-success' : 'is-danger' )}>
                    {this.state.emailValidation.text}
                  </p> 
                }
              </div>
              <div className={`field`} data-class="signup-password">
                <label htmlFor="signup-password" className={`label`}>Password</label>
                <div className={`control`}>
                  <input id="signup-password" className={`input`} type="password" name="signUpPassword"
                    placeholder="Please enter your password" autoComplete="off" required
                    value={this.state.password} onChange={this.handlePassword} />
                </div>
                {
                  this.state.passwordValidation.text && 
                  <p className={'help ' + (this.state.passwordValidation.valid ? ' is-success' : 'is-danger' )}>
                    {this.state.passwordValidation.text}
                  </p>
                }
              </div>
              <div className={`terms-and-conditions`}>
                <div className={`field`} data-class="signup-checkbox">
                  <label htmlFor="signup-checkbox" className={`checkbox`}>
                    <input id="signup-checkbox" type="checkbox" checked={this.state.rememberMe}
                      onChange={this.handleRememberMe} />
                    &nbsp;&nbsp;I agree to all the Terms and Conditions
                  </label>
                </div>
                <div className={`field`}>
                  <Link to="/login" className={`btn btn-link`}>Already with us?</Link>
                </div>
              </div>
              {
              this.state.response.text && 
              <p className={'help has-text-centered mb-2 ' + (this.state.response.error ? ' is-danger': 'is-success' )}>
                {this.state.response.text}
              </p>
              }
              <div className={`field`} data-class="signup-button">
                <button id="signup-button" className={`button is-link is-fullwidth`} name="signUpButton"
                  type="button" onClick={this.handleUserSignUp}>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
