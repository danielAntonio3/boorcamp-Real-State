const Users = require('./../services/user.service');
const UserServices = new Users();

module.exports = {
  getFullUser: () => {
    return UserServices.findAll();
  },

  getUser: (parent, args, context, info) => {
    return UserServices.find(args);
  },
};
