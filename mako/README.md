Blueprint Mako
=============

##General principles

* Read [mako-documentation](http://docs.makotemplates.org/en/latest/syntax.html) Before start writing mako file
* Add blank lines before and after of block scopes such as if, for, def, ...
* Do not add blank lines without a reason
* Add comment for html tags 


##Coding Style

* Define a function:
```mako
    For example on test.mak file:
    
    <%def name="main_items(item, additional_class='')">
        <div class="${additional_class}">
            <h3 class="userName">${item.channel.title}</h3>
        </div>
    </%def>
```

* Call a function:
```mako
    <%namespace name="test" file="test.mak"/>
    . 
    . 
    .
    <%test:main_items item="${python_object}" additional_class="string-value" />
```

* Scopes:
```mako
    %if items:
    
        %for item in items:
            <%test:main_items item="${item}" additional_class="string-value" />
        %endfor
        
    %endif
```

* Comments:
```mako
    <!-- featured item row -->
    <div class="featured">
        <p>${featured.title}</p>
    </div>
```
