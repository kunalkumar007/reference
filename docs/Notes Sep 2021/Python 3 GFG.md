## Python 3 

In other programming languages like C, C++, and Java, you will need to declare the type of variables but in Python you don’t need to do that. Just type in the variable and when values will be given to it, then it will automatically know whether the value given would be an int, float, or char or even a String.

```python
# Python program to declare variables
myNumber = 3
print(myNumber)

myNumber2 = 4.5
print(myNumber2)

myNumber ="helloworld"
print(myNumber)

```

**Output:**

```python
3
4.5
helloworld
```

Python have 4 types of built in Data Structures namely [List](https://www.geeksforgeeks.org/python-set-3-strings-lists-tuples-iterations/), [Dictionary](https://www.geeksforgeeks.org/python-set-4-dictionary-keywords-python/), [Tuple](https://www.geeksforgeeks.org/python-set-3-strings-lists-tuples-iterations/) and Set.

###### List

**List** is the most basic Data Structure in python. List is a mutable data structure i.e items can be added to list later after the list creation. It’s like you are going to shop at the local market and made a list of some items and later on you can add more and more items to the list.
append() function is used to add data to the list

```python
# Python program to illustrate a list

# creates a empty list
nums = []

# appending data in list
nums.append(21)
nums.append(40.5)
nums.append("String")

print(nums)

```

###### **Comments:**

```python
# is used for single line comment in Python
""" this is a comment """ is used for multi line comments
```

###### **Input and Output**

In this section, we will learn how to take input from the user and hence manipulate it or simply display it. input() function is used to take input from the user.

```python
# Python program to illustrate
# getting input from user
name = input("Enter your name: ")

# user entered the name 'harssh'
print("hello", name)

```

```python
# Python3 program to get input from user

# accepting integer from the user
# the return type of input() function is string ,
# so we need to convert the input to integer
num1 = int(input("Enter num1: "))
num2 = int(input("Enter num2: "))

num3 = num1 * num2
print("Product is: ", num3)

```

###### **Selection**

```python
# Python program to illustrate
# selection statement

num1 = 34
if(num1>12):
	print("Num1 is good")
elif(num1>35):
	print("Num2 is not gooooo....")
else:
	print("Num2 is great")

```

###### **Functions**

You can think of functions like a bunch of code that is intended to do a particular task in the whole Python script. Python used the keyword ‘def’ to define a function.
**Syntax:**

```python
def function-name(arguments):
            #function body
```

```python
# Python program to illustrate
# functions
def hello():
	print("hello")
	print("hello again")
hello()

# calling function
hello()			
```

Now as we know any program starts from a ‘main’ function…lets create a main function like in many other programming languages.

```python
# Python program to illustrate
# function with main
def getInteger():
	result = int(input("Enter integer: "))
	return result

def Main():
	print("Started")

	# calling the getInteger function and
	# storing its returned value in the output variable
	output = getInteger()	
	print(output)

# now we are required to tell Python
# for 'Main' function existence
if __name__=="__main__":
	Main()
```

###### Iteration (Looping)

As the name suggests it calls repeating things again and again. We will use the most popular ‘for’ loop here.

```python
# Python program to illustrate
# a simple for loop

for step in range(5):	
	print(step)

```

###### Modules

‘import’ keyword is used to import a particular module into your python code. For instance consider the following program.

```python
# Python program to illustrate
# math module
import math

def Main():
	num = -85

	# fabs is used to get the absolute
	# value of a decimal
	num = math.fabs(num)
	print(num)
	
	
if __name__=="__main__":
	Main()
```

## List of all keywords in Python

**Keywords in Python** are reserved words that can not be used as a variable name, function name, or any other identifier.

| and                                                          | as                                                           | [assert](https://www.geeksforgeeks.org/python-assert-keyword/) | [break](https://www.geeksforgeeks.org/python-break-statement/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [class](https://www.geeksforgeeks.org/python-classes-and-objects/) | [continue](https://www.geeksforgeeks.org/python-continue-statement/) | def                                                          | [del](https://www.geeksforgeeks.org/python-del-to-delete-objects/) |
| elif                                                         | else                                                         | [except](https://www.geeksforgeeks.org/python-try-except/)   | False                                                        |
| [finally](https://www.geeksforgeeks.org/finally-keyword-in-python/) | [for](https://www.geeksforgeeks.org/python-for-loops/)       | from                                                         | [global](https://www.geeksforgeeks.org/global-keyword-in-python/) |
| if                                                           | [import](https://www.geeksforgeeks.org/import-module-python/) | in                                                           | is                                                           |
| [lambda](https://www.geeksforgeeks.org/python-lambda/)       | None                                                         | nonlocal                                                     | not                                                          |
| or                                                           | [pass](https://www.geeksforgeeks.org/python-pass-statement/) | raise                                                        | [return](https://www.geeksforgeeks.org/python-return-statement/) |
| True                                                         | [try](https://www.geeksforgeeks.org/python-try-except/)      | [while](https://www.geeksforgeeks.org/python-while-loop/)    | [with](https://www.geeksforgeeks.org/with-statement-in-python/) |
| [yield](https://www.geeksforgeeks.org/python-yield-keyword/) |                                                              |                                                              |                                                              |

### True, False, None

- **True:** This keyword is used to represent a boolean true. If a statement is true, “True” is printed.
- **False:** This keyword is used to represent a boolean false. If a statement is false, “False” is printed. 
- **None:** This is a special constant used to denote a null value or a void. It’s important to remember, 0, any empty container(e.g empty list) does not compute to None. 
  It is an object of its datatype – NoneType. It is not possible to create multiple None objects and can assign them to variables.

### and, or, not, in, is

- **and**: This a logical operator in python. “and” **Return the first false value. If not found return last**.
- **or**: This a logical operator in python. “or” Return the first True value.
- **not:** This logical operator inverts the truth value. The truth table for “not” is depicted below. 
- **in:** This keyword is used to check if a container contains a value. This keyword is also used to loop through the container.
- **is:** This keyword is used to test object identity, i.e to check if both the objects take the same memory location or not. 

### Iteration Keywords – for, while, break, continue

- [**for**](https://www.geeksforgeeks.org/python-for-loops/)**:** This keyword is used to control flow and for looping.
- [**while**](https://www.geeksforgeeks.org/python-while-loop/)**:** Has a similar working like “for”, used to control flow and for looping.
- [**break**](https://www.geeksforgeeks.org/python-break-statement/)**:** “break” is used to control the flow of the loop. The statement is used to break out of the loop and passes the control to the statement following immediately after loop.
- [**continue**](https://www.geeksforgeeks.org/python-continue-statement/)**:** “continue” is also used to control the flow of code. The keyword skips the current iteration of the loop but does not end the loop.

### Condtional keywords – if, else, elif

- **if** : It is a control statement for decision making. **Truth expression forces control to go in “if” statement block.**
- **else** : It is a control statement for decision making. **False expression forces control to go in “else” statement block.**
- **elif** : It is a control statement for decision making. It is short for “**else if**“

### def

def keyword is used to declare user defined functions.

### **Return Keywords – Return, Yield**

- [**return :**](https://www.geeksforgeeks.org/python-return-statement/) This keyword is used to return from the function.
- [**yield :**](https://www.geeksforgeeks.org/python-yield-keyword/) This keyword is used like return statement but is used to return a generator.

### class

[**class**](https://www.geeksforgeeks.org/python-classes-and-objects/) keyword is used to declare user defined classes.

### as

**as** keyword is used to create the alias for the module imported. i.e giving a new name to the imported module. E.g import math as mymath.

### pass

[**pass**](https://www.geeksforgeeks.org/python-pass-statement/) is the null statement in python. Nothing happens when this is encountered. This is used to prevent indentation errors and used as a placeholder.

### Lambda

[**Lambda**](https://www.geeksforgeeks.org/python-lambda/) keyword is used to make inline returning functions with no statements allowed internally. 

### Import, From

- [**import**](https://www.geeksforgeeks.org/import-module-python/) **:** This statement is used to include a particular module into current program.
- **from :** Generally used with import, from is used to import particular functionality from the module imported.

### Exception Handling Keywords – try, except, raise, finally, and assert

- [**try :**](https://www.geeksforgeeks.org/python-try-except/) This keyword is used for exception handling, used to catch the errors in the code using the keyword except. Code in “try” block is checked, if there is any type of error, except block is executed.
- [**except :** ](https://www.geeksforgeeks.org/python-try-except/)As explained above, this works together with “try” to catch exceptions.
- [**finally :** ](https://www.geeksforgeeks.org/finally-keyword-in-python/)No matter what is result of the “try” block, block termed “finally” is always executed.
- **raise:** We can raise an exception explicitly with the raise keyword
- [**assert:**](https://www.geeksforgeeks.org/python-assert-keyword/) This function is used for **debugging purposes**. Usually used to check the correctness of code. If a statement is evaluated to be true, nothing happens, but when it is false, “**AssertionError**” is raised. One can also **print a message with the error, separated by a comma**.

### **del**

[**del** ](https://www.geeksforgeeks.org/python-del-to-delete-objects/)is used to delete a reference to an object. Any variable or list value can be deleted using del.

### Global, Nonlocal

- [**global:**](https://www.geeksforgeeks.org/global-keyword-in-python/) This keyword is used to define a variable inside the function to be of a global scope.
- **non-local :** This keyword works similar to the global, but rather than global, this keyword declares a variable to point to variable of outside enclosing function, in case of nested functions.

## How to assign values to variables in Python and other languages

### Method 1: Direct Initialisation Method 

```js
<script>

// JavaScript code to demonstrate variable assignment
// upon condition using Direct Initialisation Method
		// initialising variables directly
		var a = 5;

		// printing value of a
		document.write("The value of a is: " + a);
</script>

```

```python
# Python 3 code to demonstrate variable assignment
# upon condition using Direct Initialisation Method

# initialising variable directly
a = 5

# printing value of a
print ("The value of a is: " + str(a))

```

### Method 2: Using Conditional Operator (?:)

```js
<script>

// JavaScript code to demonstrate variable assignment
// upon condition using Conditional Operator

		// initialising variables using Conditional Operator
		var a = 20 > 10 ? 1 : 0;

		// printing value of a
		document.write("The value of a is: " + a);
</script>

```

```python
# Python3 code to demonstrate variable assignment
# upon condition using Conditional Operator

# Initialising variables using Conditional Operator
a = 1 if 20 > 10 else 0

# Printing value of a
print("The value of a is: " , str(a))
```

## How to print without newline in Python?

```python
# Python 2 code for printing
# on the same line printing
# geeks and geeksforgeeks
# in the same line

print("geeks"),
print("geeksforgeeks")

# array
a = [1, 2, 3, 4]

# printing a element in same
# line
for i in range(4):
	print(a[i]),
```

```python
# Python 3 code for printing
# on the same line printing
# geeks and geeksforgeeks
# in the same line

print("geeks", end =" ")
print("geeksforgeeks")

# array
a = [1, 2, 3, 4]

# printing a element in same
# line
for i in range(4):
	print(a[i], end =" ")
```

```python
# Print without newline in Python 3.x without using for loop

l=[1,2,3,4,5,6]

# using * symbol prints the list
# elements in a single line
print(*l)

#This code is contributed by anuragsingh1022

```

## Taking multiple inputs from user in Python

### **Using** [**split()**](https://www.geeksforgeeks.org/python-string-split/) **method :** 

This function helps in getting multiple inputs from users. It breaks the given input by the specified separator. If a separator is not provided then any white space is a separator. Generally, users use a split() method to split a Python string but one can use it in taking multiple inputs.

**Syntax :** 

```
input().split(separator, maxsplit)
```

**Example :** 

```python
# Python program showing how to
# multiple input using split

# taking two inputs at a time
x, y = input("Enter a two value: ").split()
print("Number of boys: ", x)
print("Number of girls: ", y)
print()

# taking three inputs at a time
x, y, z = input("Enter a three value: ").split()
print("Total number of students: ", x)
print("Number of boys is : ", y)
print("Number of girls is : ", z)
print()

# taking two inputs at a time
a, b = input("Enter a two value: ").split()
print("First number is {} and second number is {}".format(a, b))
print()

# taking multiple inputs at a time
# and type casting using list() function
x = list(map(int, input("Enter a multiple value: ").split()))
print("List of students: ", x)
```

**Using** [**List comprehension**](https://www.geeksforgeeks.org/python-list-comprehension-and-slicing/) **:** 
List comprehension is an elegant way to define and create list in Python. We can create lists just like mathematical statements in one line only. It is also used in getting multiple inputs from a user. 

**Example:** 

```python
# Python program showing
# how to take multiple input
# using List comprehension

# taking two input at a time
x, y = [int(x) for x in input("Enter two value: ").split()]
print("First Number is: ", x)
print("Second Number is: ", y)
print()

# taking three input at a time
x, y, z = [int(x) for x in input("Enter three value: ").split()]
print("First Number is: ", x)
print("Second Number is: ", y)
print("Third Number is: ", z)
print()

# taking two inputs at a time
x, y = [int(x) for x in input("Enter two value: ").split()]
print("First number is {} and second number is {}".format(x, y))
print()

# taking multiple inputs at a time
x = [int(x) for x in input("Enter multiple value: ").split()]
print("Number of list is: ", x)
```

## Output using print() function

This function converts the expressions you pass into a string before writing to the screen. 

> **Syntax:** print(value(s), sep= ‘ ‘, end = ‘\n’, file=file, flush=flush)
> **Parameters:** 
> **value(s) :** Any value, and as many as you like. Will be converted to string before printed 
> **sep=’separator’ :** (Optional) Specify how to separate the objects, if there is more than one.Default :’ ‘ 
> **end=’end’:** (Optional) Specify what to print at the end.Default : ‘\n’ 
> **file :** (Optional) An object with a write method. Default :sys.stdout 
> **flush :** (Optional) A Boolean, specifying if the output is flushed (True) or buffered (False). Default: False
> **Returns:** It returns output to the screen.

```python
#code for disabling the softspace feature
print('G','F','G', sep='')

#for formatting a date
print('09','12','2016', sep='-')

#another example
print('pratik','geeksforgeeks', sep='@')
```

The sep parameter when used with the [end](https://www.geeksforgeeks.org/gfact-50-python-end-parameter-in-print/) parameter it produces awesome results. Some examples by combining the sep and [end](https://www.geeksforgeeks.org/gfact-50-python-end-parameter-in-print/) parameters.

```python
print('G','F', sep='', end='')
print('G')
#\n provides new line after printing the year
print('09','12','2016', sep='-', end='\n')

print('prtk','agarwal', sep='', end='@')
print('geeksforgeeks')
```

## Output Formatting

### **Formatting output using String modulo operator(%) :** 

The string modulo operator ( % ) is still available in Python(3.x) and the user is using it widely. But nowadays the old style of formatting is removed from the language. 

```python
# Python program showing how to use
# string modulo operator(%) to print
# fancier output

# print integer and float value
print("Geeks : %2d, Portal : %5.2f" % (1, 05.333))

# print integer value
print("Total students : %3d, Boys : %2d" % (240, 120))

# print octal value
print("%7.3o" % (25))

# print exponential value
print("%10.3E" % (356.08977))
```

![img](https://media.geeksforgeeks.org/wp-content/uploads/formatedOutput-min-1-1.png)

There are two of those in our example: “%2d” and “%5.2f”. The general syntax for a format placeholder is: 

```tex
 %[flags][width][.precision]type 
```

### **Formatting output using the format method :**

```python
# Python program showing
# use of format() method

# using format() method
print('I love {} for "{}!"'.format('Geeks', 'Geeks'))

# using format() method and referring
# a position of the object
print('{0} and {1}'.format('Geeks', 'Portal'))

print('{1} and {0}'.format('Geeks', 'Portal'))


# the above formatting can also be done by using f-Strings
# Although, this features work only with python 3.6 or above.

print(f"I love {'Geeks'} for \"{'Geeks'}!\"")

# using format() method and referring
# a position of the object
print(f"{'Geeks'} and {'Portal'}")
```


![img](https://media.geeksforgeeks.org/wp-content/uploads/formatedOutput2-min-1.png)

```python
# Python program to
# show format () is
# used in dictionary

tab = {'geeks': 4127, 'for': 4098, 'geek': 8637678}

# using format() in dictionary
print('Geeks: {0[geeks]:d}; For: {0[for]:d}; '
	'Geeks: {0[geek]:d}'.format(tab))

data = dict(fun ="GeeksForGeeks", adj ="Portal")

# using format() in dictionary
print("I love {fun} computer {adj}".format(**data))
```

### **Formatting output using the String method :** 

This output is formatted by using string slicing and concatenation operations. The string type has some methods that help in formatting output in a fancier way. Some of method which help in formatting a output are [str.ljust()](https://www.geeksforgeeks.org/python-string-ljust-rjust-center/), [str.rjust()](https://www.geeksforgeeks.org/python-string-ljust-rjust-center/), [str.centre()](https://www.geeksforgeeks.org/python-string-ljust-rjust-center/)

```python
# Python program to
# format a output using
# string() method

cstr = "I love geeksforgeeks"

# Printing the center aligned
# string with fillchr
print ("Center aligned string with fillchr: ")
print (cstr.center(40, '#'))

# Printing the left aligned
# string with "-" padding
print ("The left aligned string is : ")
print (cstr.ljust(40, '-'))

# Printing the right aligned string
# with "-" padding
print ("The right aligned string is : ")
print (cstr.rjust(40, '-'))
```

## Packing and Unpacking Arguments in Python

We use two operators * (for tuples) and ** (for dictionaries).

```python
# A Python program to demonstrate need
# of packing and unpacking

# A sample function that takes 4 arguments
# and prints them.
def fun(a, b, c, d):
	print(a, b, c, d)

# Driver Code
my_list = [1, 2, 3, 4]

# This doesn't work
fun(my_list)
```

**Unpacking** 
We can use ***** to unpack the list so that all elements of it can be passed as different parameters.

```python
# A sample function that takes 4 arguments
# and prints the,
def fun(a, b, c, d):
	print(a, b, c, d)

# Driver Code
my_list = [1, 2, 3, 4]

# Unpacking list into four arguments
fun(*my_list)
```

We need to keep in mind that the no. of arguments must be the same as the length of the list that we are unpacking for the arguments.

```python
# Error when len(args) != no of actual arguments
# required by the funcntion

args = [0, 1, 4, 9]


def func(a, b, c):
	return a + b + c


# calling function with unpacking args
func(*args)
```

**Packing** 
When we don’t know how many arguments need to be passed to a python function, we can use Packing to pack all arguments in a tuple. 

```python
# A Python program to demonstrate use
# of packing

# This function uses packing to sum
# unknown number of arguments
def mySum(*args):
	return sum(args)

# Driver code
print(mySum(1, 2, 3, 4, 5))
print(mySum(10, 20))
```

**Packing and Unpacking** 
Below is an example that shows both packing and unpacking. 

```python
# A Python program to demonstrate both packing and
# unpacking.

# A sample python function that takes three arguments
# and prints them
def fun1(a, b, c):
	print(a, b, c)

# Another sample function.
# This is an example of PACKING. All arguments passed
# to fun2 are packed into tuple *args.
def fun2(*args):

	# Convert args tuple to a list so we can modify it
	args = list(args)

	# Modifying args
	args[0] = 'Geeksforgeeks'
	args[1] = 'awesome'

	# UNPACKING args and calling fun1()
	fun1(*args)

# Driver code
fun2('Hello', 'beautiful', 'world!')
```

***\* is used for dictionaries** 

```python
# A sample program to demonstrate unpacking of
# dictionary items using **
def fun(a, b, c):
	print(a, b, c)

# A call with unpacking of dictionary
d = {'a':2, 'b':4, 'c':10}
fun(**d)
```

Applications and Important Points 

1. Used in socket programming to send a vast number of requests to a server. 
2. Used in the Django framework to send variable arguments to view functions. 
3. There are wrapper functions that require us to pass in variable arguments.
4. Modification of arguments becomes easy, but at the same time validation is not proper, so they must be used with care. 

## Swap two variables in one line

**Python:** In Python, there is a simple and syntactically neat construct to swap variables, we just need to write “x, y = y, x”.

**C/C++:** Below is one generally provided classical solution.

```c
// Swap using bitwise XOR (Correct Solution in C/C++)
// sequence point introduced using comma.
(x ^= y), (y ^= x), (x ^= y);
```

**Java:** In Java, we can use “x = x ^ y ^ (y = x);” Note the expressions are evaluated from left to right. If x = 5 and y = 10 initially, the expression is equivalent to “x = 5 ^ 10 ^ (y = 5);”.

**JavaScript:** Using destructing assignment, we can simply achieve swapping using this one line. 

> [x,y]=[y,x]

## Private Variables in Python

### **Mangling and how it works**

In Python, there is something called name mangling, which means that there is limited support for a valid use-case for class-private members basically to avoid name clashes of names with names defined by subclasses. Any identifier of the form __geek (at least two leading underscores or at most one trailing underscore) is replaced with _classname__geek, where classname is the current class name with a leading underscore(s) stripped.

```python
# Python code to illustrate how mangling works
class Map:
	def __init__(self, iterate):
		self.list = []
		self.__geek(iterate)
	def geek(self, iterate):
		for item in iterate:
			self.list.append(item)

	# private copy of original geek() method
	__geek = geek

class MapSubclass(Map):
	
	# provides new signature for geek() but
	# does not break __init__()
	def geek(self, key, value):	
		for i in zip(keys, value):
			self.list.append(i)
```

### **_Single Leading Underscores**

So basically one underline at the beginning of a method, function, or data member means you shouldn’t access this method because it’s not part of the API. Let’s look at this snippet of code: 

```python
# Python code to illustrate
# how single underscore works
def _get_errors(self):
	if self._errors is None:
		self.full_clean()
	return self._errors

errors = property(_get_errors)
```

The snippet is taken from the Django source code (django/forms/forms.py). This suggests that errors are property, and it’s also a part of the API, but the method, _get_errors, is “private”, so one shouldn’t access it.

### **__Double Leading Underscores**

Two underlines, in the beginning, cause a lot of confusion. This is about syntax rather than a convention. double underscore will mangle the attribute names of a class to avoid conflicts of attribute names between classes. For example: 

```python
# Python code to illustrate how double
# underscore at the beginning works
class Geek:
	def _single_method(self):
		pass
	def __double_method(self): # for mangling
		pass
class Pyth(Geek):
	def __double_method(self): # for mangling
		pass
```

### **__Double leading and Double trailing underscores__**

There’s another case of double leading and trailing underscores. We follow this while using special variables or methods (called “magic method”) such as__len__, __init__. These methods provide special syntactic features to the names. For example, __file__ indicates the location of the Python file, __eq__ is executed when a == b expression is executed. 

```python
# Python code to illustrate double leading and
# double trailing underscore works
class Geek:

	# '__init__' for initializing, this is a
	# special method
	def __init__(self, ab):
		self.ab = ab

	# custom special method. try not to use it
	def __custom__(self):
		pass
```

## Python Operators

### **Arithmetic Operators**

It is used to performing mathematical operations like addition, subtraction, multiplication, and division.

| Operator | Description                                                  | Syntax |
| :------- | :----------------------------------------------------------- | :----- |
| +        | Addition: adds two operands                                  | x + y  |
| –        | Subtraction: subtracts two operands                          | x – y  |
| *        | Multiplication: multiplies two operands                      | x * y  |
| /        | Division (float): divides the first operand by the second    | x / y  |
| //       | Division (floor): divides the first operand by the second    | x // y |
| %        | Modulus: returns the remainder when the first operand is divided by the second | x % y  |
| **       | Power: Returns first raised to power second                  | x ** y |

### Comparison **Operators**

| Operator | Description                                                  | Syntax |
| :------- | :----------------------------------------------------------- | :----- |
| >        | Greater than: True if the left operand is greater than the right | x > y  |
| <        | Less than: True if the left operand is less than the right   | x < y  |
| ==       | Equal to: True if both operands are equal                    | x == y |
| !=       | Not equal to – True if operands are not equal                | x != y |
| >=       | Greater than or equal to True if the left operand is greater than or equal to the right | x >= y |
| <=       | Less than or equal to True if the left operand is less than or equal to the right | x <= y |

### **Logical Operators**

It is used to combine conditional statements.

| Operator | Description                                        | Syntax  |
| :------- | :------------------------------------------------- | :------ |
| and      | Logical AND: True if both the operands are true    | x and y |
| or       | Logical OR: True if either of the operands is true | x or y  |
| not      | Logical NOT: True if the operand is false          | not x   |

### **Bitwise Operators**

 These are used to operate on binary numbers.

| Operator | Description         | Syntax |
| :------- | :------------------ | :----- |
| &        | Bitwise AND         | x & y  |
| \|       | Bitwise OR          | x \| y |
| ~        | Bitwise NOT         | ~x     |
| ^        | Bitwise XOR         | x ^ y  |
| >>       | Bitwise right shift | x>>    |
| <<       | Bitwise left shift  | x<<    |

### **Assignment Operators** 

It is used to assigning values to the variables.

| Operator | Description                                                  | Syntax              |
| :------- | :----------------------------------------------------------- | :------------------ |
| =        | Assign value of right side of expression to left side operand | x = y + z           |
| +=       | Add AND: Add right-side operand with left side operand and then assign to left operand | a+=b   a=a+b        |
| -=       | Subtract AND: Subtract right operand from left operand and then assign to left operand | a-=b   a=a-b        |
| *=       | Multiply AND: Multiply right operand with left operand and then assign to left operand | a*=b   a=a*b        |
| /=       | Divide AND: Divide left operand with right operand and then assign to left operand | a/=b   a=a/b        |
| %=       | Modulus AND: Takes modulus using left and right operands and assign the result to left operand | a%=b   a=a%b        |
| //=      | Divide(floor) AND: Divide left operand with right operand and then assign the value(floor) to left operand | a//=b   a=a//b      |
| **=      | Exponent AND: Calculate exponent(raise power) value using operands and assign value to left operand | a**=b   a=a**b      |
| &=       | Performs Bitwise AND on operands and assign value to left operand | a&=b   a=a&b        |
| \|=      | Performs Bitwise OR on operands and assign value to left operand | a\|=b   a=a\|b      |
| ^=       | Performs Bitwise xOR on operands and assign value to left operand | a^=b   a=a^b        |
| >>=      | Performs Bitwise right shift on operands and assign value to left operand | a>>=b   a=a>>b      |
| <<=      | Performs Bitwise left shift on operands and assign value to left operand | a <<= b   a= a << b |

### **Identity Operators**

**is** and **is not** are the identity operators both are used to check if two values are located on the same part of the memory. Two variables that are equal do not imply that they are identical. 

```tex
is          True if the operands are identical 
is not      True if the operands are not identical 
```

### **Membership Operators**

**in** and **not in** are the membership operators; used to test whether a value or variable is in a sequence.

```tex
in            True if value is found in the sequence
not in        True if value is not found in the sequence
```

### Ternary Operator in Python

It simply allows testing a condition in a **single line** replacing the multiline if-else making the code compact.


**Syntax :** 

```python
[on_true] if [expression] else [on_false]
```

### **Important Points:** 

- First the given condition is evaluated (a < b), then either a or b is returned based on the Boolean value returned by the condition
- Order of the arguments in the operator is different from other languages like C/C++ (See [C/C++ ternary operators](https://www.geeksforgeeks.org/cc-ternary-operator-some-interesting-observations/)). 
- Conditional expressions have the lowest priority amongst all Python operations.

### Division Operators in Python

The “//” operator is used to return the closest integer value which is less than or equal to a specified expression or value. So from the above code, 5//2 returns 2. You know that 5/2 is 2.5, the closest integer which is less than or equal is 2[5//2].( it is inverse to the normal maths, in normal maths the value is 3).

**The real floor division operator is “//”. It returns floor value for both integer and floating point arguments.** 

## Operator Overloading in Python

Operator Overloading means giving extended meaning beyond their predefined operational meaning. For example operator + is used to add two integers as well as join two strings and merge two lists. It is achievable because ‘+’ operator is overloaded by int class and str class. You might have noticed that the same built-in operator or function shows different behavior for objects of different classes, this is called *Operator Overloading*. 

```python
# Python program to show use of
# + operator for different purposes.

print(1 + 2)

# concatenate two strings
print("Geeks"+"For")

# Product two numbers
print(3 * 4)

# Repeat the String
print("Geeks"*4)

```

```python
# Python program to overload equality
# and less than operators

class A:
	def __init__(self, a):
		self.a = a
	def __lt__(self, other):
		if(self.a<other.a):
			return "ob1 is lessthan ob2"
		else:
			return "ob2 is less than ob1"
	def __eq__(self, other):
		if(self.a == other.a):
			return "Both are equal"
		else:
			return "Not equal"
				
ob1 = A(2)
ob2 = A(3)
print(ob1 < ob2)

ob3 = A(4)
ob4 = A(4)
print(ob1 == ob2)

```

```python
# Python program to overload equality
# and less than operators

class A:
	def __init__(self, a):
		self.a = a
	def __lt__(self, other):
		if(self.a<other.a):
			return "ob1 is lessthan ob2"
		else:
			return "ob2 is less than ob1"
	def __eq__(self, other):
		if(self.a == other.a):
			return "Both are equal"
		else:
			return "Not equal"
				
ob1 = A(2)
ob2 = A(3)
print(ob1 < ob2)

ob3 = A(4)
ob4 = A(4)
print(ob1 == ob2)

```



#### Python magic methods or special functions for operator overloading

#### [Binary Operators](https://www.geeksforgeeks.org/basic-operators-python/):

| Operator | Magic Method              |
| :------- | :------------------------ |
| **+**    | __add__(self, other)      |
| **–**    | __sub__(self, other)      |
| *****    | __mul__(self, other)      |
| **/**    | __truediv__(self, other)  |
| **//**   | __floordiv__(self, other) |
| **%**    | __mod__(self, other)      |
| ***\***  | __pow__(self, other)      |
| >>       | __rshift__(self, other)   |
| <<       | __lshift__(self, other)   |
| &        | __and__(self, other)      |
| \|       | __or__(self, other)       |
| ^        | __xor__(self, other)      |

#### Comparison Operators :

| Operator | Magic Method        |
| :------- | :------------------ |
| **<**    | __LT__(SELF, OTHER) |
| **>**    | __GT__(SELF, OTHER) |
| **<=**   | __LE__(SELF, OTHER) |
| **>=**   | __GE__(SELF, OTHER) |
| **==**   | __EQ__(SELF, OTHER) |
| **!=**   | __NE__(SELF, OTHER) |

#### Assignment Operators :

| Operator | Magic Method               |
| :------- | :------------------------- |
| **-=**   | __ISUB__(SELF, OTHER)      |
| **+=**   | __IADD__(SELF, OTHER)      |
| ***=**   | __IMUL__(SELF, OTHER)      |
| **/=**   | __IDIV__(SELF, OTHER)      |
| **//=**  | __IFLOORDIV__(SELF, OTHER) |
| **%=**   | __IMOD__(SELF, OTHER)      |
| ***\*=** | __IPOW__(SELF, OTHER)      |
| **>>=**  | __IRSHIFT__(SELF, OTHER)   |
| **<<=**  | __ILSHIFT__(SELF, OTHER)   |
| **&=**   | __IAND__(SELF, OTHER)      |
| **\|=**  | __IOR__(SELF, OTHER)       |
| **^=**   | __IXOR__(SELF, OTHER)      |

#### Unary Operators :

| Operator | Magic Method            |
| :------- | :---------------------- |
| **–**    | __NEG__(SELF, OTHER)    |
| **+**    | __POS__(SELF, OTHER)    |
| **~**    | __INVERT__(SELF, OTHER) |

## Any All in Python

**Any**
Returns true if any of the items is True. It returns False if empty or all are false. Any can be thought of as a sequence of OR operations on the provided iterables.
It short circuit the execution i.e. stop the execution as soon as the result is known.

**Syntax :** any(list of iterables)

```python
# Since all are false, false is returned
print (any([False, False, False, False]))

# Here the method will short-circuit at the
# second item (True) and will return True.
print (any([False, True, False, False]))

# Here the method will short-circuit at the
# first (True) and will return True.
print (any([True, False, False, False]))
```

**All**
Returns true if all of the items are True (or if the iterable is empty). All can be thought of as a sequence of AND operations on the provided iterables. It also short circuit the execution i.e. stop the execution as soon as the result is known.

**Syntax :** all(list of iterables)

```python
# Here all the iterables are True so all
# will return True and the same will be printed
print (all([True, True, True, True]))

# Here the method will short-circuit at the
# first item (False) and will return False.
print (all([False, True, True, False]))

# This statement will return False, as no
# True is found in the iterables
print (all([False, False, False]))
```

## Difference between == and is operator in Python

```python
# python3 code to
# illustrate the
# difference between
# == and is operator
# [] is an empty list
list1 = []
list2 = []
list3=list1

if (list1 == list2):
	print("True")
else:
	print("False")

if (list1 is list2):
	print("True")
else:
	print("False")

if (list1 is list3):
	print("True")
else:
	print("False")

list3 = list3 + list2

if (list1 is list3):
	print("True")
else:
	print("False")

```

## Operator Functions in Python

Some of the basic functions are covered in this article.

**1. add(a, b)** :- This functions returns **addition** of the given arguments.
Operation – **a + b.**

**2. sub(a, b)** :- This functions returns **difference** of the given arguments.
Operation – **a – b.**

**3. mul(a, b)** :- This functions returns **product** of the given arguments.
Operation – **a \* b.**

**4. truediv(a,b)** :- This functions returns **division** of the given arguments.
Operation – **a / b.**

**5. floordiv(a,b)** :- This functions also returns division of the given arguments. But the value is floored value i.e. **returns greatest small integer**.
Operation – **a // b.**

**6. pow(a,b)** :- This functions returns **exponentiation** of the given arguments.
Operation – **a \** b.**

**7. mod(a,b)** :- This functions returns **modulus** of the given arguments.
Operation – **a % b.**

**8. lt(a, b)** :- This function is used to **check if a is less than b or not**. Returns true if a is less than b, else returns false.
Operation – **a < b**.

**9. le(a, b)** :- This function is used to **check if a is less than or equal to b or not**. Returns true if a is less than or equal to b, else returns false.
Operation – **a <= b**.

**10. eq(a, b)** :- This function is used to **check if a is equal to b or not**. Returns true if a is equal to b, else returns false.
Operation – **a == b**.

**11. gt(a,b)** :- This function is used to **check if a is greater than b or not**. Returns true if a is greater than b, else returns false.
Operation – **a > b**.

**12. ge(a,b)** :- This function is used to **check if a is greater than or equal to b or not**. Returns true if a is greater than or equal to b, else returns false.
Operation – **a >= b**.

**13. ne(a,b)** :- This function is used to **check if a is not equal to b or is equal**. Returns true if a is not equal to b, else returns false.
Operation – **a != b**.

```python
# Python code to demonstrate working of
# add(), sub(), mul()

# importing operator module
import operator
# Initializing variables
a = 4
b = 3
# using add() to add two numbers
print ("The addition of numbers is :",end="");
print (operator.add(a, b))
# using sub() to subtract two numbers
print ("The difference of numbers is :",end="");
print (operator.sub(a, b))
# using mul() to multiply two numbers
print ("The product of numbers is :",end="");
print (operator.mul(a, b))
```

## Inplace Operators in Python

Python in its definition provides methods to perform inplace operations, i.e **doing assignment and computation in a single statement** using “**operator**” module. For example,

```tiki wiki
x += y is equivalent to x = operator.iadd(x, y) 
```

**Some Important Inplace operations** :

**1. iadd()** :- This function is used to **assign and add the current value**. This operation does “**a+=b**” operation. Assigning is **not** performed in case of immutable containers, such as strings, numbers and tuples.

**2. iconcat()** :- This function is used to **concat** one string at end of second.

**3. isub()** :- This function is used to **assign and subtract the current value**. This operation does “**a-=b**” operation. Assigning is **not** performed in case of immutable containers, such as strings, numbers and tuples.

**4. imul()** :- This function is used to **assign and multiply the current value**. This operation does “**a\*=b**” operation. Assigning is **not** performed in case of immutable containers, such as strings, numbers and tuples.

**5. itruediv()** :- This function is used to **assign and divide the current value**. This operation does “**a/=b**” operation. Assigning is **not** performed in case of immutable containers, such as strings, numbers and tuples.

**6. imod()** :- This function is used to **assign and return remainder** . This operation does “**a%=b**” operation. Assigning is **not** performed in case of immutable containers, such as strings, numbers and tuples.

```python
# Python code to demonstrate the working of
# iadd() and iconcat()

# importing operator to handle operator operations
import operator
# using iadd() to add and assign value
x = operator.iadd(2, 3);
# printing the modified value
print ("The value after adding and assigning : ", end="")
print (x)
# initializing values
y = "geeks"
z = "forgeeks"
# using iconcat() to concat the sequences
y = operator.iconcat(y, z)
# using iconcat() to concat sequences
print ("The string after concatenation is : ", end="")
print (y)
```

## Looping Techniques in Python

**Different looping techniques using Python data structures  are:** 

- **Using enumerate():**  enumerate() is used to loop through the containers printing the index number along with the value present in that particular index.

```python
# python code to demonstrate working of enumerate()

for key, value in enumerate(['The', 'Big', 'Bang', 'Theory']):
	print(key, value)
```

- **Using zip():** zip() is used to combine 2 similar containers(list-list or dict-dict) printing the values sequentially. The loop exists only till the smaller container ends

```python
# python code to demonstrate working of zip()

# initializing list
questions = ['name', 'colour', 'shape']
answers = ['apple', 'red', 'a circle']

# using zip() to combine two containers
# and print values
for question, answer in zip(questions, answers):
	print('What is your {0}? I am {1}.'.format(question, answer))

```

- **Using iteritem():** iteritems() is used to loop through the dictionary printing the dictionary key-value pair sequentially.

```python
# python code to demonstrate working of iteritems(),items()

d = { "geeks" : "for", "only" : "geeks" }

# using iteritems to print the dictionary key-value pair
print ("The key value pair using iteritems is : ")
for i,j in d.iteritems():
	print i,j
	
# using items to print the dictionary key-value pair
print ("The key value pair using items is : ")
for i,j in d.items():
	print i,j
```

- **Using items():** items() performs the similar task on dictionary as iteritems() but have certain disadvantages when compared with iteritems().
  - It is **very time-consuming**. Calling it on large dictionaries consumes quite a lot of time.
  - It takes a **lot of memory**. Sometimes takes double the memory when called on a dictionary.

- **Using sorted():**  sorted() is used to print the **container is sorted order**. It **doesn’t sort the container** but just prints the container in sorted order for 1 instance. The use of **set() can be combined to remove duplicate** occurrences.

```python
# python code to demonstrate working of sorted()

# initializing list
lis = [ 1 , 3, 5, 6, 2, 1, 3 ]

# using sorted() to print the list in sorted order
print ("The list in sorted order is : ")
for i in sorted(lis) :
	print (i,end=" ")
  
print ("\r")
# using sorted() and set() to print the list in sorted order
# use of set() removes duplicates.
print ("The list in sorted order (without duplicates) is : ")
for i in sorted(set(lis)) :
	print (i,end=" ")
```

- **Using reversed():** reversed() is used to print the values of the **container in the reversed order**. It does not reflect any changes to the original list

```python
# python code to demonstrate working of reversed()

# initializing list
lis = [ 1 , 3, 5, 6, 2, 1, 3 ]


# using revered() to print the list in reversed order
print ("The list in reversed order is : ")
for i in reversed(lis) :
	print (i,end=" ")

```



##### Advantages

- These techniques are quick to use and reduce coding effort. for, while loops need the entire structure of the container to be changed.
- These Looping techniques do not require any structural changes to the container. They have keywords that present the exact purpose of usage. Whereas, no pre-predictions or guesses can be made in for, while loop i.e not easily understand the purpose at a glance.
- Looping technique makes the code more concise than using for & while looping.

## Star Pattern in Python

```python
# Python 3.x code to demonstrate star pattern

# Function to demonstrate printing pattern
def pypart(n):
	myList = []
	for i in range(1,n+1):
		myList.append("*"*i)
	print("\n".join(myList))

# Driver Code
n = 5
pypart(n)

```

## Chaining comparison operators in Python

```python
# Python code to illustrate
# chaining comparison operators
x = 5
print(1 < x < 10)
print(10 < x < 20 )
print(x < 10 < x*10 < 100)
print(10 > x <= 9)
print(5 == x > 4)
```

```python
# Python code to illustrate
# chaining comparison operators
a, b, c, d, e, f = 0, 5, 12, 0, 15, 15
exp1 = a <= b < c > d is not e is f
exp2 = a is d > f is not c
print(exp1)
print(exp2)
```

## Using else conditional statement with for loop in python

```python
# Python 3.x program to check if an array consists
# of even number
def contains_even_number(l):
	for ele in l:
		if ele % 2 == 0:
			print ("list contains an even number")
			break

	# This else executes only if break is NEVER
	# reached and loop terminated after all iterations.
	else:	
		print ("list does not contain an even number")

# Driver code
print ("For List 1:")
contains_even_number([1, 9, 8])
print (" \nFor List 2:")
contains_even_number([1, 3, 5])
```

## **What is the replacement of Switch Case in Python?**

Unlike every other programming language we have used before, Python does not have a switch or case statement. To get around this fact, we use [dictionary mapping](https://www.youtube.com/watch?v=z7z_e5-l2yE).

```python
# Function to convert number into string
# Switcher is dictionary data type here
def numbers_to_strings(argument):
	switcher = {
		0: "zero",
		1: "one",
		2: "two",
	}

	# get() method of dictionary data type returns
	# value of passed argument if it is present
	# in dictionary otherwise second argument will
	# be assigned as default value of passed argument
	return switcher.get(argument, "nothing")

# Driver program
if __name__ == "__main__":
	argument=0
	print (numbers_to_strings(argument))
```

## Generators in Python

1. **Generator-Function :** A generator-function is defined like a normal function, but whenever it needs to generate a value, it does so with the [yield keyword ](https://www.geeksforgeeks.org/use-yield-keyword-instead-return-keyword-python/)rather than return. If the body of a def contains yield, the function automatically becomes a generator function.
2. **Generator-Object :** Generator functions return a generator object. Generator objects are used either by calling the next method on the generator object or using the generator object in a “for in” loop 

So a generator function returns an generator object that is iterable, i.e., can be used as an [Iterators](https://www.geeksforgeeks.org/iterators-in-python/) .

```python
# A simple generator for Fibonacci Numbers
def fib(limit):
	
	# Initialize first two Fibonacci Numbers
	a, b = 0, 1

	# One by one yield next Fibonacci Number
	while a < limit:
		yield a
		a, b = b, a + b

# Create a generator object
x = fib(5)

# Iterating over the generator object using next
print(x.next()) # In Python 3, __next__()
print(x.next())
print(x.next())
print(x.next())
print(x.next())

# Iterating over the generator object using for
# in loop.
print("\nUsing for in loop")
for i in fib(5):
	print(i)
```

## Python | Generator Expressions

In **Python**, to create iterators, we can use both regular functions and generators. **Generators** are written just like a normal function but we use `yield()` instead of `return()` for returning a result. It is more powerful as a tool to implement iterators. It is easy and more convenient to implement because it offers the evaluation of elements on demand. Unlike regular functions which on encountering a return statement terminates entirely, generators use yield statement in which the state of the function is saved from the last call and can be picked up or resumed the next time we call a generator function. Another great advantage of the generator over a list is that it takes much less memory.
In addition to that, two more functions `_next_()` and `_iter_()` make the generator function more compact and reliable. Example :

```python
# Python code to illustrate generator, yield() and next().
def generator():
	t = 1
	print ('First result is ',t)
	yield t

	t += 1
	print ('Second result is ',t)
	yield t

	t += 1
	print('Third result is ',t)
	yield t

call = generator()
next(call)
next(call)
next(call)
```

**Difference between Generator function and Normal function –**

- Once the function yields, the function is paused and the control is transferred to the caller.
- When the function terminates, StopIteration is raised automatically on further calls.
- Local variables and their states are remembered between successive calls.
- Generator function contains one or more yield statement instead of return statement.
- As the methods like `_next_()` and `_iter_()` are implemented automatically, we can iterate through the items using `next()`.

## Class method vs Static method in Python

### **Class Method**

The @classmethod decorator is a built-in [function decorator](https://www.geeksforgeeks.org/function-decorators-in-python-set-1-introduction/) that is an expression that gets evaluated after your function is defined. The result of that evaluation shadows your function definition. 
A class method receives the class as an implicit first argument, just like an instance method receives the instance 
**Syntax:** 

```python
class C(object):
    @classmethod
    def fun(cls, arg1, arg2, ...):
       ....
fun: function that needs to be converted into a class method
returns: a class method for function.
```

- A class method is a method that is bound to the class and not the object of the class.
- They have the access to the state of the class as it takes a class parameter that points to the class and not the object instance.
- It can modify a class state that would apply across all the instances of the class. For example, it can modify a class variable that will be applicable to all the instances.
   

### **Static Method**

A static method does not receive an implicit first argument. 

**Syntax:** 

```python
class C(object):
    @staticmethod
    def fun(arg1, arg2, ...):
        ...
returns: a static method for function fun.
```

- A static method is also a method that is bound to the class and not the object of the class.
- A static method can’t access or modify the class state.
- It is present in a class because it makes sense for the method to be present in class.

### **Class method vs Static Method**

- A class method takes cls as the first parameter while a static method needs no specific parameters.
- A class method can access or modify the class state while a static method can’t access or modify it.
- In general, static methods know nothing about the class state. They are utility-type methods that take some parameters and work upon those parameters. On the other hand class methods must have class as a parameter.
- We use @classmethod decorator in python to create a class method and we use @staticmethod decorator to create a static method in python.

### **When to use what?**

- We generally use class method to create factory methods. Factory methods return class objects ( similar to a constructor ) for different use cases.
- We generally use static methods to create utility functions.

```python
# Python program to demonstrate
# use of class method and static method.
from datetime import date

class Person:
	def __init__(self, name, age):
		self.name = name
		self.age = age
	
	# a class method to create a Person object by birth year.
	@classmethod
	def fromBirthYear(cls, name, year):
		return cls(name, date.today().year - year)
	
	# a static method to check if a Person is adult or not.
	@staticmethod
	def isAdult(age):
		return age > 18

person1 = Person('mayank', 21)
person2 = Person.fromBirthYear('mayank', 1996)

print (person1.age)
print (person2.age)

# print the result
print (Person.isAdult(22))

```

