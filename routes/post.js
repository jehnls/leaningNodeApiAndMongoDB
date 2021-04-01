const express = require('express')

const {getPosts, creatPost } = require('../controllers/post')
const validator = require('../validator')

const router = express.Router();

router.get("/", getPosts);
router.post("/post", validator.createPostValidator, creatPost);

module.exports = router;
