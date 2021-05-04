const mongoose = require("mongoose");

const connectDB = async () => {
  // establishing connection with mongodb
  const connection = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = connectDB;
