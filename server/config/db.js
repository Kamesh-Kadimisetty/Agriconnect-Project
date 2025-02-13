const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv/config");
console.log("Mongo URL: ", process.env.MONGO_URL);


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,   // Enables the new connection string parser
      useUnifiedTopology: true, // Uses the new Server Discovery and Monitoring engine
      // useCreateIndex: true,    // Ensures indexes are created properly
      // useFindAndModify: false, // Disables `findAndModify` for better MongoDB compatibility
    });

    console.log(
      `Connected to MongoDB Database: ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MongoDB: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
