// Project Theatherflix 
// any doubts go to README.md and Changelog.md




// Thatherflix is an Open Source Project
// Founded by Felipe Alfonso Gonzalez - Soft. Engr. - 
// C2018 - Present

/*
old stuff
*/
/*
const express = require('express');

// creation of the app using express .
const app = express();

app.set('port', process.env.PORT || 3030)

app.use(express.static('public'));

app.listen(app.get('port'), function () {
  console.log(`Server is up, on port ${app.get('port')}`);
});

*/



var express = require("express");
var path = require("path");
var mongo = require("mongoose");
var bodyParser = require('body-parser');
var morgan = require("morgan");
var db = require("./config.js");

var app = express();
var port = process.env.port || 7777;
var srcpath = path.join(__dirname, '/public');
app.use(express.static('public'));

/*
app.use(bodyParser.json({
    limit: '5mb'
}));
*/
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '5mb'
}));


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    name: {
        type: String
    },
    frag: {
        type: String
    },
    calicata: {
        type: String
    },
    contact: {
        type: String
    },
}, {
    versionKey: false
});


var model = mongoose.model('student', studentSchema, 'student');

//api for get data from database  
app.get("/api/getdata", function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})


//api for Delete data from database  
app.post("/api/Removedata", function (req, res) {
    model.remove({
        _id: req.body.id
    }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                data: "Record has been Deleted..!!"
            });
        }
    });
})


/*


We're a collective of creative pioneers from worldwide. We do research, development, Open Source Software & Craftsmanship. @felipealfonsog Frontman.


*/

//api for Update data from database  
app.post("/api/Updatedata", function (req, res) {
    model.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            frag: req.body.frag,
            contact: req.body.contact,
            calicata: req.body.calicata
        },
        function (err) {
            if (err) {
                res.send(err);
                return;
            }
            res.send({
                data: "Record has been Updated..!!"
            });
        });
})


//api for Insert data from database  
app.post("/api/savedata", function (req, res) {

    var mod = new model(req.body);
    mod.save(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                data: "Record has been Inserted..!!"
            });
        }
    });
})

// call by default index.html page  
app.get("*", function (req, res) {
    res.sendFile(srcpath + '/index.html');
})

//server stat on given port  
app.listen(port, function () {
    console.log("server start on port" + port);
})