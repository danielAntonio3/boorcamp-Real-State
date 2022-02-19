const { getHouse, getFullHouses, filterHouse } = require('./../../controllers');

module.exports = {
  getHouse: (root, args, context, info) => {
    return getHouse('', args, '', '');
  },

  getFullHouse: async (root, args, context, info) => {
    return getFullHouses('', args, '', '');
  },

  filterHouse: async (root, args, context, info) => {
    return getFullHouses('', args, '', '');
  },
};
