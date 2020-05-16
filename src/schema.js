//All requests is POST
//All request target same endpoint(/graphql)

//Query -> get information
//Mutation -> For maintain Data(POST/PUT/PATCH/DELETE)
//Scalar Types -> String,Int,Boolean,Float and ID

import { GraphQLSchema, GraphQLObjectType } from "graphql";

import rootQuery from "./modules/rootQuery";
import rootMutation from "./modules/rootMutation";

//dinamic schema
export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            ...rootQuery
        }
    }),
    mutation: new GraphQLObjectType({
        name: "RootMutationType",
        fields: {
            ...rootMutation
        }
    }),
})
