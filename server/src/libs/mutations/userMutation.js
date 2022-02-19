const { createUser, updateUser, deleteUser } = require('./../../controllers');

module.exports = {
  createUser: (parent, args, context, info) => {
    return createUser('', args, '', '');
  },

  updateUser: (parent, args, context, info) => {
    return updateUser('', args, '', '');
  },

  deleteUser: async (parent, args, context, info) => {
    return await deleteUser('', args, '', '');
  },
};
