const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({

  name: {type:String,trim:true}, 

  email: {type:String,trim:true},
 
  mobile: {type:String,trim:true},

  parent:{type:mongoose.Schema.Types.ObjectId,ref:"Parent"}
 
});

const postUser = mongoose.model("Child", childSchema);
module.exports = postUser;
