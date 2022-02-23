const userController = require('./user.controller');
const houseController = require('./house.controller');
const authController = require('./auth.controller');


module.exports = {
  ...userController,
  ...houseController,
  ...authController,
};
