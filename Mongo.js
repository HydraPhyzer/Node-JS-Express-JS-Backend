let {MongoClient}=require('mongodb')
let URL="mongodb://localhost:27017"
let Client=new MongoClient(URL)

let Connection=async ()=>
{
    let Connect=await Client.connect()
    let Collect=await Connect.db('App').collection('P1');

    return Collect
}
module.exports=Connection