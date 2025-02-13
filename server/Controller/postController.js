const { Post } = require("../Model/postModel");
const { User } = require("../Model/userModel");

module.exports.postContent = async (req, res) => {
  try {
    const { link, message, type } = req.body;
    const user = await User.findOne({ email: req.email });
    const post = new Post({
      link,
      type,
      message,
      name: user.name,
      username: user.username,
    });
    await post.save();
    await User.findOneAndUpdate(
      { email: req.email },
      {
        $push: {
          posts: post._id,
        },
      }
    );

    res.status(200).send({
      success: true,
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    console.log("Error in posting content", error);
    res.status(500).send({
      success: false,
      message: "Couldn't post the image",
    });
  }
};

module.exports.getPosts = async (req, res) => {
  try {
    let posts = await Post.find({});
    res.status(200).send({
      success: true,
      message: "All posts fetched successfully!",
      posts,
    });
  } catch (error) {
    console.log("Error in posting content", error);
    res.status(500).send({
      success: false,
      message: "Couldn't post the image",
    });
  }
};

module.exports.getUserPosts = async (req, res) => {
  try {
    const userId = req._id;
    const postIds = await User.findOne({ _id: userId }).select("posts");

    const data = await Post.find({ _id: { $in: postIds.posts } }).select(
      "username name link createdAt"
    );

    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: "Failed to get user posts" });
  }
};
