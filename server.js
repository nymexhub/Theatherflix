// Thatherflix is an Open Source Project
// any doubts go to README.md and Changelog.md


// var config = require('./webpack.config.js')
// if (!process.env.NODE_ENV) {
// process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
// process.noDeprecation = true
// }




const express = require('express');

// creation of the app using express .
const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.static('public'));

app.listen(app.get('port'), function () {
  console.log(`Server is up, on port ${app.get('port')}`);
});