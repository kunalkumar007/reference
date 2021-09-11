"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[5581],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),h=a,d=g["".concat(s,".").concat(h)]||g[h]||c[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6102:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,u={unversionedId:"Python Course/Python Strings",id:"Python Course/Python Strings",isDocsHomePage:!1,title:"Python Strings",description:"014. Python Strings",source:"@site/docs/Python Course/014. Python Strings.md",sourceDirName:"Python Course",slug:"/Python Course/Python Strings",permalink:"/docs/Python Course/Python Strings",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/014. Python Strings.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python OOPs_ Class, Object, Inheritance & Con",permalink:"/docs/Python Course/Python OOPs_ Class, Object, Inheritance & Con"},next:{title:"Python String strip() Function",permalink:"/docs/Python Course/Python String strip() Function"}},p=[{value:"Accessing Values in Strings",id:"accessing-values-in-strings",children:[]},{value:"Various String Operators",id:"various-string-operators",children:[]},{value:"Some more examples",id:"some-more-examples",children:[]},{value:"Python String replace() Method",id:"python-string-replace-method",children:[]},{value:"Changing upper and lower case strings",id:"changing-upper-and-lower-case-strings",children:[]},{value:"Using &quot;join&quot; function for the string",id:"using-join-function-for-the-string",children:[]},{value:"Reversing String",id:"reversing-string",children:[]},{value:"Split Strings",id:"split-strings",children:[{value:"Important Note:",id:"important-note",children:[]},{value:"In Python, Strings are immutable.",id:"in-python-strings-are-immutable",children:[]},{value:"Consider the following code",id:"consider-the-following-code",children:[]},{value:"Python 2 Example",id:"python-2-example",children:[]}]},{value:"Summary:",id:"summary",children:[]}],c={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},"Python Strings")),(0,i.kt)("p",null,"In Python everything is object and string are an object too. Python string can be created simply by enclosing characters in the double quote."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("p",null,"var = ",(0,i.kt)("strong",{parentName:"p"},'"Hello World!"')),(0,i.kt)("h2",{id:"accessing-values-in-strings"},"Accessing Values in Strings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Python does not support a character type,")," these are treated as strings of length one, also considered as substring."),(0,i.kt)("p",null,"We use square brackets for slicing along with the index or indices to obtain a substring."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'var1 = "Guru99!"\nvar2 = "Software Testing"\nprint ("var1[0]:",var1[0])\nprint ("var2[1:5]:",var2[1:5])\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"var1[0]: G\nvar2[1:5]: oftw \n")),(0,i.kt)("h2",{id:"various-string-operators"},"Various String Operators"),(0,i.kt)("p",null,"There are various string operators that can be used in different ways like concatenating different string."),(0,i.kt)("p",null,'Suppose if a=guru and b=99 then a+b= "guru99". Similarly, if you are using a*2, it will "GuruGuru". Likewise, you can use other operators in string.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Operator        Description\n[]              Slice- it gives the letter from the given index\n[:]             Range slice-it gives the characters from the given range\nin              Membership-returns true if a letter exist in the given string\nnot in              Membership-returns true if a letter exist is not in the given string\nr/R             Raw string suppresses actual meaning of escape characters.\n% - Used for string format  %r - It insert the canonical string representation of the object (i.e., repr(o)) %s- It insert the presentation string representation of the object (i.e., str(o)) %d- it will format a number for display\n")),(0,i.kt)("h2",{id:"some-more-examples"},"Some more examples"),(0,i.kt)("p",null,"You can update Python String by re-assigning a variable to another string. The new value can be related to previous value or to a completely different string all together."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'x = "Hello World!"\nprint(x[:6]) \nprint(x[0:6] + "Guru99")\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello\nHello Guru99\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note :")," - Slice:6 or 0:6 has the same effect"),(0,i.kt)("h2",{id:"python-string-replace-method"},"Python String replace() Method"),(0,i.kt)("p",null,"The method replace() returns a copy of the string in which the values of old string have been replaced with the new value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"oldstring = 'I like Guru99' \nnewstring = oldstring.replace('like', 'love')\nprint(newstring)\n")),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"I love Guru99\n")),(0,i.kt)("h2",{id:"changing-upper-and-lower-case-strings"},"Changing upper and lower case strings"),(0,i.kt)("p",null,"In Python, you can even change the string to upper case or lower case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'string="python at guru99"\nprint(string.upper())\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"PYTHON AT GURU99\n")),(0,i.kt)("p",null,"Likewise, you can also do for other function as well like capitalize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'string="python at guru99"       \nprint(string.capitalize())\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Python at guru99\n")),(0,i.kt)("p",null,"You can also convert your string to lower case"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'string="PYTHON AT GURU99"\nprint(string.lower())\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"python at guru99\n")),(0,i.kt)("h2",{id:"using-join-function-for-the-string"},'Using "join" function for the string'),(0,i.kt)("p",null,"The join function is a more flexible way for concatenating string. With join function, you can add any character into the string."),(0,i.kt)("p",null,'For example, if you want to add a colon (:) after every character in the string "Python" you can use the following code.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print(":".join("Python"))   \n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"P:y:t:h:o:n\n")),(0,i.kt)("h2",{id:"reversing-string"},"Reversing String"),(0,i.kt)("p",null,'By using the reverse function, you can reverse the string. For example, if we have string "12345" and then if you apply the code for the reverse function as shown below.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"string=\"12345\"      \nprint(''.join(reversed(string)))\n")),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"54321\n")),(0,i.kt)("h2",{id:"split-strings"},"Split Strings"),(0,i.kt)("p",null,'Split strings is another function that can be applied in Python let see for string "guru99 career guru99". First here we will split the string by using the command word.split and get the result.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"word=\"guru99 career guru99\"     \nprint(word.split(' '))\n")),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"['guru99', 'career', 'guru99']\n")),(0,i.kt)("p",null,"To understand this better we will see one more example of split, instead of space (' ') we will replace it with ('r') and it will split the string wherever 'r' is mentioned in the string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"word=\"guru99 career guru99\"     \nprint(word.split('r'))\n")),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"['gu', 'u99 ca', 'ee', ' gu', 'u99']\n")),(0,i.kt)("h3",{id:"important-note"},"Important Note:"),(0,i.kt)("h3",{id:"in-python-strings-are-immutable"},"In Python, Strings are immutable."),(0,i.kt)("h3",{id:"consider-the-following-code"},"Consider the following code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'x = "Guru99"\nx.replace("Guru99","Python")\nprint(x)\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Guru99\n")),(0,i.kt)("p",null,'will still return Guru99. This is because x.replace("Guru99","Python") returns a ',(0,i.kt)("strong",{parentName:"p"},"copy of X with replacements made")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You will need to use the following code to observe changes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'x = "Guru99"\nx = x.replace("Guru99","Python")\nprint(x)\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Python\n")),(0,i.kt)("p",null,"Above codes are Python 3 examples, If you want to run in Python 2 please consider following code."),(0,i.kt)("h3",{id:"python-2-example"},"Python 2 Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#Accessing Values in Strings\nvar1 = "Guru99!"\nvar2 = "Software Testing"\nprint "var1[0]:",var1[0]\nprint "var2[1:5]:",var2[1:5]\n#Some more examples\nx = "Hello World!"\nprint x[:6] \nprint x[0:6] + "Guru99"\n#Python String replace() Method\noldstring = \'I like Guru99\' \nnewstring = oldstring.replace(\'like\', \'love\')\nprint newstring\n#Changing upper and lower case strings\nstring="python at guru99"\nprint string.upper()\nstring="python at guru99"       \nprint string.capitalize()\nstring="PYTHON AT GURU99"\nprint string.lower()\n#Using "join" function for the string\nprint":".join("Python")     \n#Reversing String\nstring="12345"      \nprint\'\'.join(reversed(string))\n#Split Strings\nword="guru99 career guru99"     \nprint word.split(\' \')\nword="guru99 career guru99"     \nprint word.split(\'r\')\nx = "Guru99"\nx.replace("Guru99","Python")\nprint x\nx = "Guru99"\nx = x.replace("Guru99","Python")\nprint x\n')),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"var1[0]: G\nvar2[1:5]: oftw\nHello\nHello Guru99\nI love Guru99\nPYTHON AT GURU99\nPython at guru99\npython at guru99\nP:y:t:h:o:n\n54321\n['guru99', 'career', 'guru99']\n['gu', 'u99 ca', 'ee', ' gu', 'u99']\nGuru99\nPython\n")),(0,i.kt)("p",null,"Python has introduced a .format function which does way with using the cumbersome %d and so on for string formatting."),(0,i.kt)("h2",{id:"summary"},"Summary:"),(0,i.kt)("p",null,"Since Python is an object-oriented programming language, many functions can be applied to Python objects. A notable feature of Python is its indenting source statements to make the code easier to read."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessing values through slicing - square brackets are used for slicing along with the index or indices to obtain a substring.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In slicing, if range is declared ","[1:5]",", it can actually fetch the value from range ","[1:4]"))),(0,i.kt)("li",{parentName:"ul"},"You can update Python String by re-assigning a variable to another string"),(0,i.kt)("li",{parentName:"ul"},"Method replace() returns a copy of the string in which the occurrence of old is replaced with new.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Syntax for method replace: oldstring.replace("value to change","value to be replaced")'))),(0,i.kt)("li",{parentName:"ul"},"String operators like [], ","[ : ]",", in, Not in, etc. can be applied to concatenate the string, fetching or inserting specific characters into the string, or to check whether certain character exist in the string"),(0,i.kt)("li",{parentName:"ul"},"Other string operations include",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Changing upper and lower case"),(0,i.kt)("li",{parentName:"ul"},"Join function to glue any character into the string"),(0,i.kt)("li",{parentName:"ul"},"Reversing string"),(0,i.kt)("li",{parentName:"ul"},"Split string")))))}g.isMDXComponent=!0}}]);