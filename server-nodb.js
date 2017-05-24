const express = require('express');
const hbs = require('hbs');

// intilization of express.js
var app = express();

// we declare partials
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');



// **************************
// I will try to configure an app with a database here with neDB
//***************************





// we have configurated all related to express.js
// *************************
// end of the trying of implementing something in NEDB
// *************************

// we render the html page in the public directory
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {

    res.render('home.hbs', {
      pageTitle: 'Home page',
      welcomeMessage: 'Welcome To my website',
      currentYear: new Date().getFullYear(),


    });
});



app.get('/about', (req, res) => {
  // res.send('About page');
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });

});


app.get('/Apps', (req, res) => {
   res.render('apps.hbs', {
      pageTitle: 'Apps page - All about',
      Assignedtext: '<h1>Welcome to the App page where we talk about all this</h1>',
      // I get the full year data
      currentYear: new Date().getFullYear()

   });
});


// /bad - json error message

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });

});



app.listen(3000, () => {
  console.log('Server is up in port 3000');
});
