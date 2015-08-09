var express = require('express');
var router = express.Router();
var path = require('path');
var Message = require('../models/message');

router.post("/", function(req, res, next){
    Message.create(req.body, function(err, post){
        res.send("yes");
    });
    console.log("post hit: ", req.body);
});

router.delete("/:id", function(req, res, next){
    Message.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) {
            console.log("error ", err);
        }
        res.json(post);
    });
});

router.get("/", function(req, res, next){
    Message.find(function(err,people){
        res.json(people);
    });
});

module.exports = router;