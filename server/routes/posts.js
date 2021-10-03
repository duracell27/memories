const express = require("express");
const {getPost, createPost, updatePost} = require("../controllers/posts");

const router = express()

router.get('/', getPost)
router.post('/', createPost)
router.patch('/:id', updatePost)

module.exports = router

