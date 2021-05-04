const express = require("express");
const dotenv = require("dotenv");

// config .env to ./config/config.env
dotenv.config({
  path: "./config/config.env",
});

// load controllers
const {
  registerController,
  activationController,
  loginController,
  forgotPasswordController,
  resetPasswordController,
} = require("../controllers/auth.controller.js");
// validations
const {
  validRegister,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../helpers/valid");

const router = express.Router();

//console.log(process.env.MAIL_KEY);

router.post("/register", validRegister, registerController);
router.post("/login", validLogin, loginController);
router.post("/activation", activationController);
router.put(
  "/forgotpassword",
  forgotPasswordValidator,
  forgotPasswordController
);
router.put("/resetpassword", resetPasswordValidator, resetPasswordController);

module.exports = router;
