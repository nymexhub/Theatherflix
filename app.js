

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
};


require('./server.js');