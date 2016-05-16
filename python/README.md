Blueprint Python 
================


The Zen of Python, by Tim Peters
--------------------------------

- Beautiful is better than ugly.
- Explicit is better than implicit.
- Simple is better than complex.
- Complex is better than complicated.
- Flat is better than nested.
- Sparse is better than dense.
- Readability counts.
- Special cases aren't special enough to break the rules.
- Although practicality beats purity.
- Errors should never pass silently.
- Unless explicitly silenced.
- In the face of ambiguity, refuse the temptation to guess.
- There should be one-- and preferably only one --obvious way to do it.
- Although that way may not be obvious at first unless you're Dutch.
- Now is better than never.
- Although never is often better than *right* now.
- If the implementation is hard to explain, it's a bad idea.
- If the implementation is easy to explain, it may be a good idea.
- Namespaces are one honking great idea -- let's do more of those!


Coding Style
------------

* All statements in modules'd root block should be separated by two 
blank lines, and all statements in class definition block sould be 
separated by single blank line:


        import sys
        import os
        import traceback
        // first blank line
        // second blank line
        def my_function():
            pass
        // first blank line
        // second blank line
        class MyVeryOwnClass(object):
            name = None
            // single blank line
            def my_method():
                pass


* For more information, refer to [PEP8](https://www.python.org/dev/peps/pep-0008/)



Naming Convention
-----------------

* All variables should be defined in `lower_case`, words separated by 
underscore
  
        is_Active = True
        fill_name = 'My Name'
    
* All types should be defined in `PascalCase`


        class MyClass(object):
            name = None
            // Single line space
            def my_method():
                pass
            
*In case of recieving two values but you need one of them
to avoid confict with gettest import and buildin methods in class we use (___)
 result, ___ = method()
