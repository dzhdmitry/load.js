module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
	  options: {
        banner: "/* Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>. MIT Licensed */\n"
      },
      dist: {
        src: 'load.js',
        dest: 'load-min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};