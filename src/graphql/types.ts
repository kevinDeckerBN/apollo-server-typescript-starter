import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
    type Query {
        hello: String
    }
`;
