module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          includePaths: ['static/sass/'],
          outputStyle: 'expanded'
        },
        files: {
          'static/css/styles.css': 'static/sass/styles.scss'
        }
      }
    },

    watch: {
      sass: {
        files: [
          'static/sass/**/*.scss'
        ],
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', 'watch')
};
