// import mongoose module
const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  name: String,
  age: Number,
  num: Number,
  position:String
});

//affect name to playerSchema
const player =mongoose.model("Player",playerSchema);

//make model exportable
module.exports = player;
