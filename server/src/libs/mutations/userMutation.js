const { ApolloError } = require('apollo-server-express');
const bcryptjs = require('bcryptjs');

const Users = require('../../services/user.service');
const { existsEmail } = require('../../helpers');

const UserServices = new Users();

module.exports = {
  createUser: async (parent, args, context, info) => {
    const exist = await existsEmail(args.user.email);
    if (exist) {
      throw new ApolloError(exist);
    }
    const salt = bcryptjs.genSaltSync();
    args.user.password = bcryptjs.hashSync(args.user.password, salt);

    const { user } = await UserServices.createUser(args.user);
    return user;
  },

  updateUser: async (parent, args, context, info) => {
    return await UserServices.updateUser(args);
  },

  deleteUser: (parent, args, context, info) => {
    UserServices.deleteUser(args._id);
    return 'User deleted';
  },
};
