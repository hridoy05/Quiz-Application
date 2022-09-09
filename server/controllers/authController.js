const User = require('../models/User.mongo');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { hashPassword, comparePassword } = require('../helpers/auth');
const { BadRequestError, UnauthenticatedError } = require('../errors');

exports.signup = async (req, res) => {
    console.log('HIT SIGNUP');
    try {
        // validation
        const { name, email, password } = req.body;
        if (!name) {
            throw new BadRequestError('Please provide name');
        }
        if (!email) {
            throw new BadRequestError('Please provide email');
        }
        if (!password || password.length < 6) {
            throw new BadRequestError('Please provide password');
        }
        const exist = await User.findOne({ email });
        if (exist) {
            throw new BadRequestError('Email already exists');
        }
        // hash password
        const hashedPassword = await hashPassword(password);
        const customer = await stripe.customers.create({
            email,
        });
        try {
            const user = await new User({
                name,
                email,
                password: hashedPassword,
                stripe_account_id: customer.id,
            }).save();

            // create signed token
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '7d',
            });

            let newUser = { name: user.name, userId: user._id, email: user.email };
            return res.json({
                token,
                newUser,
            });
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    }
};

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check if our db has user with that email
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
            throw new UnauthenticatedError('Invalid Credentials');
        }
        // check password
        const match = await comparePassword(password, user.password);
        if (!match) {
            throw new UnauthenticatedError('Invalid Credentials');
        }
        // create signed token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        user.password = undefined;
        user.secret = undefined;
        res.json({
            token,
            user,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send('Error. Try again.');
    }
};
