const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function userMiddleware(req, res, next) {
  const jwtToken = req.headers.authorization;
  try {
    const decodedValue = jwt.verify(jwtToken, process.env.JWT_SECRET);

    if (decodedValue.email) {
      req.email = decodedValue.email;
      req._id = decodedValue._id;
      next();
    } else {
      res.json({
        success: false,
        message: "You are not authenticated",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Invalid Token!",
    });
  }
}

module.exports = userMiddleware;
