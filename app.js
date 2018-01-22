


// ------------------------------------------------------------------------
// Powerered by Felipe Gonzalez Lopez
// Theatherflix v2.x
//  Software Engineer / Developer - Stgo. Chile.
// ------------------------------------------------------------------------
// 2017 (CC) -- All by Felipe alfonso gonzalez felipe.dev.engr.js@gmail.com
// ------------------------------------------------------------------------


// const path = require('server.js');


module.exports = function(grunt) {
	grunt.initConfig({	
		pkg: grunt.file.readJSON('package.json'),

		bgShell: {
			runNode: {
				cmd: 'node app.js',
				bg: true
			}
		},

		stylus: {
			compile: {
				options: {
					paths: [moviePath],
					'include css': true
				},
				files: {
					'public/movies-db': moviePath + '/*.mp4' 
				}
			}
		},

		watch: {
			stylesheets: {
				files: [stylesheetsDir + '/**/*.styl', stylesheetsDir + '/**/*.css'],
				tasks: ['stylus'],
				options: {
					interrupt: true
				}
			}
		}
	})
}; // missing line

// loading the server.js 
require('./server.js');

// intention of executing the Gruntfile inside the app. -- Just testing. 
// require('Gruntfile.js'); 
// the app crashed. 

// eventually problems executing the file . ??? 
