const { request, response } = require('express');
const User = require('./../services/user.service');

const userServices = new User();

const getUser = async (req = request, res = response) => {
  // console.log('hola desde controller user');
  const user = await userServices.findAll();
  return res.status(200).json({ user });
};

module.exports = {
  getUser,
};
