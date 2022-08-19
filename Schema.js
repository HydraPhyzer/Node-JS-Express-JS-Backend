let mongoose=require('mongoose')

let Schema=mongoose.Schema(
    {
        Name:String,
        Age:Number
    }
)

let Model=new mongoose.model('P1' , Schema)

module.exports=Model