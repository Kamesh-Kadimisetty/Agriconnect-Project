const { Schema, model } = require("mongoose");

module.exports.Post = model(
  "Post",
  Schema({
    link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    message: String,
    name: String,
    username: String,
    createdAt: { type: Date, default: Date.now },
  })
);
