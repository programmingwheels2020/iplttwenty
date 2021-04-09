const express = require("express");
const Player = require("../model/player");


const route = express.Router();

route.post("/players",async (req,res)=>{
    try{
        const player = new Player(req.body);
        await player.save();
        res.json({message:'Success',player})
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
   
})

route.get("/players",async (req,res)=>{
    try{
        const players = await Player.find({});
        res.json(players);

    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.get("/player/:id",async (req,res)=>{
    try{
        const players = await Player.findById(req.params.id);
        res.json(players);

    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.put("/player/:id",async(req,res)=>{
    try{
        const player = await Player.updateOne({_id:req.params.id},{$set:req.body});
        
        res.json({message:"Success",player});

    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

route.delete("/player/:id",async(req,res)=>{
    try{
        await Player.deleteOne({_id:req.params.id});
        res.json({message:"Success"});
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})
module.exports=route;

