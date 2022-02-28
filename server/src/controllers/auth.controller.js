const { request, response } = require('express');

const bcryptjs = require('bcryptjs');

const { generateJwt } = require('./../helpers');
const User = require('./../services/user.service');

const UserServices = new User();

const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  const user = await UserServices.find({ email });

  if (!user) {
    return res.status(404).json({
      ok: false,
      message: 'User or password incorrect',
    });
  }

  const validPassword = await bcryptjs.compare(password, user.password);

  if (!validPassword) {
    return res.status(404).json({
      ok: false,
      message: 'User or password incorrect',
    });
  }

  const token = await generateJwt(user._id);

  const now = new Date().getDate();
  const expires = new Date(new Date().setDate(now + 7));
  return res
    .cookie('token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      expires,
    })
    .json({ name: user.name, email: user.email, role: user.role });
};

module.exports = {
  login,
};
