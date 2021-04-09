const express = require("express");

const route = express.Router();

route.post("/teams",(req,res)=>{
   res.json({message:'Success'})
})

module.exports=route;

