const {
  getAllUsers,
} = require('../utils/helpers');

module.exports = {
  getUsers(req, res) {
    const users = getAllUsers();
    res.status(200).send({
      err: false,
      users,
    });
  },
  getUser(req, res) {
    try {
      const { userId } = req.params;
      const id = parseInt(userId, 10);
      const users = getAllUsers();
      const isValidUser = users.filter((user) => user.id === id);
      if (isValidUser.length) {
        const validUser = isValidUser[0];
        const userProperties = {
          id: validUser.id,
          name: validUser.name,
          username: validUser.username,
          email: validUser.email,
          phone: validUser.phone,
          website: validUser.website,
          address: {
            ...validUser.address,
          },
          company: {
            ...validUser.company,
          },
        };
        res.status(200).send({
          err: false,
          user: [{ ...userProperties }],
        });
        return;
      }
      res.status(404).send({
        err: true,
        user: null,
        message: 'No user found',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
