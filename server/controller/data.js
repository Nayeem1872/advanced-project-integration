const Parent = require("../model/parent.js");
const Child = require("../model/child.js");

const data = async (req, res) => {
  
    let data;
    
    try {
        const user = req.body;
        user.map(async (u,index) => {
          console.log(u);
          if(index==0){
            let parent = new Parent(u)
            data = parent._id
            await parent.save();
          }else{
            let child = new Child(u)
            child.parent = data
            await child.save();
          }
    
          
        });
        
        res
          .status(201)
          .json({
            success: true,
            message: "Data added Successfully",
            
          });
        console.log();
      } catch (error) {
        res.status(409).json({ message: error.message });
      }
  };
  
  module.exports = data;