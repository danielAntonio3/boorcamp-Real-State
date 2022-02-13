const User = require('./../services/user.service');
const { request, response } = require('express');

const userServices = new User();

const getUser = async (req = request, res = response) => {
  // console.log('hola desde controller user');
  const user = await userServices.find({ _id: req.params.id });
  return res.status(200).json({ user });
};
const createUser = async (req = request, res = response) => {};

module.exports = {
  getUser,
  createUser,
};
