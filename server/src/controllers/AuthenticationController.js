const {
  getUsers,
} = require('../utils/constants');

module.exports = {
  loginPost(req, res) {
    const {
      email,
      password,
    } = req.body;
    try {
      if (email && password) {
        const users = getUsers();
        const result = users.filter((user) => user.email === email);
        console.log(result);
        if (result.length) {
          return res.status(200).send({
            err: false,
            message: 'Login Successfull',
          });
        }
      }
      return res.status(401).send({
        err: true,
        message: 'Invalid Credentials',
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        err: true,
        message: 'Interval Server Error',
      });
    }
  },
  signUpPost(req, res) {
    // const { email, password } = req.body;
    console.log(req.credentials);
    console.log(req.body);
    try {
      res.status(200).send({
        err: false,
        message: 'Login Successfull',
      });
    } catch (err) {
      res.status(500).send({
        err: true,
        message: 'Interval Server Error',
      });
    }
  },
};
