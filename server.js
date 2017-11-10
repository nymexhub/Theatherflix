

// -----------------------------------------------------------------------
// Powerered by Felipe Gonzalez Lopez
//  Software Developer - Stgo. Chile.
// -----------------------------------------------------------------------
// 2017 (CC) -- All by Felipe alfonso gonzalez f.alfonso,go@gmail.com 
// -----------------------------------------------------------------------




var express = require('express');

var hbs = require('hbs');

const path = require('path');

var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use(express.static(__dirname+ '/public'));



hbs.registerHelper('getCurrentYear'), () => {
    return new Date().getFullYear();
}


hbs.registerHelper('screamIt', (text) => {
   return text.toUpperCase();
});



app.get('/listings', (req, res) => {
  res.render('listings.hbs', {
    pageTitle: 'movie page - listings:',
  });
});

app.get('/', (req, res) => {
  res.render('listings.hbs', {
    pageTitle: 'movie page - listings:',
  });
});




app.get('/interestelar', (req, res) => {
  res.render('interestelar', {
    pageTitle: 'you are watching now : interestelar'
  });
});


app.get('/silence', (req, res) => {
  res.render('silence', {
    pageTitle: 'You are watching : silence'
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


// claire in motion
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
