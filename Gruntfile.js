module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        singleRun: true
      },
      
      continuous: {
        singleRun: true,
        autoWatch: true
      }
    }

    // Task configuration will be written here
  });

  // Loading of tasks and registering tasks will be written here
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-karma');


  // Default task(s).
  grunt.registerTask('default', ['karma']);
};
