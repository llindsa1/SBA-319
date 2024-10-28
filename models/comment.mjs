import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
    postId: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    text: {type:String, required: true},
    date: {type: Date, default: Date.now},
});

export default model('Comment', commentSchema);