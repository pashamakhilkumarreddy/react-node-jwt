import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { destroyUserSession }  from '../../../utils/helpers';

const Header = () => {
    const showLogin = useState(true);
    let history = useHistory();
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
                        { 
                            showLogin ? (
                            <div className={`navbar-item`}>
                                <Link to="/login" className={`button is-primary`} data-class="login">Login</Link>
                            </div>                        
                             ): (
                                <div className={`navbar-item`} onClick={(e) => { history.push('/login'); logout(e); }}>
                                    <Link to="/logout" className={`button is-danger`} data-class="log-out">Log Out</Link>
                                </div>
                             )
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;