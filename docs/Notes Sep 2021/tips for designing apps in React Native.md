# Some tips for designing apps in React Native

## Become one with the thumb  

The most impactful thing you can do in this regard is to make your touch targets bigger. [Apple’s Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) state, “Provide ample touch targets for interactive elements. Try to maintain a minimum tappable area of 44pt x 44pt for all controls.”

## Consider implementation in the design phase

Designs that are trivial to implement on the web can be surprisingly challenging to develop in React Native. When mocking out your app, consider how it might actually be implemented. Ask yourself questions like:

- Will we need to import an open-source library to achieve this design? If so, is this library reliable?
- Will implementing this design take a lot of development time? If so, is this a good use of that time?
- Does this design require extensive customization of a standard library, such as React Navigation? If so, is there a way to avoid this design?

## Make it feel native (even though it’s not)  

Here are some tips to give your app that native feel:

- Use the native typeface: San Francisco on iOS and Roboto on Android. [React Native Typography](https://github.com/hectahertz/react-native-typography) makes this reasonably effortless.
- Strive to use native colors, where appropriate. React Native Typography is also an excellent tool for this.
- Compare your app to native apps. Does your app seem out place, or does it fit within the ecosystem?
- Use standard navigation patterns. For example, on iOS: the back button should be in the top left, the action button should be in the top right, the title should be in the middle or on the left, and so on. React Navigation makes this easy.

## Consistently run the app on a physical device during development  

Here’s a short checklist of things to look for when testing on a device:

- Tap on various controls. Are their any tap targets that are too small or hard to hit?
- Tap on all of your text inputs. Does the keyboard overlap with any of them?
- Turn your brightness all the way down. Is there still enough contrast? Is anything hard to read? Compare your app to the native apps on your device.
- Open some native apps on your device. Does your app seem out of place, or does it fit within the native ecosystem?

## Don’t reinvent the wheel: use reliable libraries

[React Navigation](https://reactnavigation.org/docs/en/getting-started.html): Easy-to-implement navigation with a native look and feel.

[React Native Typography](https://github.com/hectahertz/react-native-typography): Make your typography look and feel native on both platforms.

[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): Easily pull from a collection of thousands of icons.

[React Native SVG](https://github.com/react-native-community/react-native-svg): Use SVGs as components.

# 50 React Native Tips — Part 1/2

## 1.**Don’t bother with Expo**

Sooner or later, you will reach a point where you will have to eject the Expo app into a regular React Native app, so you might as well not waste your time and start the project right way anyway.

## 2.**Use ESLint**

*ESLint* is a fantastic extension which is extremely easy to install, set up and use, so be sure to include it in your project from the very beginning. If you disagree with some of the rules, you can always disable them in the `.eslintrc` configuration file, but having some kind of code quality control is going to help you and your team immensely in the long run.

## 3.**Remove all logs from your release builds**

Having many *console.log* statements can slow your app down, especially if you are using logging libraries such as *redux-logger*. Be sure to disable all logs (manually or with a script) when making a release build.

## 4.**Use Flexbox**

No matter what your design requirements are, using flexbox is almost **always** the correct answer

## 5.**Name your style objects consistently**

If your root view has a style object named `container`, then use that name for every root view on the project. If your submit button has a style object named `submitButton`, then stick with it and don’t use `saveButton`, `submitBtn` or `submit` for other instances.

## 6.**Think about smart and dumb components**

**Smart components**, also called *class-based* or *container* components are concerned with **how things work**. This means they hold the state, fetch data from the API, do most of the computing, keep track of the lifecycle methods if needed, provide data to other components, and have no styling included. **Dumb components**, also called *functional* or *presentational* components are concerned with **how things look**. They simply receive data (props) through parent components and display it to the user. 

## 7.**Use ternary operators concisely**

Writing `color = error ? ‘red’: ‘gray’` is short and sweet. Writing `color = error ? (id === myID) ? ‘red’ : ‘black’ : ‘gray’` is not. Ternary operators can help reduce the number of lines in your code but never nest them because the logic becomes difficult to read.

## 8.**Don’t abuse zIndex**

A good rule of thumb is that if you think you are over-complicating your code with a lot of zIndex properties, you are probably right. Go back to square one and rethink your layout.

## 9.**setState() is asynchronous**

This has to be one of the most common beginner errors in React Native. Although changing the state of a component causes a re-render, if you write something like `setState({ username: ‘somevalue’ })`, and then try to read `this.state.username` in the next line of code, you will not be reading the correct value, because setState() is an asynchronous operation. Use `await setState({ username })` to avoid this problem.

## 10.**You can dispatch redux actions from other actions**

One action doesn’t have to be limited to only one API request, or one kind of data manipulation. Any action can be dispatched from another action, from the same or a different file. It sounds obvious but can be overlooked.

## 11.**Don’t leave sensitive data in your app**

This includes API keys, API secrets, project IDs, client secrets, domains and any other data that is too sensitive to hold inside the app. Keep all of these on the server, not in your project.

## 12.**Manage your image resources properly**

Use descriptive image names, because name `login_button_disabled.png` is far more clear and reuseable than `login_button_gray.png`. Always provide `@1x`, `@2x`, and `@3x` dimensions to be able to handle different screen densities on both iOS and Android. If the dimensions of your image assets are too small or not properly labeled, you might have blurred images in your app, which makes your app look very unprofessional. On the other hand, if you want to reduce file size of all your images easily without losing any quality, use applications such as [ImageOptim](https://imageoptim.com/).

## 13.**Use object destructuring**

Nobody wants to see `this.props.navigation.state.params.username` all over the place. So use object destructuring. It makes code easier to read and understand. And you can (and should) also use it in function parameters, so instead of `const MyComponent = (props) => {` you can write `const MyComponent = ({ username, userID }) => {`.
You need to decide when to use destructuring and when not to, but most of the time it is a good idea. 

## 14.**DRY everywhere**

If I had to name one programming principle that is a basis for everything else in software development, it would be the **Don’t Repeat Yourself** principle. Whenever you write the same piece of code twice, refactor it into something reusable. Even if it’s not completely the same but similar, it’s worth considering abstracting it. 

## 15.**On using external libraries**

If there is a library out there that satisfies your needs and it isn’t abandoned, it’s better to use it instead of reinventing the wheel. You’ll save your precious development time for something else. However, you do need to do some research on the libraries you plan to use. Is it active and regularly maintained? Does it have a good rating? Is it well tested? Does it have a lot of issues? Does it support both iOS and Android? As a rule of thumb, if learning to use an external library is going to take more of your time than making everything yourself, you should stay away from it.
Sometimes you will want to change something in an external library. **Do not** edit it directly in the `node_modules/` folder. That folder is supposed to be ignored by version control anyway, so if you change the code directly, your teammates will not see your changes. In addition, an `npm update` action will overwrite your modifications. The solution is to either fork the original repository and link your project to your own repository where you made the changes (and even make a PR to the original author if you want to help!), or if the library is very small (one file), you can copy/paste it as a component in your own project and then edit it locally.

## 16.**Use Live Reloading, Hot Reloading, and Inspector**

Each one of these React Native features is extremely useful, so be sure to use all three. Live Reloading saves you time you would spend manually refreshing the app, Hot Reloading saves you time it takes to redesign a screen that is not easily accessible in your app, and Inspector saves you tons of console.log statements.

## 17.**Use async/await syntax, but not blindly**

If you are a React Native developer, you are probably already using async/await syntax. It looks clean and it saves you from callback hell. However, beware that this syntax **effectively makes your asynchronous code synchronous**, so before you use it, ask yourself: Do you really need this? Is there something you need to do in parallel with your previous code? If so, you might need to rethink your approach. If you have several API calls that in no way depend on one another, the best thing you can do is create a promise for each of those async calls, put them all in an array, and run `Promise.all()` on it. This resulting “group” promise will finish as soon as all the promises inside are done, which is definitely much faster than running each request one after another.

## 18.**Modifying the contents of a state array/map will not cause a re-render**

If you have a state variable that is a hashmap, modifying its contents won’t modify the variable itself, so `render()` will not be called. To avoid this, you need to make a deep copy of the variable, for example using `_.cloneDeep()` function from the `lodash` library.

## 19.**Style overriding**

If you need to override an existing style object or modify the style dynamically, you can do that easily with this syntax:
`<View style={[ containerStyle, myStyle ]}>...</View>`,
where `myStyle` is the style object that overrides the `containerStyle`.

## 20.**Mind the iOS Safe Area**

In order for your app to look good on all iOS devices, you need to wrap every screen of your app in a safe area view to avoid obstruction of views. Even better, you can make a wrapper component for React Native’s `<SafeAreaView>`, where you can add everything else you need to have on every screen of your app, such as `OfflineNotice` indicator for example.

## 21.**Don’t use TouchableWithoutFeedback unless you have a good reason**

As the official React Native documentation states, all elements that respond to press should have a visual feedback when touched. Keep this in mind when creating your UI elements, and use `<TouchableWithoutFeedback>` sparingly.

## 22.**Thoroughly test new components for edge cases**

If your new component has a username label, be sure to try it with an absurdly long username and see if it wraps nicely or goes off the layout. That’s also a good time to set up `ellipsizeMode` and `numberOfLines` for the `<Text>` component if needed. The same principle goes for any component. Torture it with different data and see how it behaves before finishing it, because debugging layout breaks will take a lot more time later.

## 23.**Use crash reporting mechanisms and log failed use cases**

You should definitely have some kind of a crash reporting mechanism like Crashlytics. But besides that, it is very useful to log all failed use cases somewhere. You can use services such as Amplitude, your own backend or something else entirely. Do your users often enter their username instead of email on login screen? Or maybe they are reporting login errors in your app but in reality they don’t even know their own credentials? I’ve seen it all happen, everything is possible. Log as much as you can so you can save everyone's time, but also to see where your users often make mistakes and use that information to improve your app.

## 24.**Make API calls in componentDidMount()**

It’s well-known that you should never, ever, fetch data in `render()` method, but `componentWillMount()` is not the right place to do it either. First of all, it is a legacy method, which alone should be a reason enough not to use it. Secondly, it will **not** prevent an additional `render()` call, so there aren’t any performance improvements either. The final reason is that you always need to handle default state in order to render the component with empty state values. So put all your API calls in `componentDidMount()` in order to always have the correct flow of data and rendering.

## 25.**Think about backwards compatibility**

Sometimes a specific feature is removed, or some other breaking change is introduced like for example, a different response JSON on an API endpoint. Always be aware that some of your users won’t update the app to a new version right away, and their old version might crash or act in some other unexpected way.

## 26.**Folder structuring**

Folder structure in any project is very important for maintainability, and if you use redux you will really need to think about proper organization so you can easily access any module in your code later. There are two basic approaches to structuring folders in React Native. The first one is the **function-first approach** *,* where folders are named by the function of their files, for example `containers`, `components`, `actions`, `reducers`. Sounds simple, scales horribly, and including all the files required for a single screen is a mess. The second one is the **feature-first approach***,* where each folder contains everything about a specific module in the app, so in this case you would have folders such as `profile`, `login`, `feed`, `notifications` and so on. This scales much better but doesn’t make a clear distinction between your UI and redux.
The best solution is to always try to separate state management files from UI components. So, you can use the “Best of both worlds” approach, which is the **Ducks** file architecture. In this approach, all the UI files are isolated in `views` folder, whose inner architecture is *function-first*, and all state-related files are kept in `redux` folder, with a specific set of requirements. Since describing Ducks modular pattern in detail is outside the scope of this article, if you’re creating a new project look it up and see how you can implement it in your app.

## 27.**Use package.json to avoid relative paths**

[I](https://medium.freecodecamp.org/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92)f you are a React Native developer, you probably have something like this somewhere in your code:
`import MyList from '../../../../../views/components/MyList'`.
It’s not cool, it’s tiresome and not easily maintainable.
But there is a way to solve it! If you want to avoid typing all those `../../../`'s and import directly from `components` folder, all you have to do is create a `package.json` file inside the `components` folder, with the following content: `{ "name": "components" }`.
Now that the folder is turned into a module, and you can import like this: `import MyList from 'components/MyList'`. However, be aware that doing this **disables the autocomplete import feature** in Visual Studio Code, so you might want to use it only in specific cases only, for example for importing static assets (images).

## 28.**Use debounce if you send API calls often**

If you are sending an API request for each keystroke (for example, fetching search suggestions while the user is typing something in the search bar), the number of requests can be overwhelming if the user types quickly. You can use *lodash* function `_.debounce(onChangeText, 500)` if you want to set a speed limit for sending requests.

## 29.**Implement loading indicators while waiting for API response**

This is something that is really easy to implement, but it will drastically improve the feel of your app and make it look more responsive and professional to the users.

## 30.**Implement empty placeholders when there is no data**

Empty placeholders, whether they are images or simple labels like “You don’t have any messages”, will make the app look neat even in cases where there is no data. First impressions are extremely important, and your new users will likely encounter cases where there is no data. Don’t let them stare into a blank screen.

## 31.**Get comfortable with the basics of native code on both platforms**

You don’t have to be a native iOS/Android developer in order to be a React Native developer, but you should at least know how to use iOS Pods, Info.plist and how to manually link libraries. The same goes for Android and its Gradle process and AndroidManifest configuration.

## 32.**Avoid heavy calculations in render()**

Your `render()` function needs to be as simple as possible, since it is the one that is called the most in the entire lifecycle. So keep it clean from all heavy calculations in order to increase your app performance. If you want to speed up a specific component, one of the first things you should do is count your renders and see if there are too many of them.

## 33.**Pure Components**

Since one of the biggest performance issues in React Native is too many unnecessary `render()` calls, you can extend `PureComponent`, whose purpose is to reduce the number of these calls. For example, a functional component will render every time its parent component renders, but a pure component will not, because it implements a lifecycle method`shouldComponentUpdate` to check if a render is really required (it actually checks for changes in state or props). However, you need to be careful and understand how it works, because you might encounter false negatives if your component contains complex data structures whose changes won’t be detected.

## 34.**Clean up parameters you don’t use in components anymore**

If your component has gone through some heavy refactoring, chances are that some of the props it receives are not used anymore. Clean it up regularly to have a cleaner code and a better general idea of data flow in your application.

## 35.**Organize your constants**

If you have **configuration variables** that you use in many places of your app, such as navigation bar height, side menu width, page size for API calls, enums and so on, keep them all as named constants in a special file so you can always find and edit them easily.
The same goes for **colors**. Instead of hardcoding HEX values all over the project, keep all your colors in one file so you can always keep track of every value. And yes, you should make constants even for `black` and `white` colors, because design requirements can be changed later (due to rebranding, project owner has been changed etc.), and you might need to change all black colors in your project to a different shade of black, or a different color altogether. Be sure to revise and clean this file up regularly so it doesn’t get cluttered with old, unused values. Naming your colors properly is also important. If your main app color is blue, don’t name the constant `COLOR_BLUE` because if it gets changed to red later, you will have to rename every single instance to `COLOR_RED`. Use `COLOR_BASE` instead.
You should also keep all your **message strings** in one localization file so you can translate them easily when the need occurs. Even if you don’t need to translate your app in recent future, it’s still good to have a list with all the messages in one place.

## 36.**Constantly check how the app looks on different platforms and devices**

If you are constantly aware of how your app looks on different screen dimensions (bigger phones, smaller phones, tablets), you will save a lot of time and effort in the long run. In addition, even if you are developing for only one platform, keep in mind the other one. For example, using ActionSheetIOS won’t work on Android so you will have to either rewrite that code or create an Android-specific alternative later.

## 37.**Choose variable naming style and stick with it**

You like `camelCase`? Great. Or you are more of an `underscore_case` person? That’s also great. We will not go into which approach is better, because both have pros and cons. The important thing is to pick one and stick to it, and not mix them together. Be consistent.

## 38.**Increase touchable area with hitSlop**

If you have a small button which is hard to press, you could increase padding values to increase touchable area, but you can also use a property `hitSlop` to achieve the same purpose.

## 39.**Handle keyboard issues**

A keyboard is every mobile developer’s nemesis. Have you ever encountered an issue where you are presented with a list of clickable rows, but because your keyboard is open, you have to tap twice: the first time to close the keyboard and the second time for the row to react and open a screen? React Native’s `<ScrollView>` and`<FlatList>` both have a useful property called `keyboardShouldPersistTaps`. Setting its value to “always” will prevent this nasty behavior from happening.
Another issue that often happens is the keyboard overlapping the text input fields you’re supposed to type in. Luckily, there are libraries out there such as [react-native-keyboard-avoiding-scrollview](https://github.com/wix/react-native-keyboard-aware-scrollview), which prevent this inconvenience from happening.

## 40.**Always use both local and server validation**

Sure, there are some things only the server can validate, such as validation if the entered email exists in the database. But you should always implement as much client validation as possible, such as email format regex, minimum/maximum number of characters, and empty field validation.

## 41.**Use fitting data structures**

Don’t assume that every collection of data needs to be put into an array. Perhaps you’re better off with a key-value data structure like a hashmap. If your IDs are numbers, they need to be stored in a number data type like integer, even if the server returns them as strings in the response JSON.

## 42.**Avoid setting width and height for container components**

If your component’s child components already have set dimensions, double check if it’s really necessary to set dimensions for the container component as well. Sometimes it can be useful, but more often than not it’s better to let the container components resize themselves based on the dimensions of their children.

## 43.**Hardcode data in reducer if the API call isn’t ready**

If you are waiting for a specific API call to be implemented on backend, you can hardcode the agreed server response in your reducers. That way you won’t be blocked from developing a new feature and when the API call is ready, integration will be seamless.

## 44.**Be aware of your code complexity**

You should be at least partially aware of the computational complexity of your code. Sometimes a component spends more time computing data it received than it did on waiting for a server response. You can use Visual Studio extensions such as [codemetrics](https://github.com/kisstkondoros/codemetrics) to keep track of your code complexity in each method. This doesn’t mean you need to go through your entire codebase trying to optimize everything. After all, the performance of a released app on an actual device can differ greatly from the debug version on your simulator/emulator, so don’t fall into a trap of premature optimisation (*“Premature optimization is the root of all evil” ~ Donald Knuth*).

## 45.**Be aware of the difference between navigating and pushing screens**

No matter which navigation library you choose to use for your app, the rules are the same. Some actions require pushing a new screen to the application stack, while others require going to a screen you’ve loaded before. The push action adds a route on top of the stack and navigates forward to it. Navigate action will pop back to earlier in the stack if a component is already mounted there. Push will always add on top, so a component can be mounted multiple times. This is important for the `back` action and for the data you want to present. For example, do you want to allow opening one profile from another? You need the push action, because you’re essentially loading the same component twice, with different data, and you want to be able to return to the previous profile with the back button.

## 46.**Never, ever use Find/Replace functionality for refactoring**

It might seem like a faster solution if you need to quickly change a bunch of things on your project quickly, but there are way too many pitfalls you can (and trust me, you will) fall into. So just don’t even bother with it, and do things the old-fashioned way, or refactor using the refactoring tools provided by your IDE.

## 47.**Think about Human Interface Guidelines for Apple and Material Design Guidelines for Android**

Interface design details such as font size, text spacing, image resolutions, component organization and button dimensions might not sound all that important, but they make all the difference to your users. Even decisions such as whether the “OK” or “Cancel” button should be on the left or the right side of your screen are important. So be sure to research the do’s and don’ts for iOS and Android in order to provide a stellar UX for your users.

## 48.**Be very careful with Copy/Paste operations**

You might want to copy a component, function or some other piece of code and modify it. This is where a lot of unexpected errors happen because it can be very hard to notice a single property or value that you forgot to modify. So always be on your toes while doing any type of copy/paste.

## 49.**Transparency in color HEX codes**

Let’s say you are defining colors in your app with their hexadecimal `rrggbb` values. In this case, you would write pure black color as `#000000`, pure white as `#FFFFFF` and pure green as `#00FF00`. But what if you want to add transparency value to the color? Easy, just use `rrggbbaa` notation, where the last two digits represent the percentage of wanted color.
So what would be the correct HEX value for black color with 50% opacity? The first thing that comes to mind is `#00000050`. But this is **wrong**! Since the values for opacity range from 0 to 255, the correct value for 50% would be 127, which corresponds to a hexadecimal value of `7F`. Therefore, the correct answer in this case would be `#0000007F`. For a complete percentage to hex conversion table, check out [this link](http://online.sfsu.edu/chrism/hexval.html).

## 50.**Lock dependencies**

If your `package.json` file has a dependency that looks like
`"some-cool-library": "^0.4.2"`, you might want to remove the `^` character in order to lock the dependency on that specific version. This will ensure that you don’t import breaking changes from the new versions of the library into your project.

