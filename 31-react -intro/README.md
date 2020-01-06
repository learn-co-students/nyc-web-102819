Intro to React
=============================


## SWBATs
- [ ] Recognize declarative and imperative coding paradigms
- [ ] Visualize/identify Components on any website
- [ ] Explain what a Component is conceptually in the UI
- [ ] Describe at a high level what these tools do for us:
* babel
* 
* webpack
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] See how props are to components as arguments are to functions

## Notes



### Why you might want to learn React
In mod 3, we learned how to do DOM manipulations using JavaScript to create robust and interactive websites. But as any codebase grows, increased complexity makes it hard to debug and work on things together (especially in big teams). React gives a system to organize our UI into components.


### Declarative vs Imperative Programming

#### Imperative
```js
const header = document.createElement('h1')
header.innerText = 'Wassup yall'
header.class = "screaming"

const container = document.querySelector('#container')
container.append(header)
```

- Imperative: Step by step directions 

Chipotle!
- bowl
- white rice: cook the rice by... with cilantro and lime
- chicken: grilled with these spices
- corn salsa: chop the jalapenos, get the corn, mix it up

#### Declarative
```js

function addHeader(){
    const header = document.createElement('h1')
    header.innerText = 'Wassup yall'
    header.class = "screaming"
    
    const container = document.querySelector('#container')
    container.append(header)
}

addHeader()

```

- Declarative: What you want the outcome to be... what you want to algo to do? 

- Make my burrito with white rice, black beans, sofritas, cheese, corn salsa, mild salsa, lettuce... guac upon occasion 

### Abstractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```

Second form: *Dynamic, reusable components using regular functions and arguments*


Third Form: *Static components using JSX*


FINAL FORM: *Dynamic, reusable components using JSX and props*


## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)



### Parking Lot 
Fire Island 