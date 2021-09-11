---
sidebar_position: 3
---

## CSS Modules with React: The Complete Guide

**Setting up CSS modules with** [**Webpack**](https://webpack.github.io/)

Excited to try out modular CSS in your own projects ? Setting up CSS modules in your react projects with [webpack](https://webpack.github.io/) is a piece of cake.You can enable it through loader options from **css-loader** in webpack config file as below:

```js
rules: [
  {
    test: /\.css$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: "[local]___[hash:base64:5]",
        },
      },
    ],
  },
];
```

CSS module makes CSS classes local for every component declared within by adding hashes in class names which are unique to each component, thus preventing CSS classes from one component overriding or conflicting with CSS in other components.

Here is a simple example:

**panel.js**

```js
import React from "react";
import style from "./panel.css";const Panel = () => {   return (
     <div className={style.panelDefault}>
        <div className={style.panelBody}>A Basic Panel</div>
     </div>
      )
}export default Panel;
```

**panel.css**

```css
.panelDefault {
  border-color: #ddd;
}
.panelBody {
  padding: 15px;
}
```

**Generated HTML**

```html
<div class="panelDefault___3JNN6">
  <div class="panelBody___3OqQA">A Basic Panel</div>
</div>
```

**Generated CSS**

```css
.panelDefault___3JNN6 {
  border-color: #ddd;
}
.panelBody___3OqQA {
  padding: 15px;
}
```

Here we’re importing **style** as object from our CSS file.The **style** object maps class names from the CSS file to dynamically scoped class names that are local to specific component.

**style object**

```js
{
  panelBody:"panelBody___3OqQA",
  panelDefault:"panelDefault___3JNN6"
}
```

Using class names with dashes will result in **unexpected token error.**

```html
<div className="{style.panel-default}">
  <div className="{style.panel-body}">A Basic Panel</div>
</div>
```

![img](https://miro.medium.com/max/1108/1*6t6PVx6RonNGn3gLUEhFeg.png)

If you want dashed classes in your projects, you can use bracket notation as below:

```html
<div className="{style[panel-default]}">
  <div className="{style[panel-body]}">A Basic Panel</div>
</div>
```

However, you can write classes with BEM naming convention conveniently as below:

```html
<div className="{style.panel__default}">
  <div className="{style.panel__body}">A Basic Panel</div>
</div>
```

And it is important to note that, if you are writing some CSS in your CSS file and do not use them in your template, webpack will skip any unused CSS in generated output, thus, reducing the code size. Pretty slick huh !!

# **Writing multiple classes**

If you are new to CSS modules, writing multiple class names in your HTML element or tag can be confusing. However, it is fairly simple with nifty little trick using ES6 string literal. This approach can also help you mix classes that may be local to component with global classes (may be from CSS libraries like bootstrap).

```html
<div className="{`${style.panel}" ${style.panelDefault} container`}>
  <div className="{style.panel__body}">A Basic Panel</div>
</div>
.panel { background-color: #eee; }.panelDefault { border-color: #ddd;
}.panelBody { padding: 15px; }
```

Also you can use this excellent [**classnames**](https://www.npmjs.com/package/classnames) library for handling multiple classnames.

```jsx
@import cn from "classnames";
<div className={cn(style.panel,style.panelDefault,container)}>
  <div className={style.panel__body}>A Basic Panel</div>
</div>
```

Here classes **panel** and **panelDefault** are specific to **Panel component** and global class **container** comes from bootstrap applicable to whole site.

An interesting thing to notice while writing multiple classes is that, if were to define class in html structure and do not define that class in CSS file, the genereated HTML will literally have **undefined** class. I find that kind of silly.

So, if you were to comment out the following

```css
//.panel {
//   background-color: #eee;
//}.panelDefault {
   border-color: #ddd;
}.panelBody {
   padding: 15px;
}
```

The generated HTML will be:

```html
<div class="undefined panelDefault___3JNN6">
  <div class="panelBody___3OqQA">A Basic Panel</div>
</div>
```

# **Sharing variables between CSS and JS**

One of the things that excites me about CSS modules is ability to export variables from CSS file for use in JS file. We can export any SASS or LESS variable or any CSS property.

**panel.css**

```css
:export {
  brandColor: $blue;
  baseFontSize: $base-font-size;
}
```

We can access the variables from our JS file as below:

**panel**.js

```js
import style from "./panel.css";
console.log(style.brandColor); //#45fdf3
console.log(style.baseFontSize); //14px
```

# **Sharing styles between components**

CSS modules strongly discourages global CSS and every CSS code is specific to their component and isolated from rest of the project. I find may new developers concerned about writing same CSS across multiple components due to its local scope. With CSS Modules, sharing styles among components is explicit using the excellent **composition feature** which is similar to using mixins in SASS.

shared.css

```css
.panel {
  background-color: #eee;
  border-radius: 4px;
  padding: 20px 30px;
}
```

panel.css

```css
.panelDefault{
   composes: panel from './panel.css";
   max-width: 640px;
   margin-bottom: 24px;
}
```

# **Targeting global CSS**

Every css we write inside a component’s css file is locally scoped and sometimes it is necessary to target a class that is global or outside the scope css file in which it is defined.

Also, one of the challenges I have faced with this pattern is, JS generated classes are global and are not locally scoped. For example, for a navigation bar, **active** class name is added to navigation link based on which page is active. And such class names generated by jQuery **addClass method** or using react’s native approaches are globally scoped. Still, we can use this simple approach to target global CSS classname as follows:

**panel.css**

```css
:global .active {
  color: #fff;
  border-bottom: 1px solid teal;
}
:global .wrapper {
  background-color: teal;
}
```

There are also scenarios where we would want to write some global CSS applicable to entire webpage or shared among different components. Also, developers are also interested in using CSS frameworks like semantic UI or foundation along with CSS modules. And there is a little extra step to get this working.

With CSS modules, any CSS file a component is importing is local to the component as we are instructing webpack to map our CSS class names to unique hash based identifiers.

A simple approach can be: define all locally scoped CSS along with each component js file and define global CSS in a separate direactory.

All the CSS files inside **app directory** are locally scoped.

![img](https://miro.medium.com/max/706/1*uP7dV1-a5aZfxQScelPg1w.png)

locally coped css files

And CSS files inside **styles directory** can be global to whole site.

![img](https://miro.medium.com/max/718/1*c6LsyMZ7sbH5pAs2ltY_YQ.png)

To get this approach working, we have to add a simple configuration in our webpack config file.

```js
rules: [
  {
    test: /\.css$/,
    include: "/src/app",
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: "[local]___[hash:base64:5]",
        },
      },
    ],
  },
  {
    test: /\.css$/,
    include: "/src/styles",
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
        },
      },
    ],
  },
];
```

In above example, we are adding separate rule for **app directory** to use localized class files and **styles directory** to allow global CSS files. You can also try some other configurations with webpack to make writing global CSS easier as you prefer. :)

# **CSS module does not affect element and attribute selectors**

With CSS modules, class names are locally scoped to component in which it is defined, however, html element and attribute selectors are untouched.

**panel.js**

```js
<div class="panelDefault">
  <div class="panelBody">
    <a href="http://yipl.com.np">YIPL</a>
  </div>
</div>
```

**panel.css**

```css
[href^="http:"] {
  color: salmon;
}
a {
  text-decoration: none;
}
```

Here, above styles are global and applied across entire project. However you can use locally scoped class name with element or attribute selector to achieve locally scoped CSS.

```css
.panelBody [href^="http:"] {
  color: salmon;
}
.panelBody a {
  text-decoration: none;
}
```

# **Do more with** [**react-css-modules**](https://github.com/gajus/react-css-modules)

**react-css-modules** is a simple package that leverages the existing CSS module while improving its little quirks and issues.

You might run into following issues with plain CSS module implementation:

- Have to use camelCase naming for CSS classes
- Mixing local and global CSS cane be difficult
- Have to use style object to refer to local class name in html
- Can be cumbersome to apply multiple class names to html elements

**react-css-modules** improves upon above issues and provides better implementation. You can also try out [babel-plugin-react-css-plugin](https://github.com/gajus/babel-plugin-react-css-modules), which is lightweight alternative to react-css-modules.

With this little extension, our previous component looks something like this:

**panel.js**

```react
import React from "react";
import CSSModules from "react-css-modules";
import style from "./panel.css";const Panel = () => {return (
     <div styleName="panel panel-default">
        <div styleName="panel-body">A Basic Panel</div>
     </div>
      )
}export default CSSModules(Panel,style,{allowMultiple: true, errorWhenNotFound: false});
```

With **react-css-modules,** we are free to use dashed naming approach. We are declaring local class name as **styleName** instead of className. And we are passing our component to CSSModule which is a [higher order function](http://google.com/) in react.

```
{allowMultiple: true, errorWhenNotFound: false}
```

Also, **allowMultiple** option (false by default) allows writing multiple class names simply in styleName attribute. And **errorWhenNotFound** option (true by default) as name suggests throws error if declared CSS class name is not defined in its CSS file.

**Defining global class name with react-css-modules**

CSS module makes it easy to separate local classes from global classes. You can simply define global classes in regular **className** attribute. Also, you might want to check your configuration for global css files in webpack as discussed above in **targeting global CSS section.**

```html
<div styleName="panel panel-default" className="text-center">
  <div styleName="panel-body">A Basic Panel</div>
</div>
```

# **Importing multiple CSS files**

There can also be scenarios where we want to import multiple CSS files into a component, after all we would want to make some shared style files reusable across components.

**panel.js**

```react
import React from "react";
import CSSModules from "react-css-modules";
import style from './panel.css'
import sharedStyle from './shared.scss'const Panel = () => {
  return (
     <div styleName="panel panel-default">
        <div styleName="panel-body">A Basic Panel</div>
     </div>
      )
}export default CSSModules(Panel,{...style, ...shared},{});
```

shared.css

```css
.panel {
  background-color: #eee;
  border-radius: 4px;
  padding: 20px 30px;
}
```

panel.css

```css
.panel-default{
   composes: panel from './panel.css";
   max-width: 640px;
   margin-bottom: 24px;
}
```

To conclude, CSS module makes writing CSS simple and fun again by eliminating major issue with CSS ie global scoping by following single responsibility principle which is coherent with web component standard. Its been quite some time I have been using CSS modules in my projects and it has immensely improved my workflow. I am very excited to explore further possibilities with CSS modules and by the end of this article, I hope you are too. ;)
