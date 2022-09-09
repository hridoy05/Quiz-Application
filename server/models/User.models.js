const User = require('../models/User.mongo');
exports.getAllUsers = async () => {
    const users = await User.find().select('-password').sort({ createdAt: 1 });
    return users;
};
