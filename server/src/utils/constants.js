const fs = require('fs');
const path = require('path');

const getUsers = () => {
  const rawUsers = fs.readFileSync(path.join(process.cwd(), 'src', 'utils', 'users.json'));
  const users = JSON.parse(rawUsers);
  return users;
};

const ONE_DAY = 60 * 60 * 24;

const ONE_WEEK = 60 * 60 * 24 * 7;

module.exports = {
  getUsers,
  ONE_DAY,
  ONE_WEEK,
};
