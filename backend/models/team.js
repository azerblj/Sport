// import mongoose module
const mongoose = require("mongoose");

const teamSchema=mongoose.Schema({
  name:String,
  owner:String,
  foundation:Number,
})

//affect name to teamSchema
const team =mongoose.model("Team",teamSchema);

//make model exportable
module.exports = team;
