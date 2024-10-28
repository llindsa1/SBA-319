const mongoose= require ('mongoose');

const postSchema =new mongoose.Schema({
    userID: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: String, required: true},
    content: String,
    location: String,
    images: [String],
    date:{type: Date, default: Date.now },
});
postSchema.index({ location: 1, date: -1});
module.exports = mongoose.model('Post', postSchema);
