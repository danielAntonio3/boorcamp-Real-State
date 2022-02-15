const { request, response } = require('express');

const { generateJwt } = require('./../helpers');

const User = require('./../services/user.service');

const UserServices = new User();

const login = async (req = request, res = response) => {
  // TODO: Validar al usuario (email, password)
  const { email, password } = req.body;
  const user = await UserServices.find({ email });

  console.log(user);
  // TODO: verificar si la contraseña es correcta

  // TODO: Crear token
  const token = await generateJwt(user._id);

  return res.status(200).json({
    message: token,
  });
};

module.exports = {
  login,
};
