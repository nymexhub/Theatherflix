const express = require('express');
const hbs = require('hbs');

// intilization of express.js
var app = express();

// we declare partials
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');



// **************************
// I will try to configure this with mongoDB --- Just testing... -- it's not working properly
// playing around .-.-.
// trying this in a starbucks coffe shop ... :) 
//***************************


var Schema = new Schema({
   // propiedad nombre
   name : Strin, // tipo de dato de cadena de caracteres
   // propiedad fecha de nacimiento
    birthplace: Date, // tipo de dato de fecha
    isAdmin : Boolean // tipo de dato buleano

    ])

    // metodo para calcular la edad a partir de la fecha nacimiento
    UserSchema.methods.age = function() {
      return ¨¨ ((Date.now() - this.birthplace) / (31557600000)),
    }
    return mongoose.model('User', UserSchema);
    var = UserSchemaFinal;

}



// ******
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
