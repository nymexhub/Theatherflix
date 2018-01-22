var application_root = __dirname,
    express = require("express"),
    path = require("path");

    // This is when i tried to use neDB -- Didn't finish
var databseURL = "/home/felipe/nedb/user.db";
var Datastore = require('nedb');
db = ();
db.users = new Datastore({filename: databseUrl, autoload: true});

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.router);
    app.use(express.static(path.join(application_root, "public")));
    app.use(express.errorHandler({ dumpExceptioins: true, showStack: true}));

});
