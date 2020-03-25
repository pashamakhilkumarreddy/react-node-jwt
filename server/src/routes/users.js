const router = require('express').Router();

const {
  UsersController,
} = require('../controllers');

const {
  checkUserToken,
} = require('../policies');

router.get('/users', checkUserToken, UsersController.usersGet);

router.get('/users/:userId', checkUserToken, UsersController.userGet);

module.exports = router;
