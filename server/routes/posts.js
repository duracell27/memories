const express = require("express");
const {getPost, createPost} = require("../controllers/posts");

const router = express()

router.get('/', getPost)
router.post('/', createPost)

module.exports = router

