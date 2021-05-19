
const express=require('express');
const mongoose=require('mongoose');
const user_lib=require('./libs/user_libs.js');
const app=express();
const password=process.env.password;

const connectionstring="mongodb+srv://sahith:"+password+"@cluster0.jivxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const dboptions={useUnifiedTopology:true}

mongoose.connect(connectionstring,dboptions,function()
{
    console.log("db connected");   
});

const path=process.env.PORT||3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',function(req,res)
{
    res.sendFile(__dirname+"/frontend/index.html");
})


// var tasks=[];
// var idx=0;

// app.post('/post',function(req,res)
// {
    
//     var x=req.body;
//     tasks.push(x);
//     x['id']=idx;
//     res.send(x);
//     idx++;
// })

// app.delete('/del/:id',function(req,res)
// {
//     console.log(req.params.id)

//     tasks=tasks.filter((x)=>{return (x.id!=req.params.id)});
//     res.send("deleted");

// })



app.get("/users",user_lib.get);


app.post("/users",user_lib.post);


app.get("/getuser/:id",user_lib.getuser);


app.put("/users/:id",user_lib.up)


app.delete("/users/:id",user_lib.del);



app.listen(path,function()
{
    console.log("server started ")
})
