let Mongo=require('./Mongo')
let express=require('express')
let App=express()
let mongodb=require('mongodb')
App.use(express.json())

App.get('/' , async(Req,Res)=>
{
    let DB=await Mongo()
    Res.send(await DB.find().toArray())
})

App.post('/' , async(Req,Res)=>
{
    let DB=await Mongo()
    let Result=await DB.insertOne(Req.body)

    Res.send(`Data Added : ${Result.acknowledged}`)
})

App.put('/:XYZ' , async(Req,Res)=>
{
    let DB=await Mongo()
    let Result=await DB.updateOne(
        {
            Name:Req.params.XYZ
        },
        {
            $set:Req.body
        }
    )
    Res.send(`Data Update : ${Result.acknowledged}`)
})

App.delete('/:XYZ' , async(Req,Res)=>
{
    let DB=await Mongo()
    let Result=await DB.deleteOne({_id:new mongodb.ObjectId(Req.params.XYZ)})
    Res.send(`Data Delete : ${Result.acknowledged}`)
})

App.listen(3000)
