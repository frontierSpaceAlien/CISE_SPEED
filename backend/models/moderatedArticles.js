const mongoose = require('mongoose');

const moderateArticleSchema = new mongoose.Schema({
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
    pubyear: {
        type: String
    },
    doi: {
        type: String,
        required: true
    }
});

module.exports = moderateArticle = mongoose.model("moderateArticles", moderateArticleSchema);