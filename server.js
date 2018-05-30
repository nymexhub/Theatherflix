
//*******************************************************************************
// Thatherflix is an Software Open Source Project CC2017-Present
// Licence and other public affairs go to README.md, Changelog.md & Licence
//*******************************************************************************

/* 
Please if you code in this file please or another,  also add your email & name and date among the comments before and after any code we could write.
Thanks a lot!
Felipe - f.alfonso@res-ear.ch - 13-04-2018
Antz - cheerantz@gmail.com - 20-04-2018
----------

*/ 

var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});



// starting the coding - main server file.


// var config = require('./webpack.config.js')
// if (!process.env.NODE_ENV) {
// process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
// process.noDeprecation = true
// }




// const express = require('express');

// // creation of the app using express .
// const app = express();

// app.set('port', process.env.PORT || 3000)

// app.use(express.static('public'));


// app.listen(app.get('port'), () => {
//   console.log(`Server is up, on port: ${app.get('port')}`);
// });
