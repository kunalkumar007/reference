"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[9252],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=i.createContext({}),u=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,h=c["".concat(r,".").concat(d)]||c[d]||p[d]||o;return n?i.createElement(h,s(s({ref:t},m),{},{components:n})):i.createElement(h,s({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=c;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return r},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var i=n(7462),l=n(3366),o=(n(7294),n(3905)),s=["components"],a={},r=void 0,u={unversionedId:"Python Course/Python removes Duplicates from a List",id:"Python Course/Python removes Duplicates from a List",isDocsHomePage:!1,title:"Python removes Duplicates from a List",description:"44. Python removes Duplicates from a List",source:"@site/docs/Python Course/044. Python removes Duplicates from a List.md",sourceDirName:"Python Course",slug:"/Python Course/Python removes Duplicates from a List",permalink:"/docs/Python Course/Python removes Duplicates from a List",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/044. Python removes Duplicates from a List.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python List count()",permalink:"/docs/Python Course/Python List count()"},next:{title:"Python remove element from List",permalink:"/docs/Python Course/Python remove element from List"}},m=[{value:"Remove duplicates from list using Set",id:"remove-duplicates-from-list-using-set",children:[]},{value:"Remove Duplicates from a list using the Temporary List",id:"remove-duplicates-from-a-list-using-the-temporary-list",children:[]},{value:"Remove duplicates from list using Dict",id:"remove-duplicates-from-list-using-dict",children:[]},{value:"Remove duplicates from a list using for-loop",id:"remove-duplicates-from-a-list-using-for-loop",children:[]},{value:"Remove duplicates from list using list comprehension",id:"remove-duplicates-from-list-using-list-comprehension",children:[]},{value:"Remove duplicates from list using Numpy unique() method.",id:"remove-duplicates-from-list-using-numpy-unique-method",children:[]},{value:"Remove duplicates from list using Pandas methods",id:"remove-duplicates-from-list-using-pandas-methods",children:[]},{value:"Remove duplicates using enumerate() and list comprehension",id:"remove-duplicates-using-enumerate-and-list-comprehension",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:m};function c(e){var t=e.components,n=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",{start:44},(0,o.kt)("li",{parentName:"ol"},"Python removes Duplicates from a List")),(0,o.kt)("h1",{id:"python-remove-duplicate"},"Python remove Duplicate"),(0,o.kt)("p",null,"A list is a container that contains different Python objects, which could be integers, words, values, etc. It is the equivalent of an array in other programming languages."),(0,o.kt)("p",null,"So here will go through different ways in which we can remove duplicates from a given list."),(0,o.kt)("h2",{id:"remove-duplicates-from-list-using-set"},"Remove duplicates from list using Set"),(0,o.kt)("p",null,"To remove the duplicates from a list, you can make use of the built-in function set(). The specialty of set() method is that it returns distinct elements."),(0,o.kt)("p",null,"We have a list : ","[1,1,2,3,2,2,4,5,6,2,1]",". The list has many duplicates which we need to remove and get back only the distinct elements. The list is given to the set() built-in function. Later the final list is displayed using the list() built-in function, as shown in the example below."),(0,o.kt)("p",null,"The output that we get is distinct elements where all the duplicates elements are eliminated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"my_list = [1,1,2,3,2,2,4,5,6,2,1]\nmy_final_list = set(my_list)\nprint(list(my_final_list))\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[1, 2, 3, 4, 5, 6]\n")),(0,o.kt)("h2",{id:"remove-duplicates-from-a-list-using-the-temporary-list"},"Remove Duplicates from a list using the Temporary List"),(0,o.kt)("p",null,"To remove duplicates from a given list, you can make use of an empty temporary list. For that first, you will have to loop through the list having duplicates and add the unique items to the temporary list. Later the temporary list is assigned to the main list."),(0,o.kt)("p",null,"Here is a working example using temporary list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'my_list = [1, 2, 3, 1, 2, 4, 5, 4 ,6, 2]\nprint("List Before ", my_list)\ntemp_list = []\n\nfor i in my_list:\n    if i not in temp_list:\n        temp_list.append(i)\n\nmy_list = temp_list\n\nprint("List After removing duplicates ", my_list)\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"List Before  [1, 2, 3, 1, 2, 4, 5, 4, 6, 2]\nList After removing duplicates  [1, 2, 3, 4, 5, 6]\n")),(0,o.kt)("h2",{id:"remove-duplicates-from-list-using-dict"},"Remove duplicates from list using Dict"),(0,o.kt)("p",null,"We can remove duplicates from the given list by importing OrderedDict from collections. It is available from python2.7 onwards. OrderedDict takes care of returning you the distinct elements in an order in which the key is present."),(0,o.kt)("p",null,"Let us make use of a list and use fromkeys() method available in OrderedDict to get the unique elements from the list."),(0,o.kt)("p",null,"To make use of OrderedDict.fromkey() method, you have to import OrderedDict from collections, as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import OrderedDict\n")),(0,o.kt)("p",null,"Here is an example to remove duplicates using OrderedDict.fromkeys() method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import OrderedDict\n\nmy_list = ['a','x','a','y','a','b','b','c']\n\nmy_final_list = OrderedDict.fromkeys(my_list)\n\nprint(list(my_final_list))\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"['a', 'x', 'y', 'b', 'c']\n")),(0,o.kt)("p",null,"From Python 3.5+ onwards, we can make use of the regular dict.fromkeys() to get the distinct elements from the list. The dict.fromkeys() methods return keys that are unique and helps to get rid of the duplicate values."),(0,o.kt)("p",null,"An example that shows the working of dict.fromkeys() on a list to give the unique items is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"my_list = ['a','x','a','y','a','b','b','c']\nmy_final_list = dict.fromkeys(my_list)\nprint(list(my_final_list))\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("p",null,"['a', 'x', 'y', 'b', 'c']"),(0,o.kt)("h2",{id:"remove-duplicates-from-a-list-using-for-loop"},"Remove duplicates from a list using for-loop"),(0,o.kt)("p",null,"Using for-loop, we will traverse the list of items to remove duplicates."),(0,o.kt)("p",null,"First initialize array to empty i.e myFinallist = [].Inside the for-loop, add check if the items in the list exist in the array myFinallist.If the items do not exist, add the item to the array myFinallist using the append() method."),(0,o.kt)("p",null,"So whenever the duplicate item is encountered it will be already present in the array myFinallist and will not be inserted. Let us now check the same in the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"my_list = [1,2,2,3,1,4,5,1,2,6]\nmyFinallist = []\nfor i in my_list:\n    if i not in myFinallist:\nmyFinallist.append(i)\nprint(list(myFinallist))\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[1, 2, 3, 4, 5, 6]\n")),(0,o.kt)("h2",{id:"remove-duplicates-from-list-using-list-comprehension"},"Remove duplicates from list using list comprehension"),(0,o.kt)("p",null,"List comprehensions are Python functions that are used for creating new sequences (such as lists, dictionaries, etc.) using sequences that have already been created. This helps you to reduce longer loops and make your code easier to read and maintain."),(0,o.kt)("p",null,"Let us make use of list comprehension to remove duplicates from the list given."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"my_list = [1,2,2,3,1,4,5,1,2,6]\nmy_finallist = []\n[my_finallist.append(n) for n in my_list if n not in my_finallist]\nprint(my_finallist)\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[1, 2, 3, 4, 5, 6]\n")),(0,o.kt)("h2",{id:"remove-duplicates-from-list-using-numpy-unique-method"},"Remove duplicates from list using Numpy unique() method."),(0,o.kt)("p",null,"The method unique() from Numpy module can help us remove duplicate from the list given."),(0,o.kt)("p",null,"To work with Numpy first import numpy module, you need to follow these steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1)")," Import Numpy module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2)")," Use your list with duplicates inside unique method as shown below. The output is converted back to a list format using tolist() method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"myFinalList = np.unique(my_list).tolist()\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3)")," Finally print the list as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(myFinalList)\n")),(0,o.kt)("p",null,"The final code with output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nmy_list = [1,2,2,3,1,4,5,1,2,6]\nmyFinalList = np.unique(my_list).tolist()\nprint(myFinalList)\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[1, 2, 3, 4, 5, 6]\n")),(0,o.kt)("h2",{id:"remove-duplicates-from-list-using-pandas-methods"},"Remove duplicates from list using Pandas methods"),(0,o.kt)("p",null,"The Pandas module has a unique() method that will give us the unique elements from the list given."),(0,o.kt)("p",null,"To work with Pandas module, you need to follow these steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1)")," Import Pandas module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2)")," Use your list with duplicates inside unique() method as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"myFinalList = pd.unique(my_list).tolist()\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3)")," Print the list as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(myFinalList)\n")),(0,o.kt)("p",null,"The final code with output is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\nmy_list = [1,2,2,3,1,4,5,1,2,6]\nmyFinalList = pd.unique(my_list).tolist()\nprint(myFinalList)\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[1, 2, 3, 4, 5, 6]\n")),(0,o.kt)("h2",{id:"remove-duplicates-using-enumerate-and-list-comprehension"},"Remove duplicates using enumerate() and list comprehension"),(0,o.kt)("p",null,"Here the combination of list comprehension and enumerate to remove the duplicate elements. Enumerate returns an object with a counter to each element in the list. For example (0,1), (1,2) etc. Here the first value is the index, and the second value is the list item. W"),(0,o.kt)("p",null,"Each element is checked if it exists in the list, and if it does, it is removed from the list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"my_list = [1,2,2,3,1,4,5,1,2,6]\nmy_finallist = [i for j, i in enumerate(my_list) if i not in my_list[:j]]\nprint(list(my_finallist))\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[1, 2, 3, 4, 5, 6]\n")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To remove the duplicates from a list, you can make use of the built-in function set(). The specialty of the set() method is that it returns distinct elements."),(0,o.kt)("li",{parentName:"ul"},"You can remove duplicates from the given list by importing OrderedDictfrom collections. It is available from python2.7 onwards. OrderedDictdict takes care of returning you the distinct elements in an order in which the key is present."),(0,o.kt)("li",{parentName:"ul"},"You can make use of a for-loop that we will traverse the list of items to remove duplicates."),(0,o.kt)("li",{parentName:"ul"},"The method unique() from Numpy module can help us remove duplicate from the list given."),(0,o.kt)("li",{parentName:"ul"},"The Pandas module has a unique() method that will give us the unique elements from the list given."),(0,o.kt)("li",{parentName:"ul"},"The combination of list comprehension and enumerate is used to remove the duplicate elements from the list. Enumerate returns an object with a counter to each element in the list.")))}c.isMDXComponent=!0}}]);