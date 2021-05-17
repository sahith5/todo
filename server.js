const express=require('express');
const app=express();
const path=process.env.PORT||3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',function(req,res)
{
    res.sendFile(__dirname+"/frontend/index.html");
})


var tasks=[];
var idx=0;

app.post('/post',function(req,res)
{
    
    var x=req.body;
    tasks.push(x);
    x['id']=idx;
    res.send(x);
    idx++;
})

app.delete('/del/:id',function(req,res)
{
    console.log(req.params.id)

    tasks=tasks.filter((x)=>{return (x.id!=req.params.id)});
    res.send("deleted");

})

app.get("/get",function(req,res)
{
    res.json(tasks);
})

app.listen(path,function()
{
    console.log("server started ")
})
