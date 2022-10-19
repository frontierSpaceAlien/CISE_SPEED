const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

router.route("/SubmitArticle").post((req, res) => {
    const title = req.body.title;
    const authors = req.body.authors;
    const source = req.body.source;
    const pubyear = req.body.pubyear;
    const doi = req.body.doi;
    const newArticle = new Articles({
        title,
        authors,
        source,
        pubyear,
        doi
    });

    newArticle.save();
});

router.route("/ModerateArticles").get((req, res) =>{
    Articles.find().then(foundArticles => res.json(foundArticles))
})

module.exports = router;