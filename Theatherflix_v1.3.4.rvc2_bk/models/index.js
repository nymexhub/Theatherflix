if (!global.hasOwnProperty(db)) {

  var mongoose = require('mongoose');
  var dbName = 'expressTest'

      // the app is executed on the local machine
      mongoose.connect('mongodb:///localhost/' + dbName);


      global.db = {
        mongoose: mongoose,

        // models
        User :     require('./User')(mongoose),
        // agregar mas modelos aqui en caso de hacerlos

      }
    }

    module.exports = global.db;
