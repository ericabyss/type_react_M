import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
  headers:{
      Authorization : `Bearer ${localStorage.getItem("나중에 토큰 넣은 곳")}`,
  },
  cache: new InMemoryCache({
      typePolicies : {
          Query:{
              fields:{
                  isLogin:{
                      read:() => {
                          return localStorage.getItem("ACCESS_TOKEN") === null
                          ? false
                          : true;
                      },
                  },
              },
          },
      },
  }),
  resolvers : {
      Mutation : {
          logUserIn:(_, __, { cache }) => {
              cache.writeQuery({
                query:gql`
                  {
                    isLogin @client
                  }
                  `,
                  data: {
                      isLogin:true,
                  },
              });
          },
      },
  },
});