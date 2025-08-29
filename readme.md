📌Question no 1:  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
✅Answer: getElementById can be used to access a single element, getElementById works the fastest. getElementsByClassName can be used to find many elements of the same class. Through this, all the elements according to the class are available in the form of live HTMLCollection, through querySelector, the first element according to the CSS selector can be accessed. Through querySelectorAll, all the elements according to the CSS selector are available in the form of NodeList.


📌Question no 2: How do you create and insert a new element into the DOM?
✅Answer: First, we need to create a new element using document.createElement. Then, we need to insert it into the DOM using appendChild or insertBefore.



📌Question no 3: What is Event Bubbling and how does it work?
✅Answer: Event Bubbling is an event that propagates step by step from the first child element to the parent element. Simply put, Event Bubbling is a process where the event first occurs in the innermost (child) element and then propagates up the document to the parent and then the grandparent.


📌Question no 4: What is Event Delegation in JavaScript? Why is it useful?
✅Answer: Event Delegation is the process of placing an event listener on the parent element and handling events on the child element. It saves memory and works on dynamic elements.


📌Question no 5: What is the difference between preventDefault() and stopPropagation() methods?
✅Answer: preventDefault() disables the default behavior of the event (stops the event's default behavior), and stopPropagation() stops the event from propagating to parent elements (prevents the event from bouncing to other elements).