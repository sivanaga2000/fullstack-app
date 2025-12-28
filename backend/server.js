const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect("mongodb://mongo:27017/mydb")
.then(() => console.log("Mongo Connected"))
.catch(err => console.log(err));

app.get("/api", (req,res)=>{
  res.json({message: "Backend Working with Docker + Jenkins!"});
});

app.listen(5000, ()=> console.log("Backend running on 5000"));
