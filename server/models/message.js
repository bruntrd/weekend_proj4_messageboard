var mongoose= require('mongoose');

var MessageSchema = new mongoose.Schema({
    //key : data type
    name : String,
    message : String
});

module.exports = mongoose.model("Message", MessageSchema);
