const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({

  name: {type:String,trim:true}, 

  email: {type:String,trim:true},
 
  mobile: {type:String,trim:true},
 
});

const postUser = mongoose.model("Parent", parentSchema);
module.exports = postUser;
