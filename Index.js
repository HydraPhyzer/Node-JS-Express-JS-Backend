let express = require("express");
const mongoose = require("mongoose");
require("./Mongo");
let Model = require("./Schema");
let App = express();

App.use(express.json())

App.post('/post', async (Req, Res) => {
  let Data = new Model(Req.body);
  let Result=await Data.save()
  Res.send(Result);
});
App.get('/get' , async(Req,Res)=>
{
    let Result=await Model.find();
    Res.send(Result)
})

App.put('/put/:_id' , async (Req,Res)=>
{
    let Data=await Model.updateOne(
        Req.params , 
        {
            $set:Req.body
        }
    )
    Res.send(Data)
})

App.delete('/delete/:_id' , async (Req,Res)=>
{
    let Result=await Model.deleteOne(Req.params)
    Res.send(Result)
})

App.get('/search/name/:key' , async (Req,Res)=>
{   
    let Data=await Model.find(
        {
            "$or":
            [
                {"Name":{$regex:Req.params.key}},
            ]
        }
    )
    Res.send(Data)
})
App.get('/search' , async (Req,Res)=>
{   
    let Data=await Model.find(
        {
            "$or":
            [
                // {"Age":{$regex:Req.params.key}},
            ]
        }
    )
    // console.log(Req.query)
    // Res.send(Data)
})

App.listen(3000)