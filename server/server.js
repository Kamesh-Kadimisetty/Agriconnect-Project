const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv/config");

const userRouter = require("./Router/userRouter");
const postRouter = require("./Router/postRouter");

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/posts", postRouter);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Agri Connect</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.PORT} mode on port ${PORT}`.bgCyan
      .white
  );
});
