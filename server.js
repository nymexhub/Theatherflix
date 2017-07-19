// trying to implement something using variables instead of const

var express = require('express');
var hbs = require('hbs');


//
// const express = require('express');
// const hbs = require('hbs');


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



app.get('/listings', (req, res) => {
  res.render('listings.hbs', {
    pageTitle: 'Movies page - Listings:',
  });
});

// app.getElementsByClassName('listings').pageTitle


app.get('/', (req, res) => {

    res.render('home.hbs', {
      pageTitle: 'Theatherflix',
      welcomeMessage: 'Welcome to a new era, where netflix is only online, but Theatherflix will be locally in your computer or Server.',


});



});


//


// list of the movies that perhaps we could extract from a MongoDB.
// List of movies
// slepeers


//silence movie
app.get('/silence', (req, res) => {
   res.render('silence.hbs', {
      pageTitle: 'You are watching: Silence'


   });
});


//
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

//wofw2005
app.get('/wofw2005', (req, res) => {
   res.render('wofw2005.hbs', {
      pageTitle: 'You are watching: Word of Worlds (2005)'


   });


// I'm trying to read the fils from the directoruy owhere the movies are


// end of tryng to implement something to read the files from the directory where the movies are


});

// loopers
app.get('/looper', (req, res) => {
   res.render('looper.hbs', {
      pageTitle: 'You are watching: Looper (2012)'

   });
});

// ------------------------


app.get('/about', (req, res) => {
  // res.send('About page');
  res.render('about.hbs', {
    pageTitle: 'About Page',

  });

});



// bad json error message
app.get('bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});


// calling the port 3000 to run the app
//
app.listen(3000, () => {
  console.log('Server is up in port 3000');
});
