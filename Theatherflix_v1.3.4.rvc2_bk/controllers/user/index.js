// controllers/user/index.js
var express = require('express');
var app = module.exports = express();

app.set('views', __dirname + '/views');

app.get('/user/new', function(request, response){

     response.render('new');

});