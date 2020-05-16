import { GraphQLString, GraphQLList,GraphQLInputObjectType } from 'graphql'
import CommentType from './commentType';
import { getComments, saveComment } from './commentLoader';

/**
 * in this file, I'm export my queries and mutations
 */


/**
 * getComments responsible to find all comments in database
 */
export const queries = {
    getComments: {
        type: GraphQLList(CommentType),
        resolve: getComments
    }
};

/**
 * Mutation responsible to save data
 */
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

