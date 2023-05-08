const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {dataRouter}=require("./routes/data.routes")

const app=express()
app.use(express.json())
app.use("/users",userRouter)
// app.use("/data",dataRouter)
app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log(err)
        console.log("Connot connect with db")
    }
    console.log("Server is running at 8080...")
})
