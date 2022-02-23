const { ApolloError } = require('apollo-server-express');

const validateRole = (context, next) => {
  //? Activar la validación
  console.log('validateRole');
  next();
};

module.exports = {
  validateRole,
};
