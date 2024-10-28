const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true, 
        match: [/.+\@.+\..+/, 'Please enter a valid email'],
    }

});
export default mongoose.model('User, userSchema');
