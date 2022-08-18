let mongoose = require("mongoose");

let Connection = mongoose.connect("mongodb://localhost:27017/App");
let Schema = mongoose.Schema({
  Name: String,
  Age: Number,
});

let InsertData = async () => {
  let Model = new mongoose.model("P1", Schema);
  let Data = new Model({
    Name: "Zubair Gujjar",
    Age: 20,
  });
  let Res = await Data.save();
  console.log(Res);
};

let UpdateData=async()=>
{
    let Model=new mongoose.model("P1" , Schema)
    let Data=await Model.updateOne(
        {
            Name:"Zubair Gujjar"
        },
        {
            $set:{
                Name:"Muhammad Zubair"
            }
        }
    )
}
let DeleteData=async()=>
{
    let Model = new mongoose.model("P1" , Schema)
    let Data=await Model.deleteOne({Name:"Muhammad Zubair"})
}

let ReadData=async ()=>
{
    let Model = new mongoose.model("P1" , Schema)
    let Data=await Model.find();
    console.log(Data)
}
// InsertData();
// UpdateData()
// DeleteData()
// ReadData()
