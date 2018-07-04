// Project Theatherflix 
// any doubts go to README.md and Changelog.md




// Thatherflix is an Open Source Project
// Founded by Felipe Alfonso Gonzalez - Soft. Engr. - f.alfonso@res-ear.ch
// C2018 - Present

var express = require('express');

//Create app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express server is up on port ' + PORT);
});