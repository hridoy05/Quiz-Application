const User = require('../models/User.mongo');
const emailValidator = 'email-validator';
const { hashPassword } = require('../helpers/auth');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const { getAllUsers } = require('../models/User.models');

exports.currentUser = async (req, res) => {
    try {
        console.log('hit from admin');
        const user = await User.findById(req.user._id);
        // res.json(user);
        res.json({ ok: true, user });
    } catch (err) {
        throw new UnauthenticatedError('Invalid Credentials');
    }
};
exports.createUser = async (req, res) => {
    console.log('CREATE USER => ', req.body);
    try {
        const { name, email, password, role } = req.body;
        if (!name) {
            throw new BadRequestError('Please provide name');
        }
        if (!email) {
            throw new BadRequestError('Please provide email');
        }
        if (!password || password.length < 6) {
            throw new BadRequestError('Password is required and should be 6 characters long');
        }
        const exist = await User.findOne({ email });
        if (exist) {
            throw new BadRequestError('Email already exists');
        }
        // hash password
        const hashedPassword = await hashPassword(password);

        try {
            const user = await new User({
                name,
                email,
                password: hashedPassword,
                role,
            }).save();
            let newUser = { name: user.name, userId: user._id, email: user.email };
            return res.json({
                newUser,
            });
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

exports.users = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (err) {
        res.sendStatus(400);
    }
};

exports.removeUser = async (req, res) => {
    try {
        const { userId } = req.params;
        if (userId === req.user._id) {
            return res.json({
                error: 'Cannot delete yourself',
            });
        }
        const user = await User.findByIdAndDelete(userId);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('image');
        res.json(user);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id, name, email, password } = req.body;

        const userFromDb = await User.findById(id);
        if (userFromDb._id.toString() !== req.user._id.toString()) {
            return res.json({ error: 'Unauthorized' });
        }

        // check valid email
        if (!emailValidator.validate(email)) {
            return res.json({ error: 'Invalid email' });
        }

        // check if email is taken
        const exist = await User.findOne({ email });
        if (exist && exist._id.toString() !== userFromDb._id.toString()) {
            return res.json({ error: 'Email is taken' });
        }

        // check password length
        if (password && password.length < 6) {
            return res.json({
                error: 'Password is required and should be 6 characters long',
            });
        }

        const hashedPassword = password ? await hashPassword(password) : undefined;
        const updated = await User.findByIdAndUpdate(
            id,
            {
                name: name || userFromDb.name,
                email: email || userFromDb.email,
                password: hashedPassword || userFromDb.password,
            },
            { new: true }
        );
        // console.log("updated user", updated);
        res.json(updated);
    } catch (err) {
        res.sendStatus(400);
        console.log(err);
    }
};

exports.updateUserByAdmin = async (req, res) => {
    try {
        const { id, name, email, password, role } = req.body;

        const userFromDb = await User.findById(id);

        // check valid email
        if (!emailValidator.validate(email)) {
            return res.json({ error: 'Invalid email' });
        }

        // check if email is taken
        const exist = await User.findOne({ email });
        if (exist && exist._id.toString() !== userFromDb._id.toString()) {
            return res.json({ error: 'Email is taken' });
        }

        // check password length
        if (password && password.length < 6) {
            return res.json({
                error: 'Password is required and should be 6 characters long',
            });
        }

        const hashedPassword = password ? await hashPassword(password) : undefined;
        const updated = await User.findByIdAndUpdate(
            id,
            {
                name: name || userFromDb.name,
                email: email || userFromDb.email,
                password: hashedPassword || userFromDb.password,
                role: role || userFromDb.role,
            },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.sendStatus(400);
        console.log(err);
    }
};
