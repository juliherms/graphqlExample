import { GraphQLString, GraphQLList,GraphQLInputObjectType } from 'graphql'
import CommentType from './commentType';
import { getComments, saveComment } from './commentLoader';

/**
 * getComments responsible to find all comments in database
 */
export const queries = {
    getComments: {
        type: GraphQLList(CommentType),
        resolve: getComments
    }
};

export const mutations = {
    saveComment: {
        type: CommentType,
        resolve: saveComment,
        args: {
           input: {
            type: new GraphQLInputObjectType({
                name: 'CommentInput',
                fields: {
                    name: {
                        type: GraphQLString
                    },
                    content: {
                        type: GraphQLString
                    },
                }
            }),  
           }
        },
    }
};

