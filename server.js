const express = require("express");
//var http = require("http");
const app = express();
const port= 5000;

const mongoose=require("mongoose");
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


/*const port = process.env.PORT || 3000;
var server = http.createServer(app);
const mongoose = require("mongoose");
const { Socket } = require("socket.io");

var io = require("socket.io")(server);

app.use(express.json());

//COnnect DB
const DB = 'mongodb+srv://Issue:9Anushka219@cluster0.yodvb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
})

io.on('connection',(socket)=>{
    console.log('Connected');
    socket.on('create-game',async({nickname, name, occupancy, maxRounds})=>{
        try{

        }
        catch(err){
            
        }
    })
})

server.listen(port, '0.0.0.0', () => {
    console.log("Server Started and running " + port);
})
*/
