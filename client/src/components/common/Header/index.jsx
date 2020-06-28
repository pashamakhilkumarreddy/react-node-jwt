import React, {
  useState
} from 'react';
import {
  NavLink,
  useHistory
} from 'react-router-dom';
import {
  destroyUserSession,
  getUserName
} from '../../../utils/helpers';
import './header.css';

const Header = () => {
    const [showNavbar, setNavbarDisplay] = useState(false);
    let history = useHistory();
    const isUserLoggedIn = () => window.localStorage.getItem('isLoggedIn');
    const logout = (e) => {
      e.preventDefault();
      destroyUserSession();
    }
    return (
      <header className="header">
        <nav className={`navbar`} role="navigation" aria-label="main-navigation">
          <div className={`navbar-brand`}>
            <NavLink to="/" className={`navbar-item`}>
              <img className={`header-logo`} src="#" alt="Main Logo" decoding="async" loading="lazy"
                importance="high" />
            </NavLink>
            <span role="button" className={'navbar-burger burger ' + (showNavbar ? ' is-active': '' )} aria-label="menu"
              aria-expanded="false" data-target="main-navbar" onClick={e=> setNavbarDisplay(!showNavbar)}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          <div id="main-navbar" className={'navbar-menu ' + (showNavbar ? ' is-active': '' )}>
            <div className={`navbar-start`}>
              <NavLink to="/" className={`navbar-item`}>Home</NavLink>
            </div>
            <div className={`navbar-end`}>
              <div className={'navbar-item has-dropdown is-hoverable ' + (isUserLoggedIn() ? '': ' display-none')}>
                <span className={`navbar-link`}>
                  {getUserName()}
                </span>
                <div className={`navbar-dropdown`}>
                  <NavLink to="/users" className={`navbar-item`}>
                    Users
                  </NavLink>
                  <NavLink to="/add-user" className={`navbar-item`}>
                    Add User
                  </NavLink>
                </div>
              </div>
              <div className={`navbar-item`}>
                <NavLink to="/login" className={'button is-primary ' + (isUserLoggedIn() ? ' display-none': '' )}
                  data-class="login">Login</NavLink>
              </div>
              <div className={`navbar-item`} onClick={(e)=> { history.push('/login'); logout(e); }}>
                <NavLink to="/logout" className={'button is-danger is-light ' + 
                (isUserLoggedIn() ? '': 'display-none')} data-class="log-out">
                  Log Out
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;
