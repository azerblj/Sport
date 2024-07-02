// import mongoose module
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  pwd: String,
});

//affect name to matchSchema
const user =mongoose.model("User",userSchema);

//make model exportable
module.exports = user;
