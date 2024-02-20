const express=require("express")

const router=express.Router()

const postModel=require("../models/postModel")

router.post("/addpost",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

router.get("/viewpost",async(req,res)=>{
    let result=await postModel.find().populate("userId","userName userPhone userEmail -_id").exec()
    res.json(result)
})

module.exports=router