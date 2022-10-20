const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");
const ModerateArticle = require("../models/moderatedArticles");

// POST saves submitted articles to articles schema
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

// GET gets articles
router.route("/ModerateArticles").get((req, res) =>{
    Articles.find().then(foundArticles => res.json(foundArticles))
})


// POST saves moderated articles to moderateArticle schema
router.route("/ModerateArticles").post((req,res) =>{
    const title = req.body.title;
    const authors = req.body.authors;
    const source = req.body.source;
    const pubyear = req.body.pubyear;
    const doi = req.body.doi;
    const newArticle = new ModerateArticle({
        title,
        authors,
        source,
        pubyear,
        doi
    });

    newArticle.save();
})

router.route("/ModerateArticles/:id").delete((req,res) => {
    Articles.findByIdAndRemove(req.params.id).exec()
})

module.exports = router;