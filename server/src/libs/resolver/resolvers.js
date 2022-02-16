const { gql } = require('apollo-server-express');
const { readFileSync } = require('fs');
const { join } = require('path');

const userSchema = readFileSync(
  join(__dirname, '../schemas/userSchema.graphql'),
  'utf-8'
);

const houseSchema = readFileSync(
  join(__dirname, '../schemas/houseSchema.graphql'),
  'utf-8'
);
const userQueries = require('../queries/UserQueries');
const userMutations = require('../mutations/userMutation');

const typeDefs = gql`
  ${userSchema}
  ${houseSchema}
`;

const resolvers = {
  Query: { ...userQueries },
  Mutation: { ...userMutations },
};

module.exports = { resolvers, typeDefs };
