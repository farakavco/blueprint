# blueprint front_end

Farakavco front_end development convention and spacification

> There are only two hard problems in Computer Science: cache invalidation and naming things — Phil Karlton
 
#### Css Naming Convention

This approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using proper naming will prepare you for the changes in design of the website.
 
 * Read [idiomatic-css](https://github.com/farakavco/idiomatic-css#whitespace) Before start writing css file
 * Using `-` (single dash) for separate worlds
 * Using `--` for separate component name and nested element name
 * Using lowercase world
 * Avoid using "*" selector
 * Avoid Using Element Selector
 * Avoid Using ID selector
 * Avoid Using Abbr

#####Description : 
 The concept of what I call Structured Components has proven to be a good one in all of the above named conventions. Structured components consist of the following elements:

  * **Components**: A page module that has a certain purpose and is a wrapper for it’s children, in example a modal or a slider can be a component.
  
  * **Nested Elements**: Parts of which a component can consist, sometimes similar across components.
  
  * **Modifier**: The state or variant of a component or nested element is modified by user interaction, for example a disabled button.
 
#####Selector Rules :

Select Component
- .(component-name)

Select Component With Modifier
- .(component-name).(modifier-name)

Select Nested Element of Component
- .(component-name).(modifier-name) .(component-name)--(nested-element-name).(modifier-name)

#####Dom Sample :

```sh
<div class="component-name big open" >
     <div class="component-name--nested-element" ></div>
 </div>
```
#####Selector Sample :
```sh
.message{} /* component  */
.message.big{} /* component with modifier  */
.message .message--title{} /* nested element of component */
```
 




  
