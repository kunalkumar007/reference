## Cursors

### How to add cursors?

The cursor property helps you to set the mouse cursor when you point it to any element on the web interface. Here are some of the standard cursors available:

| CSS Cursor Property | Description                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| cursor: wait        | This shows that the program is busy, and users can’t interact with the interface till it goes back to default. |
| cursor: help        | This shows that some help information is available.                                                            |
| cursor: crosshair   | This cross cursor is used to indicate a selection of a media or bitmap.                                        |
| cursor: grab        | This is used in situations where you want to show that an element can be gripped.                              |

```css
div.demo-waiting {
  cursor: wait;
}
div.demo-help {
  cursor: help;
}
div.demo-crosshair {
  cursor: crosshair;
}
div.demo-grab {
  cursor: grab;
}
```

### Add custom emoji and image cursors!

Want to go even further in customizing the default cursor? With CSS you can replace that boring cursor with your favorite image, or emoji! Let’s make the following demo to illustrate this:

```css
.happy {
  cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"),
    auto;
}
.sad {
  cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png"), auto;
}
```

## CSS Smooth Scrolling

The [smooth scrolling feature](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) in CSS provides us to set the behavior of the scrolling box when the scrolling is trigged. It comes with two simple properties; auto and smooth. When set to auto, you will see that the scrolling box will scroll instantly while with smooth, it scrolls smoothly using a timing function decided by the user’s platform.

```css
.scroll-container {
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
```

## CSS Shapes

### Make a circle:

The important part is that we need to give it an equal value of width and height and then use the [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) property to round off the borders completely.

```css
div.circle {
  width: 300px;
  height: 300px;
  background: #2762e9;
  border-radius: 50%;
}
```

### Make a triangle:

There are two things to note here;

first, make sure to set both the width and height to zero. This ensures our shape doesn’t exceed the given border length.

Second, give separate left and right borders to make sure the border values are equal to get the perfect triangle shape along with the transparent color because if you add any other color value there, it will show up the trimmed part of the square shape. Whatever color you want the triangle to be can be added to the border-bottom.

```css
div.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #2762e9;
}
```

## Truncating text with CSS

Imagine if you have a lot of text inside a container and you want to show only the first two lines of it while the remaining text should be clipped with an ellipse (…) or any other symbol. How to do this? Well, here we need the [text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) CSS property. Let’s say we want something like this:

```css
div.demo-truncation {
  width: 100%;
}
p.clipped {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
p.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

For this to work, we need three things. First, we set the overall width of the entire container element i.e. 100%, then in the two paragraphs, we add:

- [white-space: nowrap](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) : This collapses all the available whitespace on the container.
- [overflow: hidden](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) : To fit the padding-box, it clips any content inside. That’s why we can truncate the text. And finally, we can use the two types of text-overflow properties i.e., clip and ellipsis, to get the desired output.

## Center align with Flexbox

```css
.demo-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

On the CSS, we need to use the following important properties related to flexbox:

- `display: flex;` This sets the parent container to have a flexbox layout.
- `align-items: center;` This sets the alignment of the flex children to the center of the cross-axis.
- `justify-content: center;` This sets the alignment of the flex children to the center of the [main-axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) .

## Make a drop shadow

The [drop shadow](<https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow()>) property allows us to add a background shadow effect to our images. This uses the [CSS filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function) property.

```css
img.demo-shadow {
  filter: drop-shadow(10px 10px 10px #a4bbff);
}
```

With a single line of CSS code, you can have a drop shadow effect on any image. It accepts the following syntax:

```css
drop-shadow(offset-x offset-y blur-radius color)
```

## Create a typewriter effect

Let’s see what each code line means here:

1. We center align the entire text with flexbox on the body tag.
2. Next, on the heading, we add `overflow: hidden` to make sure that the rest of the letters of the sentence do not show up until the animation is done.
3. To make the effect more realistic, we add a cursor and this is made by using the `border-right` property.
4. The `white-spac`e is used so that the entire text content lives on a single line and there is no text wrapping around its container.
5. Next we set up the animation. We have two of those; the typewriter animation simply changed the entire width of the text from 0 to 100% in 3 seconds, while the other cursor animation is added to the cursor we made in point #3. This runs for 1 second and it changes its border color from transparent to `#FF8D8D`.

```HTML
<div class="demo-typewriter">
  <span>This is a typewriter effect!</span>
</div>

```

```css
.demo-typewriter span {
  color: #262626;
  overflow: hidden;
  border-right: 0.1em solid #ff8d8d;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.4rem;
  animation: demo-typewriter 3s steps(30, end), demo-cursor 1s step-end infinite;
}
@keyframes demo-typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes demo-cursor {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ff8d8d;
  }
}
```

## Use CSS Custom Properties (vars)

Sometimes we need some CSS values to be used in multiple locations or elements. These values can be reused throughout the document or on the entire web project.

```css
:root {
  --brand-bg-color: #120078;
}

a {
  color: white;
  background-color: var(--brand-bg-color);
}

.main-link {
  color: var(--brand-bg-color);
  padding: 3px;
}
```

The `--brand-bg-color` is our CSS variable here defined at the root of the project styles. Its value equals #120078. What this means is that whenever we need this specific color in any of our links, buttons, etc, we can simply use it as `var(--brand-bg-color)`instead of manually defining it everywhere.

# Eight CSS Tips for Advanced Layouts and Effects

## 1. Maximizing CSS Sibling Selectors

**The problem:** You are losing optimization opportunities by not using sibling selectors.

**The solution:** Use sibling selectors whenever it makes sense. Whenever you are working with a list of items, and you need to treat the first or the last item differently, your first instinct may be to use the `:first-child` and `:last-child` pseudo CSS selectors.

## 2. Consistent HTML Element Sizing

**The problem:** HTML elements have inconsistent sizes across different browsers.

**The solution:** Set `box-sizing` for all elements to `border-box`. A long-time bane for web developers, Internet Explorer did one thing right: It sized boxes properly.

## 3. Dynamic Height Elements

**The problem:** Keeping an HTML element’s height proportional to its width.

**The solution:** Use vertical padding as a replacement for height.

Let’s say you want an HTML element’s height to always match its CSS width. `height: 100%` doesn’t change the default behavior of elements matching the height of its content.

The answer is to set the height to 0 and use padding-top or padding-bottom to set `.container`’s actual height instead. Either property can be a percentage of the element’s width.

## 4. Dynamic Width Elements

**The problem:** Keeping an HTML element’s width proportional to its height.

**The solution:** Use font-size as the basis for the element’s dimensions.

Now, what about the reverse, or containers that change width as their height does? This time, it’s `font-size` to the rescue. Remember that width and height can be in `em`s, meaning they can be a ratio of the element’s `font-size`.

An element with a `font-size` of 40px, a width of `2em`, and a height of `1em` would be 80 pixels (40 x 2) wide and 40 pixels (40 x 1) tall.

## 5. Vertical Centering of Dynamic Content

**The problem:** Keeping an HTML element (with unknown height) vertically centered inside another.

**The solution:** Set the outer element to `display: table`, then convert the inner element into a CSS `table-cell`. Or just use [CSS Flexbox](https://www.toptal.com/front-end/how-to-build-css-only-smart-layouts-with-flexbox).

## 6. Same-Height Columns

**The problem:** Keeping columns the same height.

**The solution:** For each column, use a large negative `margin-bottom` value, and cancel that out with an equally large `padding-bottom`. CSS tables and Flexbox also work.

Using `float` or `display: inline-block`, it’s possible to create side-by-side columns through CSS.

## 7. Going Beyond the Box

**The problem:** Boxes and straight lines are so clichéd.

**The solution:** Use `transform: rotate(x)`, or `border-radius`.

```html
<div class="pane-container -one">
  <div class="pane-background"></div>
  <div class="pane-text">Out of this World!</div>
</div>
<div class="pane-container -two">
  <div class="pane-background"></div>
  <div class="pane-text">Travel Today</div>
</div>
```

```scss
.pane-container {
  position: relative;
  height: 100vh;
  z-index: 1;
  border-bottom: 10px solid yellow;
}
.pane-container > .pane-background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1125145/juskteez-vu-3824%20(1).jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.pane-container > .pane-text {
  position: relative;
  font-size: 30px;
  color: white;
  padding: 100px;
}

.pane-container:last-child {
  z-index: 2;
}
.pane-container.-two > .pane-background {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1125145/test2-min.jpg");
}

.pane-container {
  position: relative;
  height: 100vh;
  z-index: 1;
  border-bottom: 10px solid yellow;
}
.pane-container > .pane-background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1125145/juskteez-vu-3824%20(1).jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.pane-container > .pane-text {
  position: relative;
  font-size: 30px;
  color: white;
  padding: 100px;
}

.pane-container:last-child {
  z-index: 2;
}
.pane-container.-two > .pane-background {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1125145/test2-min.jpg");
}
```

## 8. Night Mode

**The problem:** Implementing a night mode without creating a new stylesheet.

**The solution:** Use CSS filters.

Some apps feature a night mode, where the interface darkens for better readability under low light. On newer browsers, CSS filters can create the same effect, by applying Photoshop-like effects.

A useful CSS filter is `invert`, which (no surprise) inverts the colors of everything inside an element. This makes creating and applying a new set of styles unnecessary.

# 20 ESSENTIAL CSS TRICKS EVERY DESIGNER SHOULD KNOW

## 1. Absolute positioning

If you want control over where an element lives on our website at all times, absolute positioning is the key to making this happen. If you think of your browser as one big bounding box, absolute positioning allows you to control exactly where in that box an element will stay. Use top, right, bottom and left, accompanied by a pixel value to control where an element stays.

```css
position: absolute;
top: 20px;
right: 20px;
```

The CSS above sets the position of an element to stay 20px from the top and right edges of your browser. You can also use absolute positioning inside of a div.

## 2. \* + selector

The **\*** enables you to select all elements of a particular selector. For example, if you used \*_p_ and then added CSS styles to that, it would do it to all elements in your document with a _˂p˃_ tag. This makes it easy to target parts of your website globally.

## 3. Drop caps

Everyone loves drop caps. It reminds us of the traditional printed book, and is a great way to start a page of content. That 1st, large letter really grabs your attention. There’s an easy way to create a drop cap in css, and it’s by using the pseudo element: :first letter. Here’s an example :

```css
p:first-letter {
  display: block;
  float: left;
  margin: 3px;
  color: #f00;
  font-size: 300%;
}
```

# CSS tricks to shake up your web layouts

## 01. Explore CSS blend modes

you can use background-image and background-colour set on the container background-blend-mode: **darken;**, or create an overlay with pseudo-elements (i.e. **:before** and **:after**) on the image wrapper in order to get a colourising effect.

To achieve a satisfying duotone effect, it’s recommended that you use a high-contrast black and white image. You can do this by applying CSS filters to set greyscale and a high contrast level.

Another cool property is **mix-blend-mode**, which lets you blend content of the element with the content or background of its direct parent. This works especially well on overlapped lettering. You may ask why in this case we don’t just adjust opacity – the answer is simple: we can easily lose the colour vividness using transparency only.

## 02. Add a mask

Masking can be done in three ways: using a raster image (eg PNG format with transparency parts), CSS gradients or SVG elements.

Note that unlike a typical raster image, SVG can be scaled or transformed without a significant loss of quality.

```css
img {
  mask-image: url(‘mask.png’) linear-gradient(-45deg, rgba(0, 0, 0, 1) 20%, rgba(
          0,
          0,
          0,
          0
        ) 50%);
  mask-image: url(#masking); /*referencing to the element generated and defined in SVG code*/
}
```

## 03. Don’t be afraid of clipping

Clipping is similar to cutting out a piece of paper – anything outside the path will be hidden, while anything inside the path will be visible.

```css
clip-path: circle(radius at x, y);
clip-path: url(#clipping); /*referencing to SVG element*/
```

The cool thing is that we can use shape functions and SVG as clip paths, which gives us a lot of opportunities – for instance, we could animate them into morphing shapes. Check out this [article from Chris Coyier](https://css-tricks.com/transparent-jpg-svg/) about creating transparent JPG using SVG clip path.

it’s recommended that you use masks when you want a partial transparency effect; if you want crisp edges, it’s best to use the clip paths.

## 04. Think outside the box

Simply apply the following code to the given floating image or container:

```css
shape-outside: circle(50%); /* content will flow around the circle*/
```

It is important to note that the float property and the dimensions of the element – height and width – have to be defined, otherwise this won't work. For the shape you can go with **circle()**, **polygon()**, **inset()** or **ellipse()**.

f you’d like to create more room between your element and the content, use the **shape-margin** property, which will act just like a margin. Shape functions can be animated, but only for defined polygons – the **url()** function unfortunately is not able to be animated.

## 05. Try SVG for animation

Animating SVG with CSS is like animating any other element in HTML – it can be done with transitions, transforms and keyframe animations. Once you’re familiar with the SVG code, the rest is straightforward and very intuitive, because you basically do it just like you would in HTML.

## 06. Make some noise

The perfect example of how to do it in CSS only can be found on [Captain Anonymous' CodePen](https://codepen.io/anon/pen/BpObKj?editors=0100), which presents skewed, animated text. One line of code does the magic:

```css
transform: skew(60deg, -30deg) scaleY(0.66667);
```

## 07. Get creative with collage

Collage-inspired designs are enjoying their moment in visual arts – while researching this article, the work of [Rosanna Webster](http://rosannawebster.com/) and [Barrakuz](http://barrakuz.com.pl/) immediately stole my heart – and even on the web they’re getting more and more attention.

I've prepared some examples using all these cool CSS properties, so you can see how they can be combined to achieve a collage-like style on the web. [Take a look at my examples](http://aganaplocha.com/netmag/).

## 08. Don't forget browser support

The code that is included in the **@supports** block will be rendered only if these conditions are true, otherwise the code has not been read by the browser. In a case where the browser doesn’t understand **@supports**, it doesn’t generate a given part of the code either.

```css
@supports (mix-blend-mode: overlay) {
  .example {
    mix-blend-mode: overlay;
  }
}
```
