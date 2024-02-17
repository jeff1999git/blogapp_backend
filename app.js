const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const signRoute=require("./controllers/signRouter")
const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/sign",signRoute)

app.listen(3001,()=>{
    console.log("Server Running....")
})