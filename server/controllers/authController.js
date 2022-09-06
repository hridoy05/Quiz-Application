const User = require('../models/user');
const jwt = require('jsonwebtoken');

const { hashPassword, comparePassword } = require('../helpers/auth');
exports.signup = async (req, res) => {
    console.log('HIT SIGNUP');
    try {
        // validation
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({
                error: 'Name is required',
            });
        }
        if (!email) {
            return res.json({
                error: 'Email is required',
            });
        }
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be 6 characters long',
            });
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'Email is taken',
            });
        }
        // hash password
        const hashedPassword = await hashPassword(password);

        try {
            const user = await new User({
                name,
                email,
                password: hashedPassword,
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
    console.log(req.body);
    try {
        const { email, password } = req.body;
        // check if our db has user with that email
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: 'No user found',
            });
        }
        // check password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({
                error: 'Wrong password',
            });
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
