# Blueprint HTML

Table Of Content 
* [General principles](#user-content-general-principles)
* [Naming Convention](#user-content-naming-convention)

###General principles
* Read [idiomatic-html](https://github.com/farakavco/idiomatic-html) Before start writing html file.
* Use Correct Document Type (`DOCTYPE`).
* Avoid Long Code Lines and Keep line-length to a sensible maximum, e.g., 80 columns.
* Do not add blank lines without a reason. *To increase readability*, add blank lines and separate *large* or *logical* code blocks.

* Do not omit the 'html' and 'body' tags.
* Avoid using inline styles.
* Avoid using "style,link,script" tag, Except for refrence to external resource.
* Avoid using deprecated tags and attributes like: 'color', 'font', 'blink', 'marquee', etc.
* Close All HTML Elements. By another means: Write `XHTML` like.
* Put all `CSS`s (`<link>` tag) in head top of page.
* Put all `Javascript`s (`<script>` tag) end of body.

###Naming Conventions
* Use Lower Case Element Names
* Use Lower Case Attribute Names
* Quote Attribute Values

An example of good html

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document</title>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
        <article class="post" id="1234">
            <time class="timestamp">March 15, 2012</time>
            <a data-id="1234"
             data-analytics-category="[value]"
             data-analytics-action="[value]"
             href="[url]">[text]</a>
            <ul>
                <li>
                    <a href="[url]">[text]</a>
                    <img src="[url]" alt="[text]">
                </li>
                <li>
                    <a href="[url]">[text]</a>
                </li>
            </ul>

            <a class="link-complex" href="[url]">
                <span>[text]</span>
                [text]
            </a>

            <input value="text" readonly>
        </article>
        <script src="main.js"></script>
    </body>
</html>
```
