const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        userName:String,
        userPhone:String,
        userEmail:String,
        userPword:String
    }
)

module.exports=mongoose.model("user",userSchema)