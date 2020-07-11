const auth = require('./auth');
const users = require('./users');

module.exports = ({
  app,
}) => {
  app.use('/', auth);
  app.use('/', users);
};
