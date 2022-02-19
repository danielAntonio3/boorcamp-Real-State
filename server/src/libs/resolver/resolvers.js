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
const userQueries = require('../queries/userQueries');
const houseQueries = require('../queries/houseQueries');
const userMutations = require('../mutations/userMutation');
const houseMutations = require('../mutations/houseMutation');

const typeDefs = gql`
  ${userSchema}
  ${houseSchema}
`;

const resolvers = {
  Query: { ...userQueries, ...houseQueries },
  Mutation: { ...userMutations, ...houseMutations },
};

module.exports = { resolvers, typeDefs };
