#Example 1

##Front-end workflow

One of the best frameworks for using `SASS` is [Compass](http://compass-style.org/). And one of the best `task-runner`s I've ever used, is [GruntJS](http://gruntjs.com).

When you wanna develope `HTML` beside `CSS` and `Javascript`, I think one of the best blends you can experience and make yourself happy with is *Mixture of GruntJS and Compass*

In this example I've made a simple project and used grunt as `task-runner` and also used `.rb` file as **compass config**. To run it, you need to have the following dependencies on your os:

* [NodeJS](https://nodejs.org)
* [Ruby Gems](https://rubygems.org)
* [GruntJS](http://gruntjs.com)

### Benefits

The major benefit of using this mixture, is that grunt has a large community and has too-much many automation scripts. Three of these automation scripts are :

* Uglify: This makes `JS` and `CSS` files *minified*.
* Compass: Converts SASS to CSS.
* Watch: Updates the result in browser while editing code. ***WOW***

In addition to above benefit, we can appreciate GruntJS for having **watch**. Because gets us rid of just refreshing the page everytime something changed in the code.

### How to run

After installing these dependencies, open `terminal` and go to the `example` directory. There you have to just run the following command:

```
grunt 
```
After runnig this command,  you should see something like this:
```
Running "watch" task
Waiting...
```

It means that everything is fine. Now that you did these all, just open-up the project in your favorite IDE.

