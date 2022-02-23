const { ApolloError } = require('apollo-server-express');

const validateRole = (context) => {
  const { user } = context;
  if (user.role !== 'ADMIN') {
    throw new ApolloError('You are not authorized');
  }
};

module.exports = {
  validateRole,
};
