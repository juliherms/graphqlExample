import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

/**
 * This class responsible to especification query graphQL
 * for the client application we have access to field belows
 */
export default new GraphQLObjectType({
    name: 'CommentType',
    fields: {
        id: {
            type: GraphQLNonNull(GraphQLString)
        },
        name: {
            type: GraphQLNonNull(GraphQLString)
        },
        content: {
            type: GraphQLNonNull(GraphQLString)
        },
        createdAt: {
            type: GraphQLNonNull(GraphQLDateTime)
        },
        updatedAt: {
            type: GraphQLNonNull(GraphQLDateTime)
        }
    }
})