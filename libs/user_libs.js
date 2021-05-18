const mongoose=require('mongoose');
const user_model=require('../models/usermodel.js');

exports.get=async(req,res)=>
{
    var course=await user_model.find()
        res.json(course);
}


exports.post=async(req,res)=>
{
      var course=await  user_model.create(req.body);
      res.json(course);
}

exports.getuser=async(req,res)=>
{
    var course=await user_model.find(
        {_id:req.params.id}
    )
    res.json(course);
}

exports.up=async(req,res)=>{

    var course=await user_model.update(
        {_id:req.params.id},{$set:{task:req.body.task}}
    )
    res.json(course);
}

exports.del=async(req,res)=>{
    var course=await user_model.deleteOne(
        {_id:req.params.id}
    )
    res.json(course);
}


