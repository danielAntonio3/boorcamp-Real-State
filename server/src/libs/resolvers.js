const { gql } = require('apollo-server-express');
const { readFileSync } = require('fs');
const { join } = require('path');

const schema = readFileSync(join(__dirname, 'schema.graphql'), 'utf-8');
const queries = require('./queries');
const mutations = require('./mutation');

const typeDefs = gql`
  ${schema}
`;

const resolvers = {
  Query: queries,
  Mutation: mutations,
};

module.exports = { resolvers, typeDefs };
