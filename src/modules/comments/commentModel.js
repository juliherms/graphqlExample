import { Schema, model } from 'mongoose';

/**
 * this class represents document mongo in the application.
 * comment
 */
const Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required:true,
        }
    },
    {
        timestamps: true    
    }
);

export default model('Comment',schema);