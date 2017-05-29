const express = require('express');
const hbs = require('hbs');


// intilization of express.js
var app = express();

// we declare partials
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
// we render the html page in the public directory
app.use(express.static(__dirname + '/public'));

// display the current year
hbs.registerHelper('getCurrentYear', () => {
      return new Date().getFullYear();
});

// sdhflsjdfh sdfh lsfhs
hbs.registerHelper('screamIt', (text)  => {
  return text.toUpperCase();
});


app.get('/', (req, res) => {

    res.render('home.hbs', {
      pageTitle: 'Theatherflix',
      welcomeMessage: 'Welcome to a new era, where netflix is only online, but Theatherflix will be locally in your Computer or Server.',

    });
});


// 


app.get('/', (req, res) => {

    res.render('home.hbs', {
      pageTitle: 'Theatherflix',
      welcomeMessage: 'Welcome to a new era, where netflix is only online, but Theatherflix will be locally in your Computer or Server.',

    });
});

// hsdfglksjgh lsgh lsjg hlsdghl dsjfkhgl kghs



// list of the movies that perhaps we could extract from a MongoDB.
// List of movies
// slepeers

app.get('/sleepers', (req, res) => {
   res.render('sleepers.hbs', {
      pageTitle: 'You are watching: Sleepers - 1996'


   });
});

///jobs

app.get('/jobs', (req, res) => {
   res.render('jobs.hbs', {
      pageTitle: 'You are watching: Jobs (2013)'

   });
});

// borealis
app.get('/borealis', (req, res) => {
    res.render('borealis.hbs', {
      pageTitle: 'You are watching: Borealis'
    });
});


// claire in motion ----
app.get('/claireinmotion', (req, res) => {
   res.render('claireinmotion.hbs', {
      pageTitle: 'You are watching: Claire in Motion (2016)'


   });
});


// ------------------------


app.get('/about', (req, res) => {
  // res.send('About page');
  res.render('about.hbs', {
    pageTitle: 'About Page',

  });

});


app.get('/listings', (req, res) => {
   res.render('listings.hbs', {
      pageTitle: 'Movies page - Listing:'


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
