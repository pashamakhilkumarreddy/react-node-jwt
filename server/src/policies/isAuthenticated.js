const jwt = require('jsonwebtoken');
const config = require('../config');
const {
  getUsers,
} = require('../utils/helpers');

module.exports = {
  async checkUserToken(req, res, next) {
    const {
      authorization,
    } = req.headers;
    if (authorization) {
      const token = authorization.replace('Bearer', '');
      const payload = jwt.verify(token, config.authorization.jwtSecret);
      const {
        email,
      } = payload;
      const users = getUsers();
      const isAuthenticatedUser = users.filter((user) => user.email === email);
      if (isAuthenticatedUser.length) {
        req.token = token;
        req.user = JSON.parse(JSON.stringify(payload));
        req.user.isLoggedIn = true;
        next();
      }
    } else {
      res.status(401).send({
        err: true,
        message: 'Not Authorized',
      });
    }
  },
};
