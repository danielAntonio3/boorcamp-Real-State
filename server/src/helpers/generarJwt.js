const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./../config/configEnv');

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

/* const comprobarJWT = async (token = '') => {
  try {
    if (token.length < 10) {
      return null;
    }
    const { uid } = jwt.verify(token, jwtSecret);

    if (!uid) {
      return null;
    }

    const usuario = await userSchema.findOne({ _id: uid });

    if (usuario) {
      if (usuario.status) {
        return usuario;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}; */

module.exports = { generateJwt /* comprobarJWT */ };
