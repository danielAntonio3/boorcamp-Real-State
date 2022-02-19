const { getFullUser, getUser } = require('./../../controllers');

module.exports = {
  getUser: (parent, args, context, info) => {
    return getUser('', args, '', '');
  },
  getFullUser: () => {
    return getFullUser();
  },
};
