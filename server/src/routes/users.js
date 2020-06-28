const router = require('express').Router();

const {
  getUsers,
  getUser,
} = require('../controllers');

const {
  checkUserToken,
} = require('../policies');

router.get('/users', checkUserToken, getUsers);

router.get('/users/:userId', checkUserToken, getUser);

module.exports = router;
