const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const quizSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            minlength: 3,
            maxlength: 320,
            required: true,
        },
        slug: {
            type: String,
            lowercase: true,
        },
        description: {
            type: {},
            minlength: 200,
            required: true,
        },
        price: {
            type: Number,
            default: 9.99,
        },
        image: {},
        // category: String,
        // published: {
        //     type: Boolean,
        //     default: false,
        // },
        paid: {
            type: Boolean,
            default: true,
        },
        questions: [
            {
                type: ObjectId,
                ref: 'Question',
            },
        ],
    },
    { timestamps: true }
);
module.exports = mongoose.model('Quiz', quizSchema);
