const express = require("express")
const router =express.Router()

router.get("/", (req, res) => {
    res.send("Posts")
})

router.get("/newposts", (req, res) => {
    res.send("New Posts")
})

module.exports = router