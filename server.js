// Project Theatherflix 
// any doubts go to README.md and Changelog.md




// Thatherflix is an Open Source Project
// Founded by Felipe Alfonso Gonzalez - Soft. Engr. - f.alfonso@res-ear.ch
// C2018 - Present

var express = require('express');

//Create app


var app = express();
const PORT = process.env.PORT || 3030;



app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express server is up on port ' + PORT);
});

