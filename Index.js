const EventEmitter=require('events')
let express=require('express')
let App=express()
let Event=new EventEmitter()

let Count=0

Event.on("Counter" , ()=>
{
    ++Count;
    console.log(Count)
})
App.get('/' , (Req,Res)=>{
    Event.emit("Counter")
    Res.send("Event Emitted")
})

App.listen(3000)