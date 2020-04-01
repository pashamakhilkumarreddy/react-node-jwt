import React from 'react';

const startUserSession = (token, user) => {
  localStorage.setItem('Authorization', token);
  localStorage.setItem('user', user);
  localStorage.setItem('isLoggedIn', true);
}

const getUserName = () => {
  const userData = window.localStorage.getItem('user');
  if (userData) {
    const user = JSON.parse(userData);
    return user.username.slice(0,1).toUpperCase() + user.username.slice(1,).toLowerCase() ;
  }
}

const destroyUserSession = () => {
  localStorage.removeItem('Authorization');
  localStorage.removeItem('user');
  localStorage.removeItem('isLoggedIn');  
}

const userContext = React.createContext({user: {}});

export {
  startUserSession,
  getUserName,
  destroyUserSession,
  userContext
}