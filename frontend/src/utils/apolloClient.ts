import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_URL } from '../config';

const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
});

export default client;