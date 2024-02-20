const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const signRoute=require("./controllers/signRouter")
const postRoute=require("./controllers/postRouter")
const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/sign",signRoute)
app.use("/api/post",postRoute)

mongoose.connect("mongodb+srv://jeffjoev:jeffinjosev@cluster0.3tagu6i.mongodb.net/blogUserDb?retryWrites=true&w=majority")

app.listen(3000,()=>{
    console.log("Server Running....")
})