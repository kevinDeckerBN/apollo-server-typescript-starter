import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/types';

const server: ApolloServer = new ApolloServer({
    resolvers,
    typeDefs,
});

export default server;
