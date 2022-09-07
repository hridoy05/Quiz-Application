const Category = require('../models/category');
const slugify = require('slugify');

exports.create = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await new Category({
            name,
            slug: slugify(name),
        }).save();
        // console.log("saved category", category);
        res.json(category);
    } catch (error) {
        console.log(error);
    }
};
