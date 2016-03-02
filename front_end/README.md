# blueprint front_end

Farakavco front_end development convention and spacification
 
#### Css Naming Convention

This approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using proper naming will prepare you for the changes in design of the website.
 
 * Avoid Using Element Selector
 * Using `-` (single dash) for separate worlds
 * Avoid Using ID selector
 * Using lowercase world
 * Avoid Using Abbr

#####Description : The concept of what I call Structured Components has proven to be a good one in all of the above named conventions. Structured components consist of the following elements:

  * **Components**: A page module that has a certain purpose and is a wrapper for it’s children, in example a modal or a slider can be a component.
  
  * **Nested Elements**: Parts of which a component can consist, sometimes similar across components.
  
  * **Modifier**: The state or variant of a component or nested element is modified by user interaction, for example a disabled button.
