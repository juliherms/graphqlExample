import Comment from './commentModel';

/**
 * Method responsible to save comment
 * @param {*} _  - any
 * @param {*} param1 - data input
 */
export async function saveComment(_, { input }){

    const comment = await Comment.create(input);
    return comment;
}

/**
 * Method responsible to find all comments
 */
export async function getComments() {

    const comments = await Comment.find();
    return comments;
}