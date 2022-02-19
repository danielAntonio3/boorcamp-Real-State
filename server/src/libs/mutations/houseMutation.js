const {
  createHouse,
  updateHouse,
  deleteHouse,
} = require('./../../controllers');

module.exports = {
  createHouse: async (root, args, context, info) => {
    return await createHouse('', args, '', '');
  },

  updateHouse: async (root, args, context, info) => {
    return await updateHouse('', args, '', '');
  },

  deleteHouse: async (root, args, context, info) => {
    return await deleteHouse('', args, '', '');
  },
};
