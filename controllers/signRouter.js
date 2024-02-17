const express=require("express")

const router=express.Router()

router.post("/post",(req,res)=>{
    res.send("Post Working")
})

router.get("/get",(req,res)=>{
    res.send("Get Working")
})

module.exports=router