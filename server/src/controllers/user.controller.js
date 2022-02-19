const { ApolloError } = require('apollo-server-express');
const bcryptjs = require('bcryptjs');

const { existsEmail } = require('./../helpers');
const User = require('./../services/user.service');

const userServices = new User();

const getUser = (parent, args, context, info) => {
  return userServices.find(args);
};

const getFullUser = (parent, args, context, info) => {
  return userServices.findAll();
};

const createUser = async (parent, args, context, info) => {
  const exist = await existsEmail(args.user.email);
  if (exist) {
    throw new ApolloError(exist);
  }
  const salt = bcryptjs.genSaltSync();
  args.user.password = bcryptjs.hashSync(args.user.password, salt);

  const { user } = await userServices.createUser(args.user);
  return user;
};

const updateUser = async (parent, args, context, info) => {
  return await userServices.updateUser(args);
};
const deleteUser = async (parent, args, context, info) => {
  const user = await userServices.deleteUser(args._id);
  if (!user) {
    return 'User not found';
  }
  return 'User deleted';
};

module.exports = {
  getUser,
  getFullUser,
  createUser,
  updateUser,
  deleteUser,
};
