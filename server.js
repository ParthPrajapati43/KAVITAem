const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

// load all routes
const authRouter = require("./routes/auth.route.js");

// creating the express object
const app = express();

// config .env to ./config/config.env
dotenv.config({
  path: "./config/config.env",
});

// connect to database
connectDB();

// use body parser
app.use(bodyParser.json());

// config for only development
if (process.env.NODE_ENV === "development") {
  // cors allows to deal with react for localhost at port 3000 without any problem
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );

  // morgan gives information about each request
  app.use(morgan("dev"));
}

// use routes
app.use("/api", authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page Not Found",
  });
});

const PORT = process.env.PORT;

// bind and listen the connections on the specified host and port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
