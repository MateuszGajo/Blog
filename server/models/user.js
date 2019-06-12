const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.methods.hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

module.exports = mongoose.model("user", userSchema, "users");
