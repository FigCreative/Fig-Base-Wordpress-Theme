module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                title: "Your Project Name" 
            }
        },
   
        concat: {
            options: {
                separator: '\r\n'
            },
            dist: {
                src: ['bower_components/modernizr/modernizr.js', 'bower_components/jquery/dist/jquery.js', 'bower_components/foundation/js/foundation.js', 'js/*.js'],
                dest: 'templates/js/scripts.js'
            }
        },

      
        uglify: {
            dist: {
                files: {
                        'wordpress/wp-content/themes/yourprojectname/library/js/scripts.min.js': 'templates/js/scripts.js'
            }
        }
        },
       
        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'css/app-unprefixed.css': 'scss/style.scss',
                }        
            },
            ie: {
               options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'wordpress/wp-content/themes/yourprojectname/library/css/ie.min.css': 'scss/ie.scss',
                } 
            }
        },
        
        autoprefixer: {
            options: {
                browsers: ["last 2 versions", "> 1%", "ie 8", "ie 7"]
            },
            templates: {
                src: 'css/app-unprefixed.css',
                dest: 'templates/css/app.css'
            },
        },
        
        cssmin: {
            minify: {
                expand: true,
                cwd: 'templates/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'wordpress/wp-content/themes/yourprojectname/library/css/',
                ext: '.min.css'
            },
        },
        
        sync: {
            main: {
                files: [{
                    cwd: 'templates/img',
                    src: '**',
                    dest: 'wordpress/wp-content/themes/yourprojectname/library/images/',
                }]
            }
        },
        
        notify: {
            app_change: {
                options: {
                    title: 'Javascript',  
                    message: 'Concatenatated and minifed successfully',
                }
            },
            css_complete: {
                options: {
                    title: 'SASS -> CSS',  
                    message: 'Compiled, prefixed, and moved successfully', 
                }
            },
        },
        
        watch: {
            grunt: { 
                files: ['gruntfile.js'],
                tasks: ['default'], 
            },
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass_change']
            },
            css: {
                files: ['wordpress/wp-content/themes/yourprojectname/*.css', 'css/*.css'],
                tasks: ['notify:css_complete', 'css_prefixed', 'css_min']
            },
        },

        webp: {
            files: {
                expand: true,
                cwd: 'img',
                src: ['*.png', '*.jpg', '*.gif'],
                dest: 'templates/img'
            },
            options: {
                binpath: require('webp-bin').path,
            }
        },

        imagemin: {                         
            dynamic: {   
            options: {                      
            optimizationLevel: 7
        },      
                         
                files: [{
                    expand: true,                  
                    cwd: 'img',                  
                    src: ['*.{png,jpg,gif}'],   
                    dest: 'templates/img'                  
                        }]
            }
        },

        exec: {
          get_grunt_sitemap: {
            command: 'curl --silent --output sitemap.json http://www.yourprojectname.co.uk/?show_sitemap'
          }
        },
    
        uncss: {
          dist: {
            options: {
              ignore       : [/expanded/,/js/,/wp-/,/align/,/admin-bar/,'.swing','.fixedmenu','.backTop','.fixedCookie'],
              stylesheets  : ['../css/app.css'],
              ignoreSheets : [/fonts.googleapis/],
              urls         : [], 
            },
            files: {
              'templates/css/app-clean.css': ['**/*.php']
            }
          }
        }
    });

    //- REGISTER ALL OUR GRUNT TASKS
    grunt.task.run('notify_hooks');

    // Pre Production
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin', 'webp', 'sync', 'watch']);

    // Production Run
    grunt.registerTask('launch', ['sass', 'autoprefixer', 'exec:get_grunt_sitemap','load_sitemap_json','uncss:dist', 'cssmin', 'concat', 'uglify', 'imagemin', 'webp', 'sync']);

    // Run Just CSS Production
    grunt.registerTask('cssfix', ['sass', 'autoprefixer', 'exec:get_grunt_sitemap','load_sitemap_json','uncss:dist', 'cssmin', 'concat']);

    // Run just JS production
    grunt.registerTask('jsrun', ['concat', 'sync', 'uglify']);

    grunt.registerTask('app_change', ['concat:app', 'uglify:app', 'uglify:main', 'uglify:yourprojectname']);
    grunt.registerTask('concat_change', ['uglify:app', 'uglify:main']);
    grunt.registerTask('sass_change', ['sass']);
    grunt.registerTask('watchme', ['watch']);
    grunt.registerTask('css_prefixed', ['autoprefixer']);
    grunt.registerTask('css_min', ['cssmin']);
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-webp');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.registerTask('sync_files', ['sync'])
    grunt.loadNpmTasks('grunt-exec');

    // Load Sitemap
    grunt.registerTask('load_sitemap_json', function() {
        var sitemap_urls = grunt.file.readJSON('./sitemap.json');
        grunt.config.set('uncss.dist.options.urls', sitemap_urls);
    });
};
