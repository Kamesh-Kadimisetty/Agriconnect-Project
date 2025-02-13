const { Router } = require("express");
const {
  postContent,
  getPosts,
  getUserPosts,
} = require("../Controller/postController");
const userMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/post", userMiddleware, postContent);
router.get("/posts", getPosts);
router.get("/userposts", userMiddleware, getUserPosts);

module.exports = router;
