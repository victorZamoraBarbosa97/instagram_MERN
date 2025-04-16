const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Mongoose Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
