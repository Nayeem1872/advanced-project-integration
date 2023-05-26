
const Child = require("../model/child.js");

function userController (){
    return {
        // GetChild
        async getChild (req,res){
            try {
                console.log("asdasd")
                const child = await Child.find().populate({path:"parent",select:["name"]})
                console.log(child);
                res.staus(200).json({success:true,message:"Child found Successfully" ,data:child})

            } catch (error) {
                
            }

        },
        // Post User
        async postUser (req,res){
            try {
                
            } catch (error) {
                
            }
        }

    }
}
module.exports= userController