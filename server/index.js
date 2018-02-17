// Project Theatherflix 
// any doubts go to README.md and Changelog.md


const express = require('express');

// creation of the app using express .
const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.static('public'));

app.listen(app.get('port'), function () {
  console.log(`Express server is up, on port ${app.get('port')}`);
});