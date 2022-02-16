const { ApolloServer } = require('apollo-server-express');

// const { typeDefs, resolvers, context } = require('./../libs/apollo');

const { resolvers, typeDefs } = require('../libs/resolver/resolvers');

// todo: Hacer la configuración

function apollo(app, path) {
  console.log('Apollo Server');
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context,
  });

  server.start().then((res) => {
    server.applyMiddleware({
      app,
      path,
      cors: {
        // credentials: true,
        origin: [
          'https://studio.apollographql.com',
          'http://localhost:4000',
          'http://localhost:3000',
        ],
      },
    });
  });
}

module.exports = apollo;
