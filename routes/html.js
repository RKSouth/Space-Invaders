// const path = require("path");
const path = require("path");
const router = require("express").Router()

    // router.get("/", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/index.html"))
    // });
    
    router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    router.get("/saved", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/saved.html"))
    });

    router.get("/analyze", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/analyze.html"))
    });

    module.exports = router;