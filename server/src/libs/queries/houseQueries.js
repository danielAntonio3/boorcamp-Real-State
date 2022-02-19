const { getHouse, getFullHouses } = require('./../../controllers');

module.exports = {
  getHouse: (root, args, context, info) => {
    return getHouse('', args, '', '');
  },

  getFullHouse: async () => {
    return getFullHouses();
  },
};
