const {
  getHouse,
  getFullHouses,
  getHouseUser,
} = require('./../../controllers');

module.exports = {
  getHouse: (root, args, context, info) => {
    return getHouse('', args, '', '');
  },

  getHouseUser: (root, args, context, info) => {
    return getHouseUser('', args, context, '');
  },

  getFullHouse: async (root, args, context, info) => {
    return getFullHouses('', args, '', '');
  },

  filterHouse: async (root, args, context, info) => {
    return getFullHouses('', args, '', '');
  },
};
