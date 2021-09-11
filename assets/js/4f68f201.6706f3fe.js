"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[981],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=s,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9520:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var a=n(7462),s=n(3366),o=(n(7294),n(3905)),r=["components"],l={},i=void 0,c={unversionedId:"Python Course/Python OOPs_ Class, Object, Inheritance & Con",id:"Python Course/Python OOPs_ Class, Object, Inheritance & Con",isDocsHomePage:!1,title:"Python OOPs_ Class, Object, Inheritance & Con",description:"013. Python OOPs: Class, Object, Inheritance & Constructor",source:"@site/docs/Python Course/013. Python OOPs_ Class, Object, Inheritance & Con.md",sourceDirName:"Python Course",slug:"/Python Course/Python OOPs_ Class, Object, Inheritance & Con",permalink:"/docs/Python Course/Python OOPs_ Class, Object, Inheritance & Con",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/013. Python OOPs_ Class, Object, Inheritance & Con.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Break,Continue & Pass Statements",permalink:"/docs/Python Course/Python Break,Continue & Pass Statements"},next:{title:"Python Strings",permalink:"/docs/Python Course/Python Strings"}},h=[{value:"What is a Class?",id:"what-is-a-class",children:[]},{value:"How to define Python classes",id:"how-to-define-python-classes",children:[]},{value:"How Inheritance works",id:"how-inheritance-works",children:[{value:"Python Inheritance Syntax",id:"python-inheritance-syntax",children:[]}]},{value:"Python Constructors",id:"python-constructors",children:[{value:"Python 2 Example",id:"python-2-example",children:[]}]},{value:"Summary:",id:"summary",children:[]}],u={toc:h};function d(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"Python OOPs: Class, Object, Inheritance & Constructor")),(0,o.kt)("h1",{id:"oops-in-python"},"OOPs in Python"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OOPs in Python")," is a programming approach that focuses on using objects and classes as same as other general programming languages. The objects can be any real-world entities. Python allows developers to develop applications using the OOPs approach with the major focus on code reusability. It is very easy to create classes and objects in Python."),(0,o.kt)("h2",{id:"what-is-a-class"},"What is a Class?"),(0,o.kt)("p",null,"A Class in Python is a logical grouping of data and functions. It gives the freedom to create data structures that contains arbitrary content and hence easily accessible."),(0,o.kt)("p",null,"For example, for any bank employee who want to fetch the customer details online would go to customer class, where all its attributes like transaction details, withdrawal and deposit details, outstanding debt, etc. would be listed out."),(0,o.kt)("h2",{id:"how-to-define-python-classes"},"How to define Python classes"),(0,o.kt)("p",null,"To define class you need to consider following points"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1)"),' In Python, classes are defined by the "Class" keyword'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class myClass(): \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2)")," Inside classes, you can define functions or methods that are part of this class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def method1 (self):\nprint "Guru99"\ndef method2 (self,someString):\nprint "Software Testing:" + someString\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Here we have defined method1 that prints "Guru99."'),(0,o.kt)("li",{parentName:"ul"},'Another method we have defined is method2 that prints "Software Testing"+ SomeString. SomeString is the variable supplied by the calling method\n',(0,o.kt)("strong",{parentName:"li"},"Step 3)")," Everything in a class is indented, just like the code in the function, loop, if statement, etc. Anything not indented is not in the class")),(0,o.kt)("p",null,"Python Class & Objects: Define Class, Inheritance - OOP Tutorial"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:"),' About using "self" in Python'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The self-argument refers to the object itself. Hence the use of the word self. So inside this method, self will refer to the specific instance of this object that's being operated on."),(0,o.kt)("li",{parentName:"ul"},"Self is the name preferred by convention by Pythons to indicate the first parameter of instance methods in Python. It is part of the Python syntax to access members of objects\n",(0,o.kt)("strong",{parentName:"li"},"Step 4)")," To make an object of the class")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"c = myClass() \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5)")," To call a method in a class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'c.method1()\nc.method2(" Testing is fun") \n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Notice that when we call the method1 or method2, we don't have to supply the self-keyword. That's automatically handled for us by the Python runtime."),(0,o.kt)("li",{parentName:"ul"},'Python runtime will pass "self" value when you call an instance method on in instance, whether you provide it deliberately or not'),(0,o.kt)("li",{parentName:"ul"},"You just have to care about the non-self arguments\n",(0,o.kt)("strong",{parentName:"li"},"Step 6)")," Here is the complete code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Example file for working with classes\n\nclass myClass():\ndef method1(self):\nprint("Guru99")\n\ndef method2(self,someString):\nprint("Software Testing:" + someString)\n\ndef main():\n\n# exercise the class methods\n\nc = myClass ()\nc.method1()\nc.method2(" Testing is fun")\n\nif **name**== "**main**":\nmain()\n')),(0,o.kt)("h2",{id:"how-inheritance-works"},"How Inheritance works"),(0,o.kt)("p",null,"Inheritance is a feature used in object-oriented programming; it refers to defining a new class with less or no modification to an existing class. The new class is called derived class and from one which it inherits is called the base. Python supports inheritance; it also supports multiple inheritances. A class can inherit attributes and behavior methods from another class called subclass or heir class."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/7-2015/071515_1030_PythonClass2.png",alt:"step 1"})),(0,o.kt)("h3",{id:"python-inheritance-syntax"},"Python Inheritance Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"class DerivedClass(BaseClass):\nbody\\_of\\_derived_class\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1)")," Run the following code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Example file for working with classes\n\nclass myClass():\ndef method1(self):\nprint("Guru99")\n\nclass childClass(myClass):\n#def method1(self):\n#myClass.method1(self);\n#print ("childClass Method1")\n\ndef method2(self):\nprint("childClass method2")\n\ndef main():\n\n# exercise the class methods\n\nc2 = childClass()\nc2.method1()\n#c2.method2()\n\nif **name**== "**main**":\nmain()\n')),(0,o.kt)("p",null,'Notice that the in childClass, method1 is not defined but it is derived from the parent myClass. The output is "Guru99."'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2)")," Uncomment Line # 8 & 10. Run the code"),(0,o.kt)("p",null,'Now, the method 1 is defined in the childClass and output "childClass Method1" is correctly shown.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3)")," Uncomment Line #9. Run the code"),(0,o.kt)("p",null,"You can call a method of the parent class using the syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ParentClassName.MethodName(self) \n")),(0,o.kt)("p",null,"In our case, we call, myClass.method1(self) and Guru99 is printed as expected"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4)")," Uncomment Line #19. Run the code."),(0,o.kt)("p",null,'Method 2 of the child class is called and "childClass method2" is printed as expected.'),(0,o.kt)("h2",{id:"python-constructors"},"Python Constructors"),(0,o.kt)("p",null,"A constructor is a class function that instantiates an object to predefined values."),(0,o.kt)("p",null,"It begins with a double underscore (_). It ",(0,o.kt)("strong",{parentName:"p"},"init"),"() method"),(0,o.kt)("p",null,"In below example we are taking name of the user using constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class User:\nname = ""\n\n')),(0,o.kt)("p",null,"def ",(0,o.kt)("strong",{parentName:"p"},"init"),"(self, name):\nself.name = name"),(0,o.kt)("p",null,'def sayHello(self):\nprint("Welcome to Guru99, " + self.name) '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nUser1 = User("Alex")\nUser1.sayHello()\n')),(0,o.kt)("p",null,"Output will be:"),(0,o.kt)("p",null,"Welcome to Guru99, Alex"),(0,o.kt)("h3",{id:"python-2-example"},"Python 2 Example"),(0,o.kt)("p",null,"Above codes are Python 3 examples, If you want to run in Python 2 please consider following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# How to define Python classes\n\n# Example file for working with classes\n\nclass myClass():\ndef method1(self):\nprint "Guru99"\n\ndef method2(self,someString):\nprint "Software Testing:" + someString\n\ndef main():\n\n# exercise the class methods\n\nc = myClass ()\nc.method1()\nc.method2(" Testing is fun")\n\nif **name**== "**main**":\nmain()\n\n#How Inheritance works\n\n# Example file for working with classes\n\nclass myClass():\ndef method1(self):\nprint "Guru99"\n\nclass childClass(myClass):\n#def method1(self):\n#myClass.method1(self);\n#print "childClass Method1"\n\ndef method2(self):\nprint "childClass method2"\n\ndef main():\n\n# exercise the class methods\n\nc2 = childClass()\nc2.method1()\n#c2.method2()\n\nif **name**== "**main**":\nmain()\n')),(0,o.kt)("h2",{id:"summary"},"Summary:"),(0,o.kt)("p",null,'"Class" is a logical grouping of functions and data. Python class provides all the standard features of Object Oriented Programming.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Class inheritance mechanism"),(0,o.kt)("li",{parentName:"ul"},"A derived class that override any method of its base class"),(0,o.kt)("li",{parentName:"ul"},"A method can call the method of a base class with the same name"),(0,o.kt)("li",{parentName:"ul"},'Python Classes are defined by keyword "class" itself'),(0,o.kt)("li",{parentName:"ul"},"Inside classes, you can define functions or methods that are part of the class"),(0,o.kt)("li",{parentName:"ul"},"Everything in a class is indented, just like the code in the function, loop, if statement, etc."),(0,o.kt)("li",{parentName:"ul"},"The self argument in Python refers to the object itself. Self is the name preferred by convention by Pythons to indicate the first parameter of instance methods in Python"),(0,o.kt)("li",{parentName:"ul"},'Python runtime will pass "self" value automatically when you call an instance method on in instance, whether you provide it deliberately or not'),(0,o.kt)("li",{parentName:"ul"},"In Python, a class can inherit attributes and behavior methods from another class called subclass or heir class.")))}d.isMDXComponent=!0}}]);