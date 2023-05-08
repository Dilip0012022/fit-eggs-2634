const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://dkguptaji001:dkguptaji001@cluster0.j7entwn.mongodb.net/Unit4_Project?retryWrites=true&w=majority")

module.exports={connection}