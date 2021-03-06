# React JS

here's the official React documenation:<a href="https://reactjs.org/">https://reactjs.org/</a>

For the basic Demo implementation React Js: <a href="https://codepen.io/anon/pen/MELQaQ">https://codepen.io/anon/pen/MELQaQ</a>

## Next-Gen JavaScript

### let & const

Read more about let : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

Read more about const : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

let and const basically replace var . You use let instead of var and const instead of var if you plan on never re-assigning this "variable" (effectively turning it into a constant therefore).

### ES6 Arrow Functions

Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this keyword (see here).

Arrow function syntax may look strange but it's actually simple.

```
function callMe(name) {
    console.log(name);
}
```

which you could also write as:

```
const callMe = function(name) {
    console.log(name);
}
becomes:

const callMe = (name) => {
    console.log(name);
}
```

Important:

When having no arguments, you have to use empty parentheses in the function declaration:

```
const callMe = () => {
    console.log('Max!');
}
When having exactly one argument, you may omit the parentheses:

const callMe = name => {
    console.log(name);
}
```

When just returning a value, you can use the following shortcut:

```
const returnMe = name => name
That's equal to:

const returnMe = name => {
    return name;
}
```

### Exports & Imports

In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export (to make it available) and import (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

```
default => export default ...;

named => export const someData = ...;
```

You can import default exports like this:

```
import someNameOfYourChoice from './path/to/file.js';
```

Surprisingly, someNameOfYourChoice is totally up to you.

Named exports have to be imported by their name:

```
import { someData } from './path/to/file.js';
```

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:

```
import * as upToYou from './path/to/file.js';
```

upToYou is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you export const someData = ... (/path/to/file.js ) you can access it on upToYou like this: upToYou.someData .

### Classes

Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them.

Like this:

```
class Person {
    constructor () {
        this.name = 'Max';
    }
}

const person = new Person();
console.log(person.name); // prints 'Max'
```

In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

```
class Person {
    name = 'Max';
}

const person = new Person();
console.log(person.name); // prints 'Max'
You can also define methods. Either like this:

class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}

const person = new Person();
person.printMyName();
Or like this:

class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
```

The second approach has the same advantage as all arrow functions have: The this keyword doesn't change its reference.

You can also use inheritance when using classes:

```
class Human {
    species = 'human';
}

class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
```

### Spread & Rest Operator

The spread and rest operators actually use the same syntax: ...

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

Using the Spread Operator:

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

```
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
Here's the spread operator used on an object:

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
newObject  would then be

{
    name: 'Max',
    age: 28
}

```

The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.

### Destructuring

Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

```
const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
And here for an object:

const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
Destructuring is very useful when working with function arguments. Consider this example:

const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'
```

Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

```
const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')
```

We get the same result as above but we save some code. By destructuring, we simply pull out the name property and store it in a variable/ argument named name which we then can use in the function body.

## JS Array Functions

<ol>
<li>map() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map</li>
<li>find() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find</li>
<li>findIndex() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex</li>
<li>filter() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</li>
<li>reduce() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b</li>
<li>concat() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b</li>
<li>slice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice</li>
<li>splice() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice</li>
</ol>

# Components & JSX Cheat Sheet

Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.

Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

```
Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
```

```
class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } }
```

# Props & State

props and state are CORE concepts of React. Actually, only changes in props and/ or state trigger React to re-render your components and potentially update the DOM in the browser (a detailed look at how React checks whether to really touch the real DOM is provided in section 6).

Props

props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

Example:

AllPosts Component:

```
const posts = () => {
    return (
        <div>
            <Post title="My first Post" />
        </div>
    );
}
```

Here, title is the custom property (prop ) set up on the custom Post component. We basically replicate the default HTML attribute behavior we already know (e.g. <input type="text"> informs the browser about how to handle that input).

Post Component:

```
const post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}
```

The Post component receives the props argument. You can of course name this argument whatever you want - it's your function definition, React doesn't care! But React will pass one argument to your component function => An object, which contains all properties you set up on <Post ... /> .

{props.title} then dynamically outputs the title property of the props object - which is available since we set the title property inside AllPosts component (see above).

State

Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.

Example:

```
NewPost Component:

class NewPost extends Component { // state can only be accessed in class-based components!
    state = {
        counter: 1
    };

    render () { // Needs to be implemented in class-based components! Needs to return some JSX!
        return (
            <div>{this.state.counter}</div>
        );
    }
}
```

Here, the NewPost component contains state . Only class-based components can define and use state . You can of course pass the state down to functional components, but these then can't directly edit it.

state simply is a property of the component class, you have to call it state though - the name is not optional. You can then access it via this.state in your class JSX code (which you return in the required render() method).

Whenever state changes , the component will re-render and reflect the new state. The difference to props is, that this happens within one and the same component - you don't receive new data (props ) from outside!

# Clipboard Events

Event names:

onCopy onCut onPaste
Properties:

DOMDataTransfer clipboardData
Composition Events

Event names:

onCompositionEnd onCompositionStart onCompositionUpdate
Properties:

string data
Keyboard Events

Event names:

onKeyDown onKeyPress onKeyUp
Properties:

boolean altKey
number charCode
boolean ctrlKey
boolean getModifierState(key)
string key
number keyCode
string locale
number location
boolean metaKey
boolean repeat
boolean shiftKey
number which
Focus Events

Event names:

onFocus onBlur
These focus events work on all elements in the React DOM, not just form elements.

Properties:

DOMEventTarget relatedTarget
Form Events

Event names:

onChange onInput onInvalid onSubmit
For more information about the onChange event, see Forms.

Mouse Events

Event names:

onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
The onMouseEnter and onMouseLeave events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.

Properties:

boolean altKey
number button
number buttons
number clientX
number clientY
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
number pageX
number pageY
DOMEventTarget relatedTarget
number screenX
number screenY
boolean shiftKey
Selection Events

Event names:

onSelect
Touch Events

Event names:

onTouchCancel onTouchEnd onTouchMove onTouchStart
Properties:

boolean altKey
DOMTouchList changedTouches
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
boolean shiftKey
DOMTouchList targetTouches
DOMTouchList touches
UI Events

Event names:

onScroll
Properties:

number detail
DOMAbstractView view
Wheel Events

Event names:

onWheel
Properties:

number deltaMode
number deltaX
number deltaY
number deltaZ
Media Events

Event names:

onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting
Image Events

Event names:

onLoad onError
Animation Events

Event names:

onAnimationStart onAnimationEnd onAnimationIteration
Properties:

string animationName
string pseudoElement
float elapsedTime
Transition Events

Event names:

onTransitionEnd
Properties:

string propertyName
string pseudoElement
float elapsedTime
Other Events

Event names:

onToggle



# Useful Resources & Links
<ol>
<li>create-react-app: https://github.com/facebookincubator/create-react-app</li>
<li>Introducing JSX: https://reactjs.org/docs/introducing-jsx.html</li>
<li>Rendering Elements: https://reactjs.org/docs/rendering-elements.html</li>
<li>Components & Props: https://reactjs.org/docs/components-and-props.html</li>
<li>Listenable Events: https://reactjs.org/docs/events.html</li>
<li>Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html</li>
<li>Lists & Keys: https://reactjs.org/docs/lists-and-keys.html</li>
<li>Error Boundaries: https://reactjs.org/docs/error-boundaries.html</li>
<li>Chrome Devtool Debugging: https://developers.google.com/web/tools/chrome-devtools/javascript/</li>
</ol>

# More on CSS Modules
CSS Modules are a relatively new concept (you can dive super-deep into them here: https://github.com/css-modules/css-modules). With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component.

It's not using magic for that, instead it'll simply automatically generate unique CSS class names for you. And by importing a JS object and assigning classes from there, you use these dynamically generated, unique names. So the imported JS object simply exposes some properties which hold the generated CSS class names as values.

Example:

In Post.css File

```
.Post {
    color: red;
}
In Post Component File

import classes from './Post.css';
 
const post = () => (
    <div className={classes.Post}>...</div>
);
```
Here, classes.Post  refers to an automatically generated Post  property on the imported classes  object. That property will in the end simply hold a value like Post__Post__ah5_1 .

So your .Post  class was automatically transformed to a different class (Post__Post__ah5_1 ) which is unique across the application. You also can't use it accidentally in other components because you don't know the generated string! You can only access it through the classes  object. And if you import the CSS file (in the same way) in another component, the classes  object there will hold a Post  property which yields a different (!) CSS class name. Hence it's scoped to a given component.

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with :global .

Example:
```
:global .Post { ... } 
```
Now you can use className="Post"  anywhere in your app and receive that styling.