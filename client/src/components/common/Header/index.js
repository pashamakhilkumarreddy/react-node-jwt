import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { destroyUserSession, getUserName }  from '../../../utils/helpers';

const Header = () => {
    let history = useHistory();
    const isUserLoggedIn = () => window.localStorage.getItem('isLoggedIn');
    const logout = (e) => {
        e.preventDefault();
        destroyUserSession();
    }
    return (
        <header>
            <nav className={`navbar`} role="navigation" aria-label="main-navigation">
                <div className={`navbar-brand`}>
                    <Link to="/" className={`navbar-item`}>
                        <img className={`header-logo`} src="#" alt="Logo" />
                    </Link> 
                    <a role="button" className={`navbar-burger burger`} aria-label="menu" aria-expanded="false" data-target="main-navbar">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="main-navbar" className={`navbar-menu`}>
                    <div className={`navbar-start`}>
                        <a href="/" className={`navbar-item`}>Home</a>
                    </div>
                    <div className={`navbar-end`}>
                        <div className={'navbar-item has-dropdown is-hoverable ' + (isUserLoggedIn() ? '': 'display-none')}>
                            <a className={`navbar-link`}>
                                {getUserName()}
                            </a>
                            <div className={`navbar-dropdown`}>
                                <Link to="/users" className={`navbar-item`}>
                                    Users
                                </Link>
                                <Link to="/add-user" className={`navbar-item`}>
                                    Add User
                                </Link>
                            </div>
                        </div>
                        <div className={`navbar-item`}>
                            <Link to="/login" className={'button is-primary ' + (isUserLoggedIn() ? 'display-none': '')} data-class="login">Login</Link>
                        </div>                        
                        <div className={`navbar-item`} onClick={(e) => { history.push('/login'); logout(e); }}>
                            <Link to="/logout" className={'button is-danger ' + (isUserLoggedIn() ? '': 'display-none')} data-class="log-out">Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;