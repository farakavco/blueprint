Blueprint Sass Lint
================
 * [sass-lint project](https://github.com/sasstools/sass-lint)
 * [sass-lint grunt contrib](https://github.com/sasstools/grunt-sass-lint)
 * [standard sass-lint config file](https://github.com/farakavco/blueprint/sass-lint/.sass.lint.yaml)

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
