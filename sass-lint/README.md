Blueprint Sass Lint
================
 * [sass-lint project](https://github.com/sasstools/sass-lint)
 * [sass-lint grunt contrib](https://github.com/sasstools/grunt-sass-lint)
 * [standard sass-lint config file](https://github.com/farakavco/blueprint/sass-lint/.sass.lint.yaml)

This command must run sass-lint in every front-end project.
```Bash
npm run lint
```

package.json scripts must have line like this:
```Json
"scripts": {
    "lint": "grunt --lint --watch"
}
```

package.json devDependencies must have line like this:
```Json
"devDependencies": {
    "grunt-sass-lint": "*"
}
```

Gruntfile.js sample task:
```JAVASCRIPT
var path = require('path');

module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'dist/css/style.css': 'sass/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            sassLint: {
                files: 'sass/*.scss',
                tasks: ['sasslint'],
                livereload: true
            }
        },
        sasslint: {
            target: ['sass/*.scss', 'sass/**/*.scss']
        },
        clean: ['dist']
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass-lint');
    if (grunt.option('lint')) {
        grunt.registerTask('default', ['sasslint','watch:sassLint']);
    }
};
```

#### Farakavco sass-lint standard config file
```Yaml
# Linter Options
options:
rules:
  no-important: 0
  indentation:
    - 4
    -
      size: 4
  class-name-format:
    allow-leading-underscore: true
  property-sort-order: 0
  nesting-depth:
    - 1
    - max-depth: 4
```
