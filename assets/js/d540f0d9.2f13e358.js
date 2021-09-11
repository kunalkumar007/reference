"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[5452],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3484:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s=void 0,p={unversionedId:"Python Course/Python JSON",id:"Python Course/Python JSON",isDocsHomePage:!1,title:"Python JSON",description:"049. Python JSON",source:"@site/docs/Python Course/049. Python JSON.md",sourceDirName:"Python Course",slug:"/Python Course/Python JSON",permalink:"/docs/Python Course/Python JSON",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/049. Python JSON.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pandas & CSV in Python",permalink:"/docs/Python Course/Pandas & CSV in Python"},next:{title:"Python with MySQL",permalink:"/docs/Python Course/Python with MySQL"}},d=[{value:"JSON Library in Python",id:"json-library-in-python",children:[]},{value:"Python to JSON (Encoding)",id:"python-to-json-encoding",children:[]},{value:"JSON dumps() in Python",id:"json-dumps-in-python",children:[]},{value:"JSON to Python (Decoding)",id:"json-to-python-decoding",children:[]},{value:"Decoding JSON File or Parsing JSON file in Python",id:"decoding-json-file-or-parsing-json-file-in-python",children:[]},{value:"Compact Encoding in Python",id:"compact-encoding-in-python",children:[]},{value:"Format JSON code (Pretty print)",id:"format-json-code-pretty-print",children:[]},{value:"Ordering the JSON code:",id:"ordering-the-json-code",children:[]},{value:"Complex Object encoding of Python",id:"complex-object-encoding-of-python",children:[{value:"Example: 3 +2i",id:"example-3-2i",children:[]}]},{value:"Complex JSON object decoding in Python",id:"complex-json-object-decoding-in-python",children:[]},{value:"Overview of JSON Serialization class JSONEncoder",id:"overview-of-json-serialization-class-jsonencoder",children:[]},{value:"Overview of JSON Deserialization class JSONDecoder",id:"overview-of-json-deserialization-class-jsondecoder",children:[]},{value:"Decoding JSON data from URL: Real Life Example",id:"decoding-json-data-from-url-real-life-example",children:[]},{value:"Exceptions Related to JSON Library in Python:",id:"exceptions-related-to-json-library-in-python",children:[]},{value:"Infinite and NaN Numbers in Python",id:"infinite-and-nan-numbers-in-python",children:[]},{value:"Repeated key in JSON String",id:"repeated-key-in-json-string",children:[]},{value:"CLI (Command Line Interface) with JSON in Python",id:"cli-command-line-interface-with-json-in-python",children:[]},{value:"Advantages of JSON in Python",id:"advantages-of-json-in-python",children:[]},{value:"Implementation Limitations of JSON in Python",id:"implementation-limitations-of-json-in-python",children:[]},{value:"Python JSON Cheat Sheet",id:"python-json-cheat-sheet",children:[]}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",{start:49},(0,r.kt)("li",{parentName:"ol"},"Python JSON")),(0,r.kt)("h1",{id:"what-is-json-in-python"},"What is JSON in Python?"),(0,r.kt)("p",null,"JSON in Python is a standard format inspired by JavaScript for data exchange and data transfer as text format over a network. Generally, JSON is in string or text format. It can be used by APIs and databases, and it represents objects as name/value pairs. JSON stands for JavaScript Object Notation."),(0,r.kt)("p",null,"Python JSON Syntax:"),(0,r.kt)("p",null,"JSON is written as key and value pair."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "Key":  "Value",\n        "Key":  "Value",\n}\n')),(0,r.kt)("p",null,"JSON is very similar to Python dictionary. ",(0,r.kt)("strong",{parentName:"p"},"Python")," supports JSON, and it has an inbuilt library as a JSON."),(0,r.kt)("h2",{id:"json-library-in-python"},"JSON Library in Python"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"'marshal'")," and ",(0,r.kt)("strong",{parentName:"p"},"'pickle'")," external modules of Python maintain a version of ",(0,r.kt)("strong",{parentName:"p"},"JSON")," Python library. Working with JSON in Python to perform JSON related operations like encoding and decoding, you need to first ",(0,r.kt)("strong",{parentName:"p"},"import")," JSON library and for that in your ",(0,r.kt)("strong",{parentName:"p"},".py")," file,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\n")),(0,r.kt)("p",null,"Following methods are available in the JSON Python module"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dumps()"),(0,r.kt)("td",{parentName:"tr",align:null},"encoding to JSON objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dump()"),(0,r.kt)("td",{parentName:"tr",align:null},"encoded string writing on file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loads()"),(0,r.kt)("td",{parentName:"tr",align:null},"Decode the JSON string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load()"),(0,r.kt)("td",{parentName:"tr",align:null},"Decode while JSON file read")))),(0,r.kt)("h2",{id:"python-to-json-encoding"},"Python to JSON (Encoding)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON")," Library of Python performs following translation of Python objects into JSON objects by default"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Python"),(0,r.kt)("th",{parentName:"tr",align:null},"JSON"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unicode"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number - int, long"),(0,r.kt)("td",{parentName:"tr",align:null},"number \u2013 int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"number \u2013 real")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Null")))),(0,r.kt)("p",null,"Converting Python data to JSON is called an Encoding operation. Encoding is done with the help of JSON library method \u2013 ",(0,r.kt)("strong",{parentName:"p"},"dumps()")),(0,r.kt)("h2",{id:"json-dumps-in-python"},"JSON dumps() in Python"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"json.dumps()")," in Python is a method that converts dictionary objects of Python into JSON string data format. It is useful when the objects are required to be in string format for the operations like parsing, printing, etc."),(0,r.kt)("p",null,"Now lets perform our first json.dumps encoding example with Python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\n\nx = {\n  "name": "Ken",\n  "age": 45,\n  "married": True,\n  "children": ("Alice","Bob"),\n  "pets": [\'Dog\'],\n  "cars": [\n    {"model": "Audi A1", "mpg": 15.1},\n    {"model": "Zeep Compass", "mpg": 18.1}\n  ]\n}\n# sorting result in asscending order by keys:\nsorted_string = json.dumps(x, indent=4, sort_keys=True)\nprint(sorted_string)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"person": {"name": "Kenn", "sex": "male", "age": 28}})\n')),(0,r.kt)("p",null,"Let's see an example of Python write JSON to file for creating a JSON file of the dictionary using the same function dump()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# here we create new data_file.json file with write mode using file i/o operation \nwith open('json_file.json', \"w\") as file_write:\n# write json data into file\njson.dump(person_data, file_write)\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("p",null,"Nothing to show\u2026In your system json_file.json is created. You can check that file as shown in the below write JSON to file Python example."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/122818_1014_PythonJSONE1.png",alt:"image"})),(0,r.kt)("h2",{id:"json-to-python-decoding"},"JSON to Python (Decoding)"),(0,r.kt)("p",null,"JSON string decoding is done with the help of inbuilt method ",(0,r.kt)("strong",{parentName:"p"},"json.loads()")," & ",(0,r.kt)("strong",{parentName:"p"},"json.load()")," of JSON library in Python. Here translation table show example of JSON objects to Python objects which are helpful to perform decoding in Python of JSON string."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"JSON"),(0,r.kt)("th",{parentName:"tr",align:null},"Python"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"dict")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"unicode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number \u2013 int"),(0,r.kt)("td",{parentName:"tr",align:null},"number - int, long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number \u2013 real"),(0,r.kt)("td",{parentName:"tr",align:null},"float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,"Let's see a basic parse JSON Python example of decoding with the help of json.loads function,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json  # json library imported\n# json data string\nperson_data = \'{  "person":  { "name":  "Kenn",  "sex":  "male",  "age":  28}}\'\n# Decoding or converting JSON format in dictionary using loads()\ndict_obj = json.loads(person_data)\nprint(dict_obj)\n# check type of dict_obj\nprint("Type of dict_obj", type(dict_obj))\n# get human object details\nprint("Person......",  dict_obj.get(\'person\'))\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"{'person': {'name': 'Kenn', 'sex': 'male', 'age': 28}}\nType of dict_obj <class 'dict'>\nPerson...... {'name': 'John', 'sex': 'male'}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/122818_1014_PythonJSONE2.png",alt:"image"})),(0,r.kt)("h2",{id:"decoding-json-file-or-parsing-json-file-in-python"},"Decoding JSON File or Parsing JSON file in Python"),(0,r.kt)("p",null,"Now, we will learn how to read JSON file in Python with Python parse JSON example:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Decoding JSON file is File Input /Output (I/O) related operation. The JSON file must exist on your system at specified the location that you mention in your program."),(0,r.kt)("p",null,"Python read JSON file Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\n#File I/O Open function for read data from JSON File\nwith open('X:/json_file.json') as file_object:\n        # store file data in object\n        data = json.load(file_object)\nprint(data)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here data")," is a dictionary object of Python as shown in the above read JSON file Python example."),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"{'person': {'name': 'Kenn', 'sex': 'male', 'age': 28}}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/122818_1014_PythonJSONE3.png",alt:"image"})),(0,r.kt)("h2",{id:"compact-encoding-in-python"},"Compact Encoding in Python"),(0,r.kt)("p",null,"When you need to reduce the size of your JSON file, you can use compact encoding in Python."),(0,r.kt)("p",null,"Example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\n# Create a List that contains dictionary\nlst = ['a', 'b', 'c',{'4': 5, '6': 7}]\n# separator used for compact representation of JSON.\n# Use of ',' to identify list items\n# Use of ':' to identify key and value in dictionary\ncompact_obj = json.dumps(lst, separators=(',', ':'))\nprint(compact_obj)\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'\'["a", "b", "c", {"4": 5, "6": 7}]\'\n\n** Here output of JSON is represented in a single line which is the most compact representation by removing the space character from compact_obj **  \n')),(0,r.kt)("h2",{id:"format-json-code-pretty-print"},"Format JSON code (Pretty print)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The aim is to write well-formatted code for human understanding. With the help of pretty printing, anyone can easily understand the code.\nExample:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\ndic = { 'a': 4, 'b': 5 }\n''' To format the code use of indent and 4 shows number of space and use of separator is not necessary but standard way to write code of particular function. '''\nformatted_obj = json.dumps(dic, indent=4, separators=(',', ': '))\nprint(formatted_obj)\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "a" : 4,\n   "b" : 5\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/122818_1014_PythonJSONE4.png",alt:"image"})),(0,r.kt)("p",null,"To better understand this, change indent to 40 and observe the output-"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/122818_1014_PythonJSONE5.png",alt:"image"})),(0,r.kt)("h2",{id:"ordering-the-json-code"},"Ordering the JSON code:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sort_keys")," attribute in Python dumps function's argument will sort the key in JSON in ascending order. The sort_keys argument is a Boolean attribute. When it's true sorting is allowed otherwise not. Let's understand with Python string to JSON sorting example."),(0,r.kt)("p",null,"Example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\n\nx = {\n  "name": "Ken",\n  "age": 45,\n  "married": True,\n  "children": ("Alice", "Bob"),\n  "pets": [ \'Dog\' ],\n  "cars": [\n    {"model": "Audi A1", "mpg": 15.1},\n    {"model": "Zeep Compass", "mpg": 18.1}\n    ],\n}\n# sorting result in asscending order by keys:\nsorted_string = json.dumps(x, indent=4, sort_keys=True)\nprint(sorted_string)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "age": 45,\n    "cars": [ {\n        "model": "Audi A1", \n        "mpg": 15.1\n    },\n    {\n        "model": "Zeep Compass", \n        "mpg": 18.1\n    }\n    ],\n    "children": [ "Alice",\n          "Bob"\n    ],\n    "married": true,\n    "name": "Ken",\n    "pets": [ \n        "Dog"\n    ]\n}\n')),(0,r.kt)("p",null,"As you may observe the keys age, cars, children, etc are arranged in ascending order."),(0,r.kt)("h2",{id:"complex-object-encoding-of-python"},"Complex Object encoding of Python"),(0,r.kt)("p",null,"A Complex object has two different parts that is"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Real part"),(0,r.kt)("li",{parentName:"ol"},"Imaginary part\n",(0,r.kt)("img",{parentName:"li",src:"https://www.guru99.com/images/1/122818_1014_PythonJSONE6.png",alt:"Complex Object encoding of Python Example"}))),(0,r.kt)("h3",{id:"example-3-2i"},"Example: 3 +2i"),(0,r.kt)("p",null,"Before performing encoding of a complex object, you need to check a variable is complex or not. You need to create a function which checks the value stored in a variable by using an instance method."),(0,r.kt)("p",null,"Let's create the specific function for check object is complex or eligible for encoding."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\n\n# create function to check instance is complex or not\ndef complex_encode(object):\n    # check using isinstance method\n    if isinstance(object, complex):\n        return [object.real, object.imag]\n    # raised error using exception handling if object is not complex\n    raise TypeError(repr(object) + " is not JSON serialized")\n\n\n# perform json encoding by passing parameter\ncomplex_obj = json.dumps(4 + 5j, default=complex_encode)\nprint(complex_obj)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"'[4.0, 5.0]'\n")),(0,r.kt)("h2",{id:"complex-json-object-decoding-in-python"},"Complex JSON object decoding in Python"),(0,r.kt)("p",null,"To decode complex object in JSON, use an object_hook parameter which checks JSON string contains the complex object or not. Lets understand with string to JSON Python Example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\n  # function check JSON string contains complex object\n  def is_complex(objct):\n    if \'__complex__\' in objct:\n      return complex(objct[\'real\'], objct[\'img\'])\n    return objct\n  \n  # use of json loads method with object_hook for check object complex or not\n  complex_object =json.loads(\'{"__complex__": true, "real": 4, "img": 5}\', object_hook = is_complex)\n  #here we not passed complex object so it\'s convert into dictionary\n  simple_object =json.loads(\'{"real": 6, "img": 7}\', object_hook = is_complex)\n  print("Complex_object......",complex_object)\n  print("Without_complex_object......",simple_object)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Complex_object...... (4+5j)\nWithout_complex_object...... {'real': 6, 'img': 7}\n")),(0,r.kt)("h2",{id:"overview-of-json-serialization-class-jsonencoder"},"Overview of JSON Serialization class JSONEncoder"),(0,r.kt)("p",null,"JSONEncoder class is used for serialization of any Python object while performing encoding. It contains three different methods of encoding which are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default(o)")," \u2013 Implemented in the subclass and return serialize object for o object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"encode(o)")," \u2013 Same as JSON dumps Python method return JSON string of Python data structure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"iterencode(o)")," \u2013 Represent string one by one and encode object o.\nWith the help of encode() method of JSONEncoder class, we can also encode any Python object as shown in the below Python JSON encoder example.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# import JSONEncoder class from json\nfrom json.encoder import JSONEncoder\ncolour_dict = { "colour": ["red", "yellow", "green" ]}\n# directly called encode method of JSON\nJSONEncoder().encode(colour_dict)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'\'{"colour": ["red", "yellow", "green"]}\'\n')),(0,r.kt)("h2",{id:"overview-of-json-deserialization-class-jsondecoder"},"Overview of JSON Deserialization class JSONDecoder"),(0,r.kt)("p",null,"JSONDecoder class is used for deserialization of any Python object while performing decoding. It contains three different methods of decoding which are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"default(o) \u2013 Implemented in the subclass and return deserialized object o object."),(0,r.kt)("li",{parentName:"ul"},"decode(o) \u2013 Same as json.loads() method return Python data structure of JSON string or data."),(0,r.kt)("li",{parentName:"ul"},"raw_decode(o) \u2013 Represent Python dictionary one by one and decode object o.\nWith the help of decode() method of JSONDecoder class, we can also decode JSON string as shown in below Python JSON decoder example.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\n# import JSONDecoder class from json\nfrom json.decoder import JSONDecoder\ncolour_string = \'{ "colour": ["red", "yellow"]}\'\n# directly called decode method of JSON\nJSONDecoder().decode(colour_string)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"{'colour': ['red', 'yellow']}\n")),(0,r.kt)("h2",{id:"decoding-json-data-from-url-real-life-example"},"Decoding JSON data from URL: Real Life Example"),(0,r.kt)("p",null,"We will fetch data of CityBike NYC (Bike Sharing System) from specified URL(",(0,r.kt)("a",{parentName:"p",href:"https://feeds.citibikenyc.com/stations/stations.json"},"https://feeds.citibikenyc.com/stations/stations.json"),") and convert into dictionary format."),(0,r.kt)("p",null,"Python load JSON from file Example:"),(0,r.kt)("p",null,"NOTE:- Make sure requests library is already installed in your Python, If not then open Terminal or CMD and type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(For Python 3 or above) pip3 install requests")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\nimport requests\n\n# get JSON string data from CityBike NYC using web requests library\njson_response= requests.get(\"https://feeds.citibikenyc.com/stations/stations.json\")\n# check type of json_response object\nprint(type(json_response.text))\n# load data in loads() function of json library\nbike_dict = json.loads(json_response.text)\n#check type of news_dict\nprint(type(bike_dict))\n# now get stationBeanList key data from dict\nprint(bike_dict['stationBeanList'][0]) \n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<class 'str'>\n<class 'dict'>\n{\n    'id': 487,\n    'stationName': 'E 20 St & FDR Drive',\n    'availableDocks': 24,\n    'totalDocks': 34,\n    'latitude': 40.73314259,\n    'longitude': -73.97573881,\n    'statusValue': 'In Service',\n    'statusKey': 1,\n    'availableBikes': 9,\n    'stAddress1': 'E 20 St & FDR Drive',\n    'stAddress2': '',\n    'city': '',\n    'postalCode': '',\n    'location': '', \n    'altitude': '', \n    'testStation': False, \n    'lastCommunicationTime': '2018-12-11 10:59:09 PM', 'landMark': ''\n}\n")),(0,r.kt)("h2",{id:"exceptions-related-to-json-library-in-python"},"Exceptions Related to JSON Library in Python:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class ",(0,r.kt)("strong",{parentName:"li"},"json.JSONDecoderError")," handles the exception related to decoding operation. and it's a subclass of ",(0,r.kt)("strong",{parentName:"li"},"ValueError.")),(0,r.kt)("li",{parentName:"ul"},"Exception - json.JSONDecoderError(msg, doc)"),(0,r.kt)("li",{parentName:"ul"},"Parameters of Exception are,",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- msg \u2013 Unformatted Error message\n- doc \u2013 JSON docs parsed\n- pos \u2013 start index of doc when it's failed\n- lineno \u2013 line no shows correspond to pos\n- colon \u2013 column no correspond to pos\n")),"Python load JSON from file Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\n#File I/O Open function for read data from JSON File\ndata = {} #Define Empty Dictionary Object\ntry:\n        with open('json_file_name.json') as file_object:\n                data = json.load(file_object)\nexcept ValueError:\n     print(\"Bad JSON file format,  Change JSON File\")\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/122818_1014_PythonJSONE7.png",alt:"image"})),(0,r.kt)("h2",{id:"infinite-and-nan-numbers-in-python"},"Infinite and NaN Numbers in Python"),(0,r.kt)("p",null,"JSON Data Interchange Format (RFC \u2013 Request For Comments) doesn't allow Infinite or Nan Value but there is no restriction in Python- JSON Library to perform Infinite and Nan Value related operation. If JSON gets INFINITE and Nan datatype than it's converted it into literal."),(0,r.kt)("p",null,"Example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import json\n# pass float Infinite value\ninfinite_json = json.dumps(float('inf'))\n# check infinite json type\nprint(infinite_json)\nprint(type(infinite_json))\njson_nan = json.dumps(float('nan'))\nprint(json_nan)\n# pass json_string as Infinity\ninfinite = json.loads('Infinity')\nprint(infinite)\n# check type of Infinity\nprint(type(infinite))\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Infinity\n<class 'str'>\nNaN\ninf\n<class 'float'> \n")),(0,r.kt)("h2",{id:"repeated-key-in-json-string"},"Repeated key in JSON String"),(0,r.kt)("p",null,"RFC specifies the key name should be unique in a JSON object, but it's not mandatory. Python JSON library does not raise an exception of repeated objects in JSON. It ignores all repeated key-value pair and considers only last key-value pair among them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example,")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import json\nrepeat_pair = \'{"a":  1, "a":  2, "a":  3}\'\njson.loads(repeat_pair)\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"{'a': 3}\n")),(0,r.kt)("h2",{id:"cli-command-line-interface-with-json-in-python"},"CLI (Command Line Interface) with JSON in Python"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"json.tool")," provides the command line interface to validate JSON pretty-print syntax. Let's see an example of CLI"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/1/122818_1014_PythonJSONE8.png",alt:"Command Line Interface with JSON in Python Example"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'$ echo \'{"name" : "Kings Authur" }\' | python3 -m json.tool\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": " Kings Authur "\n}\n')),(0,r.kt)("h2",{id:"advantages-of-json-in-python"},"Advantages of JSON in Python"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easy to move back between container and value (JSON to Python and Python to JSON)"),(0,r.kt)("li",{parentName:"ul"},"Human readable (Pretty-print) JSON Object"),(0,r.kt)("li",{parentName:"ul"},"Widely used in data handling."),(0,r.kt)("li",{parentName:"ul"},"Doesn't have the same data structure in the single file.")),(0,r.kt)("h2",{id:"implementation-limitations-of-json-in-python"},"Implementation Limitations of JSON in Python"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In deserializer of JSON range and prediction of a number"),(0,r.kt)("li",{parentName:"ul"},"The Maximum length of JSON string and arrays of JSON and nesting levels of object.")),(0,r.kt)("h2",{id:"python-json-cheat-sheet"},"Python JSON Cheat Sheet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Python JSON Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json.dumps(person_data)"),(0,r.kt)("td",{parentName:"tr",align:null},"Create JSON Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json.dump(person_data, file_write)"),(0,r.kt)("td",{parentName:"tr",align:null},"Create JSON File using File I/O of Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compact_obj = json.dumps(data, separators=(',',':'))"),(0,r.kt)("td",{parentName:"tr",align:null},"Compact JSON Object by removing space character from JSON Object using separator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formatted_obj = json.dumps(dic, indent=4, separators=(',', ': '))"),(0,r.kt)("td",{parentName:"tr",align:null},"Formatting JSON code using Indent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sorted_string = json.dumps(x, indent=4, sort_keys=True)"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorting JSON object key by alphabetic order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"complex_obj = json.dumps(4 + 5j, default=complex_encode)"),(0,r.kt)("td",{parentName:"tr",align:null},"Python Complex Object encoding in JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSONEncoder().encode(colour_dict)"),(0,r.kt)("td",{parentName:"tr",align:null},"Use of JSONEncoder Class for Serialization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json.loads(data_string)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decoding JSON String in Python dictionary using json.loads() function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json.loads('{\"",(0,r.kt)("strong",{parentName:"td"},"complex"),'": true, "real": 4, "img": 5}\', object_hook = is_complex)'),(0,r.kt)("td",{parentName:"tr",align:null},"Decoding of complex JSON object to Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSONDecoder().decode(colour_string)"),(0,r.kt)("td",{parentName:"tr",align:null},"Use of Decoding JSON to Python with Deserialization")))))}m.isMDXComponent=!0}}]);