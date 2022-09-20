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
    journalName: {
        type: String,
        required: true
    },
    yearOfPub: {
        type: Date
    },
    volume: {
        type: Number
    },
    pages: {
        type: Number
    },
    doi: {
        type: String,
        required: true
    }
});

module.exports = Article = mongoose.model("Articles", articleSchema);