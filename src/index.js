const { ApolloServer, gql } = require('apollo-server');

//All requests is POST
//All request target same endpoint(/graphql)

//Query -> get information
//Muutation -> For maintain Data(POST/PUT/PATCH/DELETE)
//Scalar Types -> String,Int,Boolean,Float and ID

const typeDefs = gql `
    type Query{
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello World'
    }
};

const server = new ApolloServer( { typeDefs, resolvers } );

server.listen().then( ({ url }) => console.log(`Server started at ${url}`));

