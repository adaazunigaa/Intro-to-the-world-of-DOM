# Intro to the world of DOM
-Introducing the DOM
    *D ->   DOCUMENT
    *O ->   OBJECT
    *M ->   MODEL
    *DOM: 
        -JavaScript representation of a webpage
        -It's a JS window into the contents of a webpage
        -It;s just a bunch of objectts that can be interacted with via JS
-The Document Object
    *The document object is our entry point into the world of the DOM. It contains represenrtations of all the contant on a page, puls tons of useful methods and properties.
    *Created automatically by the browser when we load a new page based on the content of the page
-ClassList
-Traversing Parent/Child/Sibiling
-Append and AppendChild
-removeChild and remove



## SELECTING   methods 
-getElementById
-getElementsByTagName
-getElementsByClassName

-querySelector 
    *New , all-in-one method to select a single element
        -Returns the first element 
-querySelector 
    *Same idea, but returns a collection of matching elements
        -Showed in an array-like format

## ...Properties and Methods
-inner.Text
    *Sensitive to what gets to be shown at a certain moment
-textContent
    *Returns everything
-innerHTML
    *Like textContect, but it also disoplays all the markup (element tags)
    *The only way to add more elements inside another element 
-ATRIBUTES 
    *id 
        -get/set the id;
    *src
        -get/set the src;
    *getAttribute()

-classList
    *Easy way to get the current classes on an element and to manipulate them (add, remove, toggle)

-Append and AppendChil
    *To create and add elements to the HTML from the js doc
-insertAdjacentElement

-remove 
-removeChild
    *Removes a child from an element