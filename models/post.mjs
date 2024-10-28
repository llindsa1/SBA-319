import { Schema, model } from 'mongoose';

const postSchema =new Schema({
    userID: {type:Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: String, required: true},
    content: String,
    location: String,
    images: [String],
    date:{type: Date, default: Date.now },
});
postSchema.index({ location: 1, date: -1});
export default model('Post', postSchema);
