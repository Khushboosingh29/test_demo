const express = require("express");
//var http = require("http");
const app = express();
const port= process.env.Port || 5000;

const mongoose=require("mongoose");
const router = require("./routes/issues");
mongoose.connect('mongodb+srv://khushboohavoc:khushboo123@cluster0.yxd9d.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
//mongoose.connect('mongodb+srv://Issue:9Anushka219@cluster0.yodvb.mongodb.net/?retryWrites=true&w=majority');
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));
db.once("open",function(){
    console.log("Connected MongoDB");
});

app.listen(port,function(){
    console.log("Server is running on port", port);
});

app.get('/', (req,res)=>{
    res.send("Hello");
});

app.use(express.json());

const UserIssueRoute = require("./routes/issues");
app.use("/userIssue", UserIssueRoute);
