const userController = require('./user.controller');
const houseController = require('./house.controller');

module.exports = {
  ...userController,
  ...houseController,
};
