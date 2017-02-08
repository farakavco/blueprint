Blueprint Sass Lint
================
 * [sass-lint project](https://github.com/sasstools/sass-lint)
 * [sass-lint grunt contrib](https://github.com/sasstools/grunt-sass-lint)
 * [standard sass-lint config file](https://github.com/farakavco/blueprint/sass-lint/.sass.lint.yaml)

This command in every project must run sass-lint on project sass file
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
"scripts": {
    "grunt-sass-lint": "*"
}
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
