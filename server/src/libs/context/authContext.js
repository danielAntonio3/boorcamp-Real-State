const { AuthenticationError } = require('apollo-server-express');
const { comprobarJWT } = require('./../../helpers/generarJwt');

const context = async ({ req }) => {
  const token = req.cookies.token;
  if (token) {
    const data = await comprobarJWT(token);
    // console.log('user: --', data);
    return { user: data };
  } else {
    return new AuthenticationError('Not authenticated');
  }
};
module.exports = {
  context,
};
