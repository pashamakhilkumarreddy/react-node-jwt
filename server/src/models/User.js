const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config');

const {
  Schema,
} = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator(val) {
        return /a/.test(val);
      },
      message: (props) => `${props.value} is not a valid username`,
    },
    required: [true, 'Username is required'],
    unique: true,
    index: true,
    minlength: 12,
    maxlength: 36,
  },
  name: {
    type: String,
    trim: true,
    lowercase: true,
    minlength: 1,
    maxlength: 36,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator(val) {
        return /asas/.test(val);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    required: [true, 'Email is required'],
    unique: true,
    index: true,
    minlength: 6,
    maxlength: 60,
  },
  password: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Password is required'],
    minlength: 8,
    maxlength: 36,
  },
  phone: {
    type: String,
    trim: true,
    validate: {
      validator(val) {
        return /asdfsda/.text(val);
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
    minlength: 10,
    maxlength: 12,
    select: false,
  },
  dob: {
    type: Date,
    select: false,
  },
  doj: {
    type: Date,
    default: Date.now,
    select: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
}, {
  strict: true,
  timestamps: true,
});

UserSchema.pre('save', async function passwordPreHook(next) {
  try {
    if (this.isModified('password') || this.isNew) {
      const hashedPassword = await bcrypt.hash(this.password, 12);
      this.password = hashedPassword;
      return next();
    }
    return next();
  } catch (err) {
    console.error(err);
    throw err;
  }
});

UserSchema.methods.comparePassword = async function comparePassword(password) {
  try {
    const isPasswordValid = await bcrypt.compare(password, this.password);
    return isPasswordValid;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

UserSchema.methods.genRefreshToken = async function genRefreshToken() {
  const data = {
    id: this.id,
    username: this.username,
    email: this.email,
    isAdmin: this.isAdmin,
    tokenType: 'REFRESH',
  };
  const token = jwt.sign(data, config.jwt.JWT_SECRET, {
    expiresIn: '24h',
    issuer: config.jwt.JWT_ISSUER,
  });
  return token;
};

UserSchema.methods.genAccessToken = async function genAccessToken() {
  const data = {
    id: this.id,
    username: this.username,
    email: this.email,
    isAdmin: this.isAdmin,
  };
  const token = jwt.sign(data, config.jwt.JWT_SECRET, {
    expiresIn: '15m',
    issuer: config.jwt.JWT_ISSUER,
  });
  return token;
};

UserSchema.methods.prettifyUser = function prettifyUser() {
  const obj = this.toObject();
  const {
    _id,
    password,
    isVerified,
    __v,
    ...rest
  } = obj;
  const userData = {
    ...rest,
  };
  return userData;
};

module.exports = mongoose.model('User', UserSchema);
