const { User } = require("../Model/userModel");
const { comparePassword, hashPassword } = require("./../helpers/authHelper.js");

module.exports.signUp = async (req, res) => {
  try {
    const { name, username, email, password, location, language } = req.body;
    const existingUser = await User.findOne({
      email: req.body.email,
    });
    if (existingUser)
      return res.send({ success: false, message: "User already exists" });

    const hashedPassword = await hashPassword(password);
    const user = await new User({
      name,
      username,
      email,
      location,
      language,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

module.exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = user.generateJWT();
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        location: user.location,
        language: user.language,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

module.exports.getNeighbours = async (req, res) => {
  try {
    const location = req.params.location;
    let users = await User.find({ location }).limit(10);
    users = users.map((user) => ({
      _id: user._id,
      name: user.name,
      image: user.image,
    }));
    res.send({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ success: false, message: "Request failed" });
  }
};
