import Api from './Api';

export default {
  index() {
    return Api().get('users');
  },
  show(userId) {
    return Api().get(`users/${userId}`);
  },
  post (user) {
    return Api().post('users', user);
  }
}