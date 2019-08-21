const { ApolloServer } = require('apollo-server-lambda');
const { schema } = require('./schema');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({ schema, resolvers });

exports.notesHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});