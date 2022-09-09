const User = require('../models/User.mongo');
const Quiz = require('../models/Quiz.mongo');
const slugify = require('slugify');
const { getAllQuizes } = require('../models/Quiz.model');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

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
        const all = await getAllQuizes();
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
exports.checkEnrollment = async (req, res) => {
    const { quizId } = req.params;
    // find courses of the currently logged in user
    const user = await User.findById(req.user._id).exec();
    // check if course id is found in user courses array
    let ids = [];
    let length = user.quizes && user.quizes.length;
    for (let i = 0; i < length; i++) {
        ids.push(user.quizes[i].toString());
    }
    res.json({
        status: ids.includes(quizId),
        course: await Quiz.findById(quizId).exec(),
    });
};

exports.freeEnrollment = async (req, res) => {
    try {
        // check if course is free or paid
        const quiz = await Quiz.findById(req.params.quizId).exec();
        if (quiz.paid) return;

        const result = await User.findByIdAndUpdate(
            req.user._id,
            {
                $addToSet: { quizes: quiz._id },
            },
            { new: true }
        ).exec();
        console.log(result);
        res.json({
            message: 'Congratulations! You have successfully enrolled',
            quiz,
        });
    } catch (err) {
        console.log('free enrollment err', err);
        return res.status(400).send('Enrollment create failed');
    }
};

exports.paidEnrollment = async (req, res) => {
    try {
        // check if course is free or paid
        const quiz = await Quiz.findById(req.params.courseId).exec();
        const user = await User.findById(req.user._id).exec();
        if (!quiz.paid) return;
        // application fee 30%
        const fee = (quiz.price * 30) / 100;
        // create stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            // purchase details
            line_items: [
                {
                    name: quiz.name,
                    amount: Math.round(quiz.price.toFixed(2) * 100),
                    currency: 'usd',
                    quantity: 1,
                },
            ],
            // charge buyer and transfer remaining balance to seller (after fee)
            payment_intent_data: {
                application_fee_amount: Math.round(fee.toFixed(2) * 100),
                transfer_data: {
                    destination: user.stripe_account_id,
                },
            },
            // redirect url after successful payment
            success_url: `${process.env.STRIPE_SUCCESS_URL}/${quiz._id}`,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        });
        console.log('SESSION ID => ', session);

        await User.findByIdAndUpdate(req.user._id, {
            stripeSession: session,
        }).exec();
        res.send(session.id);
    } catch (err) {
        console.log('PAID ENROLLMENT ERR', err);
        return res.status(400).send('Enrollment create failed');
    }
};

exports.stripeSuccess = async (req, res) => {
    try {
        // find course
        const course = await Quiz.findById(req.params.courseId).exec();
        // get user from db to get stripe session id
        const user = await User.findById(req.user._id).exec();
        // if no stripe session return
        if (!user.stripeSession.id) return res.sendStatus(400);
        // retrieve stripe session
        const session = await stripe.checkout.sessions.retrieve(user.stripeSession.id);
        console.log('STRIPE SUCCESS', session);
        // if session payment status is paid, push course to user's course []
        if (session.payment_status === 'paid') {
            await User.findByIdAndUpdate(user._id, {
                $addToSet: { courses: course._id },
                $set: { stripeSession: {} },
            }).exec();
        }
        res.json({ success: true, course });
    } catch (err) {
        console.log('STRIPE SUCCESS ERR', err);
        res.json({ success: false });
    }
};
