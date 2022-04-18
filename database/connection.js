const mongoose = require("mongoose");

module.exports = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
    console.log("Connected to database");
  } catch (error) {
    console.log("Database connection error: ", error);
    throw new Error(error);
  }
};
