const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

router.route("/SubmitArticle").post((req, res) => {
    const title = req.body.title;
    const authors = req.body.authors;
    const source = req.body.source;
    const publishedYear = req.body.publishedYear;
    const doi = req.body.doi;
    const newArticle = new Articles({
        title,
        authors,
        source,
        publishedYear,
        doi
    });

    newArticle.save();
})

module.exports = router;