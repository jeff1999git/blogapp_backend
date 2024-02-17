const express=require("express")

const router=express.Router()
const userModel=require("../models/userModel")

router.post("/signup",async(req,res)=>{
    let data=req.body
    let userObj=new userModel(data)
    let result=await userObj.save()
    res.json({
        status:"success"
    })
})

router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.userEmail
    let pword=req.body.userPword
    let edata=await userModel.findOne({"userEmail":email})
    let pdata=await userModel.findOne({"userPword":pword})
    if(!edata)
    {
        return res.json(
            {
                status:"invalid email"
            }
            
        )
    }
    if(!pdata)
    {
        return res.json(
            {
                status:"invalid password"
            }
            
        )
    }
    res.json(
        {
            status:"success"
        }
    )
})

router.get("/viewusers", async (req, res) => {
    let projection = "-_id -__v"; // Using string syntax to exclude fields
    let result = await userModel.find({}, projection); // Apply projection in find
    res.json(result);
    
});


module.exports=router