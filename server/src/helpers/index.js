const dbValidate = require('./dbValidate');
const jwt = require('./generarJwt');
const validateRole = require('./validateRole');

module.exports = {
  ...dbValidate,
  ...jwt,
  ...validateRole,
};
