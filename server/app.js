var express=require('express');
var path=require('path');
var mongoose = require('mongoose');
var app = express();
var db = require('./routes/db');
var index= require('./routes/index');

//var mongoURI = "mongodb://bruntrd:Freddy999@ds031203.mongolab.com:31203/message_board"
var mongoURI = "mongodb://localhost:27017/messageboard";
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error',function(err){
    if(err){
        console.log("mongo error: ", err);
    }
});

mongoDB.once('open', function(){
    console.log("connected to mongodb!");
});

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));


app.set("port", (process.env.PORT || 5000));

app.use("/db",db);
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));;
});