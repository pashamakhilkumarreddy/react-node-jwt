import React, {
  Component,
  Fragment
} from 'react';
import {
  Helmet
} from 'react-helmet';
import {
  Link,
  Redirect
} from 'react-router-dom';

import {
  FormLayout
} from '../../../components';
import {
  isValidEmail,
  isValidPassword
} from '../../../utils/constants';
import {
  startUserSession
} from '../../../utils/helpers';
import AuthenticationService from '../../../services/AuthenticationService';

export default class Register extends Component {
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
    const {
      text,
      match
    } = isValidEmail(email);
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
    const {
      text,
      match
    } = isValidPassword(password);
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

  handleUserRegistration = async (e) => {
    e.preventDefault();
    try {
      if (this.state.email && this.state.password) {
        const response = await AuthenticationService.register({
          email: this.state.email,
          password: this.state.password
        });
        const {
          data: {
            token,
            user
          }
        } = response;
        if (!response.data.err) {
          startUserSession(token, user);
          this.setState({
            response: {
              error: false,
              text: response.data.message
            }
          });
          setTimeout(() => {
            this.setState({
              redirect: '/users'
            })
          }, 0);
        }
      }
    } catch (err) {
      console.error(err);
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
          <title>Register | React Express App</title>
        </Helmet>
        <FormLayout>
          <form className={`auth-form register-form`} id="auth-register-form" name="registerForm">
            <h1 className={`title is-2 has-text-centered`}>Register</h1>
            <div className={`field`} data-class="register-email">
              <label htmlFor="register-email" className={`label`}>Email</label>
              <div className={`control`}>
                <input id="register-email" className={`input`} type="email" name="registerEmail"
                  placeholder="Please enter your email" autoComplete="off" required value={this.state.email}
                  onChange={this.handleEmail} />
              </div>
              {
              this.state.emailValidation.text &&
              <p className={'help ' + (this.state.emailValidation.valid ? ' is-success' : 'is-danger' )}>
                {this.state.emailValidation.text}
              </p>
              }
            </div>
            <div className={`field`} data-class="register-password">
              <label htmlFor="register-password" className={`label`}>Password</label>
              <div className={`control`}>
                <input id="register-password" className={`input`} type="password" name="registerPassword"
                  placeholder="Please enter your password" autoComplete="off" required value={this.state.password}
                  onChange={this.handlePassword} />
              </div>
              {
              this.state.passwordValidation.text &&
              <p className={'help ' + (this.state.passwordValidation.valid ? ' is-success' : 'is-danger' )}>
                {this.state.passwordValidation.text}
              </p>
              }
            </div>
            <div className={`terms-and-conditions`}>
              <div className={`field`} data-class="register-checkbox">
                <label htmlFor="register-checkbox" className={`checkbox`}>
                  <input id="register-checkbox" type="checkbox" checked={this.state.rememberMe}
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
            <div className={`field`} data-class="register-button">
              <button id="register-button" className={`button is-link is-fullwidth`} name="registerButton" type="button"
                onClick={this.handleUserRegistration}>Sign Up</button>
            </div>
          </form>
        </FormLayout>
      </Fragment>
    )
  }
}
