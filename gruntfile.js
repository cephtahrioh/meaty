module.exports = function (grunt) {
   // Project configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      ts: {
        build: {
          src: ["**/*.ts", "!node_modules/**/*.ts"],
          // Avoid compiling TypeScript files in node_modules
          options: {
            //module: 'commonjs',
            fast: 'never'
          },
          outDir: 'build'
        }
      },
      tslint: {
        options: {
            configuration: grunt.file.readJSON("tslint.json")
        },
        all: {
            src: ["**/*.ts", "!node_modules/**/*.ts", "!obj/**/*.ts", "!typings/**/*.ts"] 
            // avoid linting typings files and node_modules files
        }
      },
      watch: {
        scripts: {
          files: ["**/*.ts", "!node_modules/**/*.ts"],
          tasks: ["newer:tslint:all", "ts:build"], // the task to run
          options: {
            spawn: false // makes the watch task faster
          }
        }
      },
      nodemon: {
        dev: {
          script: 'build/server.js'
        },
        options: {
          ignore: ['node_modules/**', 'Gruntfile.js'],
          env: {
            PORT: '8181'
          }
        }
      },
      concurrent: {
        watchers: {
          tasks: ['nodemon', 'watch'],
          options: {
            logConcurrentOutput: true
          }
        }
      }
   });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-newer");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent");
  // Default tasks.
  grunt.registerTask('default', ["ts:build"])
  grunt.registerTask("serve", ["concurrent:watchers"]);
};