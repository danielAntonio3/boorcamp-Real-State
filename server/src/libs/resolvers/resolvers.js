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
const queries = require('../queries/queries');
const mutations = require('../mutations/mutation');

const typeDefs = gql`
  ${userSchema}
  ${houseSchema}
`;

const resolvers = {
  Query: queries,
  Mutation: mutations,
};

module.exports = { resolvers, typeDefs };
