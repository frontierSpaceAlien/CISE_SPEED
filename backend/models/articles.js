const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Date
    },
    doi: {
        type: String,
        required: true
    }
});

module.exports = Article = mongoose.model("Articles", articleSchema);