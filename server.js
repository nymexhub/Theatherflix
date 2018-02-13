// Project Theatherflix 
// any doubts go to README.md and Changelog.md


var express = require('express');

// creation of the app using express .
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up, on port 3000');
});