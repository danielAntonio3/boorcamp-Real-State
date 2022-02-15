const User = require('./../services/user.service');

const UserServices = new User();

const existsEmail = async (email = '') => {
  const exitEmail = await UserServices.find({ email });
  if (exitEmail) {
    return `The email: ${email} exists in the DB`;
  }
};

module.exports = {
  existsEmail,
};
