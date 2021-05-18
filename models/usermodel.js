const mongoose=require('mongoose');


const user_schema=new mongoose.Schema({
    task:String,
})

module.exports=mongoose.model("task table",user_schema);