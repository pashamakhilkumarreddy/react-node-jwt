const AuthenticationController = require('./AuthenticationController');
const UsersController = require('./UsersController');

module.exports = {
  ...AuthenticationController,
  ...UsersController,
};
