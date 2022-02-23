const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./../config/configEnv');
const User = require('./../services/user.service');

const UserServices = new User();

const generateJwt = (_id = '') => {
  return new Promise((resolve, reject) => {
    const payload = { _id };
    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: '5d',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('The token could not be generated');
        } else {
          resolve(token);
        }
      }
    );
  });
};

const comprobarJWT = async (token = '') => {
  try {
    if (token.length < 10) {
      return null;
    }
    const { _id } = jwt.verify(token, jwtSecret);
    if (!_id) {
      return null;
    }

    const usuario = await UserServices.find({ _id });
    if (usuario) {
      return usuario;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { generateJwt, comprobarJWT };
