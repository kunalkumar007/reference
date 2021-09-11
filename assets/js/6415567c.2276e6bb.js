"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[6411],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var u=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,u)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,u,a=function(e,t){if(null==e)return{};var n,u,a={},i=Object.keys(e);for(u=0;u<i.length;u++)n=i[u],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(u=0;u<i.length;u++)n=i[u],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=u.createContext({}),s=function(e){var t=u.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=s(e.components);return u.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return u.createElement(u.Fragment,{},t)}},p=u.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,q=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?u.createElement(q,r(r({ref:t},h),{},{components:n})):u.createElement(q,r({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return u.createElement.apply(null,r)}return u.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return h},default:function(){return p}});var u=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],o={},l=void 0,s={unversionedId:"Python Course/Python Queue",id:"Python Course/Python Queue",isDocsHomePage:!1,title:"Python Queue",description:"029. Python Queue",source:"@site/docs/Python Course/029. Python Queue.md",sourceDirName:"Python Course",slug:"/Python Course/Python Queue",permalink:"/reference/docs/Python Course/Python Queue",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/029. Python Queue.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python yield",permalink:"/reference/docs/Python Course/Python yield"},next:{title:"Python Counter",permalink:"/reference/docs/Python Course/Python Counter"}},h=[{value:"How does Python Queue Work?",id:"how-does-python-queue-work",children:[]},{value:"Types of Queue in Python",id:"types-of-queue-in-python",children:[]},{value:"Python queue Installation",id:"python-queue-installation",children:[]},{value:"Methods available inside Queue and LifoQueue class",id:"methods-available-inside-queue-and-lifoqueue-class",children:[]},{value:"First In First Out Queue Example",id:"first-in-first-out-queue-example",children:[{value:"Add and item in a queue",id:"add-and-item-in-a-queue",children:[]}]},{value:"Remove an item from the queue",id:"remove-an-item-from-the-queue",children:[]},{value:"Last In First Out queue Example",id:"last-in-first-out-queue-example",children:[]},{value:"Add and item in a queue",id:"add-and-item-in-a-queue-1",children:[]},{value:"Remove an item from the queue",id:"remove-an-item-from-the-queue-1",children:[]},{value:"Add more than 1 item in a Queue",id:"add-more-than-1-item-in-a-queue",children:[]},{value:"Add and item in a FIFOqueue",id:"add-and-item-in-a-fifoqueue",children:[]},{value:"Remove an item from the FIFOqueue",id:"remove-an-item-from-the-fifoqueue",children:[]},{value:"Add and item in a LIFOqueue",id:"add-and-item-in-a-lifoqueue",children:[]},{value:"Sorting Queue",id:"sorting-queue",children:[]},{value:"Reversing Queue",id:"reversing-queue",children:[]},{value:"Summary:",id:"summary",children:[]}],m={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,u.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",{start:29},(0,i.kt)("li",{parentName:"ol"},"Python Queue")),(0,i.kt)("h1",{id:"what-is-python-queue"},"What is Python Queue?"),(0,i.kt)("p",null,'A queue is a container that holds data. The data that is entered first will be removed first, and hence a queue is also called "First in First Out" (FIFO). The queue has two ends front and rear. The items are entered from the rear and removed from the front side.'),(0,i.kt)("h2",{id:"how-does-python-queue-work"},"How does Python Queue Work?"),(0,i.kt)("p",null,"The queue can be easily compared with the real-world example the line of people waiting in a queue at the ticket counter, the person standing first will get the ticket first, followed by the next person and so on. The same logic goes for the queue data structure too."),(0,i.kt)("p",null,"Here is a diagrammatic representation of queue:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/020820_0702_PythonQueue1.png",alt:"image"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Rear")," represents the point where the items are inserted inside the queue. In this example, 7 is value for that."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Front")," represents the point where the items from the queue will be removed. If you remove an item from the queue, the first element you will get is 1, as shown in the figure."),(0,i.kt)("p",null,"Item 1 was the first one to be inserted in the queue, and while removing it is the first one to come out. Hence the queue is called FIRST IN FIRST OUT (FIFO)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/020820_0702_PythonQueue2.png",alt:"image"})),(0,i.kt)("p",null,"In a queue, the items are removed in order and cannot be removed from in between. You just cannot remove the item 5 randomly from the queue, to do that you will have to remove all the items before 5. The items in queue will be removed in the order they are inserted."),(0,i.kt)("h2",{id:"types-of-queue-in-python"},"Types of Queue in Python"),(0,i.kt)("p",null,"There are mainly two types of queue in Python:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First in First out Queue: For this, the element that goes first will be the first to come out.\nTo work with FIFO, you have to call Queue() class from queue module.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Last in First out Queue: Over here, the element that is entered last will be the first to come out.\nTo work with LIFO, you have to call LifoQueue() class from the queue module."))),(0,i.kt)("h2",{id:"python-queue-installation"},"Python queue Installation"),(0,i.kt)("p",null,"It is very easy to work with queue in python. Here are the steps to follow to make use of queue in your code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1)")," You just have to import the queue module, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\n")),(0,i.kt)("p",null,"The module is available by default with python, and you don't need any additional installation to start working with the queue. There are 2 types of queue FIFO (first in first out) and LIFO (last in first out)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2)")," To work with FIFO queue , call the Queue class using the queue module imported as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\nq1 = queue.Queue()\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3)")," To work with LIFO queue call the LifoQueue() class as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\nq1 = queue.LifoQueue()\n")),(0,i.kt)("h2",{id:"methods-available-inside-queue-and-lifoqueue-class"},"Methods available inside Queue and LifoQueue class"),(0,i.kt)("p",null,"Following are the important methods available inside Queue and LifoQueue class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"put(item)"),": This will put the item inside the queue."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"get():")," This will return you an item from the queue."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"empty():")," It will return true if the queue is empty and false if items are present."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"qsize():")," returns the size of the queue."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"full():")," returns true if the queue is full, otherwise false.")),(0,i.kt)("h2",{id:"first-in-first-out-queue-example"},"First In First Out Queue Example"),(0,i.kt)("p",null,"In the case of first in first out, the element that goes first will be the first to come out."),(0,i.kt)("h3",{id:"add-and-item-in-a-queue"},"Add and item in a queue"),(0,i.kt)("p",null,"Let us work on an example to add an item in a queue. To start working with the queue, first import the module queue, as shown in the example below."),(0,i.kt)("p",null,"To add an item , you can make use of put() method as shown in the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\nq1 = queue.Queue()\nq1.put(10) #this will additem 10 to the queue.\n")),(0,i.kt)("p",null,"By default, the size of the queue is infinite and you can add any number of items to it. In case you want to define the size of the queue the same can be done as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\nq1 = queue.Queue(5) #The max size is 5.\nq1.put(1)\nq1.put(2)\nq1.put(3)\nq1.put(4)\nq1.put(5)\nprint(q1.full()) # will return true.\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"True\n")),(0,i.kt)("p",null,"Now the size of the queue is 5, and it will not take more than 5 items, and the method q1.full() will return true. Adding any more items will not execute the code any further."),(0,i.kt)("h2",{id:"remove-an-item-from-the-queue"},"Remove an item from the queue"),(0,i.kt)("p",null,"To remove an item from the queue, you can use the method called get(). This method allows items from the queue when called."),(0,i.kt)("p",null,"The following example shows how to remove an item from the queue."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\nq1 = queue.Queue()\nq1.put(10)\n\nitem1 = q1.get()\n\nprint('The item removed from the queue is ', item1)\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"The item removed from the queue is  10\n")),(0,i.kt)("h2",{id:"last-in-first-out-queue-example"},"Last In First Out queue Example"),(0,i.kt)("p",null,"In the case of last in the first out queue, the element that is entered last will be the first to come out."),(0,i.kt)("p",null,"To work with LIFO, i.e., last in the first out queue, we need to import the queue module and make use of the LifoQueue() method."),(0,i.kt)("h2",{id:"add-and-item-in-a-queue-1"},"Add and item in a queue"),(0,i.kt)("p",null,"Here we will understand how to add an item to the LIFO queue."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\nq1 = queue.LifoQueue()\nq1.put(10)\n")),(0,i.kt)("p",null,"You have to use the put() method on LifoQueue, as shown in the above example."),(0,i.kt)("h2",{id:"remove-an-item-from-the-queue-1"},"Remove an item from the queue"),(0,i.kt)("p",null,"To remove an item from the LIFOqueue you can make use of get() method ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\nq1 = queue.LifoQueue()\nq1.put(10)\n\nitem1 = q1.get()\n\nprint('The item removed from the LIFO queue is ', item1)\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"The item removed from the LIFO queue is  10\n")),(0,i.kt)("h2",{id:"add-more-than-1-item-in-a-queue"},"Add more than 1 item in a Queue"),(0,i.kt)("p",null,"In the above examples, we have seen how to add a single item and remove the item for FIFO and LIFOqueue. Now we will see how to add more than one item and also remove it."),(0,i.kt)("h2",{id:"add-and-item-in-a-fifoqueue"},"Add and item in a FIFOqueue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import queue\nq1 = queue.Queue()\n\nfor i in range(20):\n    q1.put(i) # this will additem from 0 to 20 to the queue\n")),(0,i.kt)("h2",{id:"remove-an-item-from-the-fifoqueue"},"Remove an item from the FIFOqueue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import queue\nq1 = queue.Queue()\n\nfor i in range(20):\n    q1.put(i) # this will additem from 0 to 20 to the queue\n\nwhile not q1.empty():\nprint("The value is ", q1.get()) # get() will remove the item from the queue.\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"The value is  0\nThe value is  1\nThe value is  2\nThe value is  3\nThe value is  4\nThe value is  5\nThe value is  6\nThe value is  7\nThe value is  8\nThe value is  9\nThe value is  10\nThe value is  11\nThe value is  12\nThe value is  13\nThe value is  14\nThe value is  15\nThe value is  16\nThe value is  17\nThe value is  18\nThe value is  19\n")),(0,i.kt)("h2",{id:"add-and-item-in-a-lifoqueue"},"Add and item in a LIFOqueue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import queue\nq1 = queue.LifoQueue()\nfor i in range(20):\n    q1.put(i) # this will additem from 0 to 20 to the queue\nRemove an item from the LIFOqueue\nimport queue\nq1 = queue.LifoQueue()\n\nfor i in range(20):\n    q1.put(i) # this will additem from 0 to 20 to the queue\n\n\nwhile not q1.empty():\nprint("The value is ", q1.get()) # get() will remove the item from the queue. \n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"The value is  19\nThe value is  18\nThe value is  17\nThe value is  16\nThe value is  15\nThe value is  14\nThe value is  13\nThe value is  12\nThe value is  11\nThe value is  10\nThe value is  9\nThe value is  8\nThe value is  7\nThe value is  6\nThe value is  5\nThe value is  4\nThe value is  3\nThe value is  2\nThe value is  1\nThe value is  0 \n")),(0,i.kt)("h2",{id:"sorting-queue"},"Sorting Queue"),(0,i.kt)("p",null,"Following example shows the queue sorting.The algorithm used for sorting is bubble sort."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import queue\nq1 = queue.Queue()\n#Addingitems to the queue\nq1.put(11)\nq1.put(5)\nq1.put(4)\nq1.put(21)\nq1.put(3)\nq1.put(10)\n\n#using bubble sort on the queue\nn =  q1.qsize()\nfor i in range(n):\n    x = q1.get() # the element is removed\n    for j in range(n-1):\n        y = q1.get() # the element is removed\n        if x > y :  \n            q1.put(y)   #the smaller one is put at the start of the queue\n        else:\n            q1.put(x)  # the smaller one is put at the start of the queue\n            x = y     # the greater one is replaced with x and compared again with nextelement\n    q1.put(x)\n\nwhile (q1.empty() == False): \nprint(q1.queue[0], end = " ")  \n        q1.get()\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"3 4 5 10 11 21\n")),(0,i.kt)("h2",{id:"reversing-queue"},"Reversing Queue"),(0,i.kt)("p",null,"To reverse the queue, you can make use of another queue and recursion."),(0,i.kt)("p",null,"The following example shows how to get the queue reversed."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import queue\nq1 = queue.Queue()\n\nq1.put(11)\nq1.put(5)\nq1.put(4)\nq1.put(21)\nq1.put(3)\nq1.put(10)\n\ndef reverseQueue (q1src, q2dest) :  \n    buffer = q1src.get()\n    if (q1src.empty() == False) :\nreverseQueue(q1src, q2dest)      #using recursion\n    q2dest.put(buffer)\nreturn q2dest\n\nq2dest = queue.Queue()\nqReversed = reverseQueue(q1,q2dest)\n\nwhile (qReversed.empty() == False): \nprint(qReversed.queue[0], end = " ")  \n        qReversed.get()\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"10 3 21 4 5 11\n")),(0,i.kt)("h2",{id:"summary"},"Summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A queue is a container that holds data. There are two types of Queue, FIFO, and LIFO."),(0,i.kt)("li",{parentName:"ul"},"For a FIFO (First in First out Queue), the element that goes first will be the first to come out."),(0,i.kt)("li",{parentName:"ul"},"For a LIFO (Last in First out Queue), the element that is entered last will be the first to come out."),(0,i.kt)("li",{parentName:"ul"},"An item in a queue is added using the put(item) method."),(0,i.kt)("li",{parentName:"ul"},"To remove an item, get() method is used.")))}p.isMDXComponent=!0}}]);