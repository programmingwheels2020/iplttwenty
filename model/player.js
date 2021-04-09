const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    teamName:{type:String,required:true},
    matches:{type:Number,required:true},
    runs:{type:Number},
    wickets:{type:Number},
    profilePicUrl:{type:String}
},{timestamps:true})

const PlayerModel = mongoose.model("Player",PlayerSchema);

module.exports= PlayerModel;