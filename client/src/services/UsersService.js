import Api from './Api';

export default {
  getUsers() {
    return Api().get('users');
  },
  getUser(userId) {
    return Api().get(`users/${userId}`);
  },
  post(user) {
    return Api().post('users', user);
  }
}