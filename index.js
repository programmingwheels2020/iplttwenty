const express = require("express");
const http = require("http");
const mongoose = require('mongoose');
const playerRoute = require("./routes/playerRoute");
const teamRoute = require("./routes/teamRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
const MONGO_URL = `mongodb+srv://kalinga:kalinga@kalinga.cfsfv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


mongoose.connect(MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    console.log(err)
    if(err){
        console.log("Error Occured",err)
    }else{
        console.log("Connection Successful")
    }
})

const PORT = process.env.PORT || '8080'

app.use("/player",playerRoute)
app.use("/team",teamRoute);

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

/*
app.listen(PORT,(err)=>{
    console.log(`Server is running on port ${PORT}`);
})
*/