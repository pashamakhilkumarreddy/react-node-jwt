const {
  getUsers,
  genSalt,
  genHashedPass,
  comparePassword,
  addUser,
  jwtSignUser,
} = require('../utils/helpers');

const {
  ONE_WEEK,
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
        if (result.length) {
          const user = result[0];
          const isValid = comparePassword(password, user.email);
          if (isValid) {
            const userTokenProperties = {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              phone: user.phone,
              website: user.website,
            };
            const token = jwtSignUser(JSON.parse(JSON.stringify(userTokenProperties)), ONE_WEEK);
            return res.status(200).send({
              err: false,
              token,
              user: JSON.stringify(userTokenProperties),
              message: 'Login Successfull',
            });
          }
          return res.status(401).send({
            err: true,
            message: 'Please check your password',
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
    try {
      const {
        email,
        password,
      } = req.body;
      if (email && password) {
        const id = (Math.random().toString(18).slice(2) + new Date().getTime()
        + genSalt(8)).slice(0, 15);
        const salt = genSalt(64);
        const username = (Math.random().toString(36).slice(2) + new Date().getTime()
        + genSalt(32)).slice(0, 25);
        const hashedPass = genHashedPass(password, salt);
        const user = {
          id,
          name: req.body.name || '',
          username,
          email,
          salt,
          password: hashedPass,
          phone: req.body.phone || '',
          website: req.body.website || '',
        };
        const isUserAdded = addUser(user);
        if (isUserAdded) {
          const userTokenProperties = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
          };
          const token = jwtSignUser(JSON.parse(JSON.stringify(userTokenProperties)), ONE_WEEK);
          res.status(200).send({
            err: false,
            token,
            user: JSON.stringify(userTokenProperties),
            message: 'Sign Up Successfull',
          });
        } else {
          res.status(403).send({
            err: true,
            message: 'A user already exists with the given details. Please try logging in!',
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({
        err: true,
        message: 'Interval Server Error',
      });
    }
  },
};
