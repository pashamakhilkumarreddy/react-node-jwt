const {
  getUsers,
} = require('../utils/constants');

module.exports = {
  usersGet(req, res) {
    const users = getUsers();
    res.status(200).send({
      err: false,
      users,
    });
  },
  userGet(req, res) {
    const { userId } = req.params;
    const users = getUsers();
    const isValidUser = users.filter((user) => user.id === userId);
    if (isValidUser.length) {
      res.status(200).send({
        err: false,
        user: isValidUser,
      });
    }
  },
};
