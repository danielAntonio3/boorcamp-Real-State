const {
  createHouse,
  updateHouse,
  deleteHouse,
} = require('./../../controllers');

module.exports = {
  createHouse: async (root, args, context, info) => {
    return await createHouse('', args, context, '');
  },

  updateHouse: async (root, args, context, info) => {
    return await updateHouse('', args, context, '');
  },

  deleteHouse: async (root, args, context, info) => {
    return await deleteHouse('', args, context, '');
  },
};
