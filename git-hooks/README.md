Blueprint Sass Lint
================
 * [git hooks](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks)
 * [pre-git package](https://www.npmjs.com/package/pre-git)

`package.json` devDependencies must have a line like this:
```json
"devDependencies": {
    "pre-git": "*"
}
```
This allows us to define some scripts to run before/after commit, push, merge, and other git commands.
Currently, our config for `pre-git` is like this:
```json
"config": {
    "pre-git": {
      "allow-untracked-files": true,
      "commit-msg": "conventional",
      "post-merge": [
        "git status"
      ],
      "pre-commit": [
        "npm run lint --silent",
        "git status"
      ],
      "post-commit": [
        "git status"
      ],
      "pre-push": [
        "npm run lint --silent"
      ]
    }
  }
```
Which should be added in `package.json` file. The line
```json
"commit-msg": "conventional"
```
in the above config indicates that commit messages should follow the conventional commit message rules. Check
[Git Commit Guidelines](https://github.com/angular/material/blob/master/.github/CONTRIBUTING.md#-git-commit-guidelines)
for more info.

In order to make committing simpler, add
```json
"scripts": {
    "commit": "commit-wizard"
}
```
in `package.json`. Now we can run
```bash
npm run commit
```
to commit through an interactive wizard!
