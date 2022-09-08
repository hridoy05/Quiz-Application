const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const optionSchema = new mongoose.Schema({ name: String });
const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide email'],
    },
    quiz: {
        ref: 'Quiz',
        type: ObjectId,
    },
    options: [optionSchema],
});
module.exports = mongoose.model('Question', questionSchema);
