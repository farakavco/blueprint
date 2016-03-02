# Blueprint HTML

Table Of Content 
* [General principles](#user-content-general-principles)
* [Naming Convention](#user-content-naming-convention)

###General principles
* Read [idiomatic-html](https://github.com/farakavco/idiomatic-html) Before start writing html file
* Use Correct Document Type
* Avoid Long Code Lines
* Do not add blank lines without a reason
* For readability, add blank lines to separate large or logical code blocks
* Do not omitting the 'html' and 'body' tags
* Avoid using inliine style
* Avoid using "style,link,script" tag, Except for refrence to external resource
* Avoid using deprecated tag and attribute like: 'color' 'font' 'blink' 'marquee'
* Close All HTML Elements
* Put all css in head top of page
* Put all javascript end of body

###Naming Convention 
* Use Lower Case Element Names
* Use Lower Case Attribute Names
* Quote Attribute Values

An example good html

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
