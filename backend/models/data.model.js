const mongoose=require("mongoose")

const dataSchema=mongoose.Schema({
    id:{type:String,required:true},
    img1:{type:String,required:true},
    img2:{type:String,required:true},
    category:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:String,required:true},
    size:{type:String,required:true},
    color:{type:String,required:true}
},{
    versionKey:false
})

const DataModel=mongoose.model("data",dataSchema)

module.exports={DataModel}