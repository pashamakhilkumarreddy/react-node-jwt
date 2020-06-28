const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const {
  randomBytes,
  pbkdf2Sync,
} = require('crypto');
const config = require('../config');

const {
  ONE_WEEK,
} = require('./constants');

const getAllUsers = () => {
  const rawUsers = fs.readFileSync(path.join(process.cwd(), 'src', 'utils', 'users.json'));
  const users = JSON.parse(rawUsers);
  return users;
};

const addUser = (user) => {
  const newUser = {
    ...user,
  };
  if (newUser.id && newUser.username && newUser.email && newUser.salt && newUser.password) {
    const users = getAllUsers();
    const isValidUser = users.filter((user) => user.email === newUser.email || user.username === newUser.username); // eslint-disable-line
    if (isValidUser.length) {
      return false;
    }
    newUser.address = {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    };
    newUser.company = {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    };
    users.push(newUser);
    fs.writeFile(path.join(process.cwd(), 'src', 'utils', 'users.json'), JSON.stringify(users, null, 2), (err) => {
      if (err) throw err;
    });
    return true;
  }
  return false;
};

const genSalt = (bytes = 64) => randomBytes(bytes).toString('hex');

const genHashedPass = (password, salt) => pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

const comparePassword = (password, email) => {
  const users = getAllUsers();
  const isValidUser = users.filter((user) => user.email === email);
  if (isValidUser.length) {
    const user = isValidUser[0];
    const hash = pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
    return hash === user.password;
  }
  return false;
};

const jwtSignUser = (payload, validity = ONE_WEEK) => jwt.sign(payload, config.jwt.jwtSecret, {
  expiresIn: validity,
});

module.exports = {
  getAllUsers,
  genSalt,
  genHashedPass,
  comparePassword,
  addUser,
  jwtSignUser,
};
