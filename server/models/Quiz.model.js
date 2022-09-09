const Quiz = require('../models/Quiz.mongo');
exports.getAllQuizes = async () => {
    const quizes = await Quiz.find({}).exec();
    return quizes;
};
