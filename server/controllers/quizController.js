const Quiz = require('../models/Quiz.mongo');
const slugify = require('slugify');

exports.quizCreate = async (req, res) => {
    console.log(' hit quiz ');
    try {
        const { name, description, paid, price, image } = req.body;
        const quiz = await new Quiz({
            name,
            slug: slugify(name),
            description,
            paid,
            price,
            image,
        }).save();
        res.json(quiz);
    } catch (error) {
        console.log(error);
    }
};

exports.quizes = async (req, res) => {
    try {
        const all = await Quiz.find({}).exec();
        res.json(all);
    } catch (err) {
        console.log(err);
    }
};

exports.singleQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.find({ slug: req.param.slug }).populate('questions').exec();
        res.json(quiz);
    } catch (err) {
        console.log(err);
    }
};
