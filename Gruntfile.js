module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['sass/modules/*.scss', 
                'sass/core/*.scss',
                'sass/settings/*.scss'],
        tasks: ['sass', 'concat'],
      },
    },
    autoprefixer: {
      options: {
        // Task-specific options go here. 
      },
      your_target: {
        // Target-specific file lists and/or options go here. 
      },
    },
    concat: {
      files: ['bower_components/handlebars/handlebars.js', 'bower_components/jquery/dist/jquery.js'], 
      tasks: ["concat"]
      },
    sass: {
      css: {
        options: {
          sourcemap: 'none',
        },
        files: {
          'application/css/main.css': 'sass/main.scss'
        },
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['bower_components/handlebars/handlebars.js', 'bower_components/jquery/dist/jquery.js'],
        dest: 'application/javascript/vendor/bundle.js'
      },
    },
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'sass/*.scss',
                        'application/css/*.css',
                        'application/*.html',
                        'application/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './application'
                }
            }
        }
  });

  

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['browserSync', 'watch']);
};


