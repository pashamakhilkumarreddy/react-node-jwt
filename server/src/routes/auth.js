const router = require('express').Router();

const { AuthenticationController } = require('../controllers');

router.post('/login', AuthenticationController.loginPost);

router.post('/signup', AuthenticationController.signUpPost);


module.exports = router;
