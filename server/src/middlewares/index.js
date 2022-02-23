const validation = require('./validation.middleware');
const validateRole = require('./validationRole.middleware');

module.exports = {
  ...validation,
  ...validateRole,
};
