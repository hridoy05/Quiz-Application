const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
        },
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    role: {
        type: String,
        default: 'user',
    },
    stripe_account_id: '',
    quizes: [{ type: ObjectId, ref: 'Quiz' }],
});

module.exports = mongoose.model('User', UserSchema);
