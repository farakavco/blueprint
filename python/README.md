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
```python
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
```

* For more information, refer to [PEP8](https://www.python.org/dev/peps/pep-0008/)



Naming Convention
-----------------

* All variables should be defined in `lower_case`, words separated by
underscore
```python
is_Active = True
fill_name = 'My Name'
```

* All types should be defined in `PascalCase`
```python
class MyClass(object):
    name = None
    // Single line space
    def my_method():
        pass
```

* In case of recieving two values but you need one of them
to avoid confict with gettest import and buildin methods in class we use (___)
```python
result, ___ = method()
```

* importing modules in python, refer to [PEP8](https://www.python.org/dev/peps/pep-0008/#imports):
imports should usually be on separate lines, e.g.:

	Yes:
```python
import os
import sys
```
No:
```python
import sys, os
```
    It's okay to say this though:
```python
from subprocess import Popen, PIPE
```
use ```import``` subsequently and group by one empty line:
1- builtin modules
2- third party:
    * 2.1 internal
    * 2.2 external

3- internal modules

Common Mistakes in Python
-------------------------

* ##### Indent Consistently:

    Avoid mixing tabs and spaces in the indentation of a given single block,
    unless you know what every system that touches your code may do with tabs.
    Otherwise, what you see in your editor may not be what Python sees when it counts tabs as a number of spaces.
    It's safer to use all tabs or all spaces for each block; how many is up to you.

* ##### Don't Code C in Python:
A few reminders for C/C++ programmers new to Python:
1- You don't need to type parentheses around tests in if and while headers (e.g., ```if (X==1):```). You can, if you like, since any expression can be enclosed in parentheses, but they are fully superfluous in this context.
2- Don't terminate all of your statements with a semicolon. It's technically legal to do this in Python, but is totally useless unless you're placing more than one statement on a single line (e.g., ```x=1; y=2; z=3```).
3- Don't embed assignment statements in while loop tests (e.g., ```while ((x=next() != NULL```)). In Python, statements cannot appear where expressions are expected, and an assignment is not an expression.

* ##### Use Simple for Loops Instead of while or range:

    When you need to step over all items in a sequence object from left to right, a simple for loop (e.g., `for x in seq:`) is simpler to code,
    and usually quicker to run, than a while- or range-based counter loop.
    Avoid the temptation to use range in a for unless you really have to;
    let Python handle the indexing for you. All three of the following loops work, but the first is usually better; in Python, simple is good.
```python
S = "lumberjack"
for i in range(len(S)): print S[i]    # too much
i = 0                                 # too much
while i < len(S): print S[i]; i += 1
for c in S: print c                   # simplest
```

* ##### Don't Expect Results From Functions That Change Objects:

    n-place change operations such as the list.append( ) and list.sort( ) methods modify an object,
    but do not return the object that was modified (they return None); call them without assigning the result.
    It's not uncommon for beginners to say something like:
```python
mylist = mylist.append(X)
```

	to try to get the result of an append; instead, this assigns mylist to None, rather than the modified list.
    A more devious example of this pops up when trying to step through dictionary items in sorted-key fashion:
```python
D = {...}
for k in D.keys().sort(): print D[k]
```

    This almost works -- the keys method builds a keys list, and the sort method orders it -- but since the sort method returns None,
    the loop fails because it is ultimately a loop over None (a nonsequence).
    To code this correctly, split the method calls out into statements:
```python
Ks = D.keys()
Ks.sort()
for k in Ks: print D[k]
```

* ##### expect something in try except block:

    if expect nothing in the block:

    Empty except clauses in try statements may catch more than you expect.
    An except clause in a try that names no exception catches every exception -- even things like genuine programming errors, and the sys.exit() call.

    Specifying parameters incorrectly for an exception block:
    Suppose you have the following code:
```python
try:
    l = ["a", "b"]
    int(l[2])
except ValueError, IndexError:  # To catch both exceptions, right?
    pass
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
IndexError: list index out of range
```

    The problem here is that the except statement does not take a list of exceptions specified in this manner.
    Rather, In Python 2.x, the syntax except Exception, e is used to bind the exception to the optional second parameter specified (in this case e),
    in order to make it available for further inspection.
    As a result, in the above code, the IndexError exception is not being caught by the except statement; rather, the exception instead ends up being bound to a parameter named IndexError.
    The proper way to catch multiple exceptions in an except statement is to specify the first parameter as a tuple containing all exceptions to be caught. Also, for maximum portability, use the as keyword, since that syntax is supported by both Python 2 and Python 3:
    ```python
    try:
        l = ["a", "b"]
        int(l[2])
    except (ValueError, IndexError) as e:
        pass

    ```

* ##### reload doesn't impact names copied with from:

    reload works much better with the import statement. If you use from statements, remember to rerun the from after the reload, or you'll still have old names.

* ##### The order of mixing matters in multiple inheritance:
	because superclasses are searched left to right, according to the order in the class header line, the leftmost class wins if the same name appears in multip

* ##### Scopes :

    Code in the global scope cannot use any local variables.
    However, a local scope can access global variables.
    Code in a function’s local scope cannot use variables in any other local scope.