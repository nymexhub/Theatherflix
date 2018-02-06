module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    options: {
      namespace: 'MyApp.Templates'
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.loadNpmTasks('grunt-contrib-handlebars');
 
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-bg-shell');
  

  grunt.loadNpmTasks('grunt-contrib-compass');
  
      grunt.registerTask('default', 'compass');
};