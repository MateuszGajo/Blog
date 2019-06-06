const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    date: Date,
    image: String,
    recipe: Array,
    products: Array,
    categories: Array
});

module.exports = mongoose.model('Post', postSchema)