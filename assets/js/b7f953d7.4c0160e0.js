"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[5857],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,h=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?r.createElement(h,u(u({ref:t},c),{},{components:n})):r.createElement(h,u({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1326:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],l={},i=void 0,s={unversionedId:"Python Course/Python abs() Function",id:"Python Course/Python abs() Function",isDocsHomePage:!1,title:"Python abs() Function",description:"023. Python abs() Function",source:"@site/docs/Python Course/023. Python abs() Function.md",sourceDirName:"Python Course",slug:"/Python Course/Python abs() Function",permalink:"/docs/Python Course/Python abs() Function",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/023. Python abs() Function.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Lambda Function",permalink:"/docs/Python Course/Python Lambda Function"},next:{title:"Python round() Function",permalink:"/docs/Python Course/Python round() Function"}},c=[{value:"Syntax:",id:"syntax",children:[]},{value:"Parameters: (value)",id:"parameters-value",children:[]},{value:"Return Value:",id:"return-value",children:[]},{value:"Examples:",id:"examples",children:[{value:"Code Example 1: Integer and Float number",id:"code-example-1-integer-and-float-number",children:[]}]},{value:"Summary:",id:"summary",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",{start:23},(0,o.kt)("li",{parentName:"ol"},"Python abs() Function")),(0,o.kt)("h1",{id:"python-abs"},"Python abs()"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Python abs()")," is a built-in function available with the standard library of python. It returns the absolute value for the given number. Absolute value of a number is the value without considering its sign. The number can be integer, floating point number or complex number. If the given number is complex, then it will return its magnitude."),(0,o.kt)("h2",{id:"syntax"},"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"abs(value)\n")),(0,o.kt)("h2",{id:"parameters-value"},"Parameters: (value)"),(0,o.kt)("p",null,"The input value to be given to abs() to get the absolute value. It can be an integer, a float, or a complex number."),(0,o.kt)("h2",{id:"return-value"},"Return Value:"),(0,o.kt)("p",null,"It will return the absolute value for the given number."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the input is an integer, the return value also will be an integer."),(0,o.kt)("li",{parentName:"ul"},"If the input is a float, the return value will also be float."),(0,o.kt)("li",{parentName:"ul"},"If the input is a complex number, the return value will be the magnitude of the input.")),(0,o.kt)("h2",{id:"examples"},"Examples:"),(0,o.kt)("h3",{id:"code-example-1-integer-and-float-number"},"Code Example 1: Integer and Float number"),(0,o.kt)("p",null,"To get the absolute value of an integer and float number check this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# testing abs() for an integer and float\n\nint_num = -25\n\nfloat_num = -10.50\n\nprint("The absolute value of an integer number is:", abs(int_num))\nprint("The absolute value of a float number is:", abs(float_num))\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'The absolute value of an integer number is: 25\nThe absolute value of a float number is: 10.5\nExample 2: Complex Number\nTo get absolute value of complex number\n\n# testing abs() for a complex number\n\ncomplex_num = (3+10j)\n\nprint("The magnitude of the complex number is:", abs(complex_num))\nOutput:\n\nThe magnitude of the complex number is: 10.44030650891055\n')),(0,o.kt)("h2",{id:"summary"},"Summary:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Abs() is a built-in function available with python, and it will return you the absolute value for the input given."),(0,o.kt)("li",{parentName:"ul"},"Value is an input value to be given to abs() to get the absolute value. It can be an integer, a float, or a complex number."),(0,o.kt)("li",{parentName:"ul"},"The abs() method takes one argument, i.e. the value you want to get the absolute."),(0,o.kt)("li",{parentName:"ul"},"The abs function returns the absolute value for the given number.")))}p.isMDXComponent=!0}}]);