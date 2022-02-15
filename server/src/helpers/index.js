const dbValidate = require('./dbValidate');
const jwt = require('./generarJwt');

module.exports = {
  ...dbValidate,
  ...jwt,
};
