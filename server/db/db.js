const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB Database ..."))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

module.exports = connectDB;
