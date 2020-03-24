const router = require('express').Router();

const { UsersController } = require('../controllers');

router.get('/users', UsersController.usersGet);

router.get('/users/:user', UsersController.userGet);

module.exports = router;
