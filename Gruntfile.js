module.exports = function(grunt) {

  _ = grunt.util._
  path = require('path')

  baseDirectory = '.'

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    haml: {
      options: {
        language: 'coffee',
        placement: 'amd',
        uglify: true
      },
      compile: {
        files: [
          {
            expand: true,
            filter: 'isFile',
            cwd: "" + baseDirectory + "/src/templates",
            dest: "" + baseDirectory + "/temp/templates",
            src: '**/*.haml',
            ext: '.html'
          }
        ],
        options: {
          target: 'html'
        }
      },
      index: {
        dest: "" + baseDirectory + "/temp/index.html",
        src: "" + baseDirectory + "/src/index.haml"
      }
    },
    sass: {
      compile: {
        dest: "" + baseDirectory + "/temp/styles/main.css",
        src: "" + baseDirectory + "/src/styles/main.scss",
        options: {
          loadPath: path.join(path.resolve('.'), baseDirectory, 'temp')
        }
      }
    },
    symlink: {
      images: {
        src: 'src/images',
        dest: 'temp/images'
      },
      scripts: {
        src: 'src/scripts',
        dest: 'temp/scripts'
      },
      jquery: {
        src: "bower_components/",
        dest: "temp/vendor/"
      }
    },
    watch: {
      haml: {
        files: 'src/templates/**/*.haml',
        tasks: 'haml:compile',
        options: {
          interrupt: true
        }
      },
      compass: {
        files: 'src/styles/**/*.scss',
        tasks: 'sass:compile',
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-symlink');

  grunt.registerTask(
    'default',
    [
      'symlink:images',
      'symlink:scripts',
      'symlink:jquery',
      'haml',
      'sass',
      'watch'
    ]
  );

  grunt.registerTask('scss', ['sass']);

};