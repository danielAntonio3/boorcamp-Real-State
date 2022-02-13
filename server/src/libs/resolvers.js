const { gql } = require('apollo-server-express');
const { readFileSync } = require('fs');
const { join } = require('path');

const schema = readFileSync(join(__dirname, 'schema.graphql'), 'utf-8');

// console.log(type);

const typeDefs = gql`
  ${schema}
`;

const resolvers = {
  Query: {
    users: (parent, args, context, info) => {
      return 'hola';
    },
  },
  Mutation: {},
};

module.exports = { resolvers, typeDefs };
