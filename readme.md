q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:  To create a webpage we use HTML for structure, CSS for styling and Javascript to make the page interactive, JavaScript uses the DOM (Document Object Model )to find and manipulate elements inside HTML ,There are different methods to find elements in the DOM ,
A. getElementByID() : find an element using its unique ID ,a page can have only one element with a specific ID number .
B. getElementsByClassName() : returns a list of all elements with the same class 
C: querySelector() :Finds and elements using selector but returns only the first matching element
D: querySelectorAll() : finds elements using CSS selector and returns all matching elements as a list

q-2:How do you create and insert a new element into the DOM?
ans: With Javascript you cannot only modify existing elements but also create new ones using document createElement() to create a new element, then use inner text or inner-HTML to add text inside it. finally insert the new element into a parent element using appendChild() or append().

q-3: What is Event Bubbling and how does it work?
ans: An event is an action ,like a mouse click or keyboard press ,in Javascript events usually start from the children event and propagate up to its parent, Grandparent and so on .Just like if a button IS inside a division, Clicking the button will first trigger the buttons listener,  then the div listener,this upward position from child to parents is called event bubbling

q-4: What is Event Delegation in JavaScript? Why is it useful?
ans: Even delegation is a technique where instead of adding separate event listeners to each child element ,we add on listener to the front element when an event bubbles up from a child, we can detect which child triggered it using event target .no need to attach separate listeners to manage child elements, better performance and works even from dynamically added child elements

q-5: What is the difference between preventDefault() and stopPropagation() methods?
ans: PreventDefault() quiz prevents the elements default behavior,, For example a form normally reloads the page on submit but preventDefault() can stop that
StopPropagation() stopS the event from bubbling up example is even if a child element triggers an event it won't propagate to the parent. 






