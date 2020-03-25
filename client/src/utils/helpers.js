const destroyUserSession = () => {
  localStorage.removeItem('Authorization');
  localStorage.removeItem('user');
  localStorage.removeItem('isLoggedIn');  
}

const startUserSession = (token, user) => {
  localStorage.setItem('Authorization', token);
  localStorage.setItem('user', token);
  localStorage.setItem('isLoggedIn', true);
}

export {
  destroyUserSession,
  startUserSession
}