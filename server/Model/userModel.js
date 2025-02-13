const { Schema, model } = require("mongoose");
const { Post } = require("./postModel");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const userSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: String,
  name: String,
  location: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

userSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  return token;
};

module.exports.User = model("User", userSchema);
