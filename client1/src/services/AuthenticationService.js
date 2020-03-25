import Api from './Api';

export default {
  login(credentials) {
    return Api().post('login', credentials)
  },
  signup(credentials) {
    return Api().post('signup', credentials)
  }
}