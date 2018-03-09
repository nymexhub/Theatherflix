// Project Theatherflix 
// any doubts go to README.md and Changelog.md


// Thatherflix is an Open Source Project 
// Founded by Felipe Alfonso Gonzalez - Soft. Engr. - felipe.dev.engr.js@gmail.com 
// C2018 - Present

const express = require('express');

// creation of the app using express .
const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.static('public'));

app.listen(app.get('port'), function () {
  console.log(`Wow! now you can check it out on the web! the server is up, on port ${app.get('port')}`);
});