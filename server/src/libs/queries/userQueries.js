const { getFullUser, getUser } = require('./../../controllers');

module.exports = {
  getUser: (parent, args, context, info) => {
    return getUser('', args, context, '');
  },
  getFullUser: (parent, args, context, info) => {
    return getFullUser('', '', context, '');
  },
};
