React Best Practices
====================

## SWBAT

- [ ] Write cleaner React code

## Objectives

- Opinions
  - [X] Code Organization/file structure 
        - Folders: Components & Containers, orrrr organized by resource
  - [X] Presentational vs Container components

- Optimizations:
  - [x] Functional vs Class Components
        - class when you need state or lifecycle methods 
  - [x] Fragments

- Best Practices:
  - [x] Functional setState
  - [x] "then" callback for setState
  - [x] Callbacks (avoid useless wrapping)

- JS tricks/bugs often seen in React:
  - [x] Arrow functions returning objects () => ({ })
  - [x] Destructuring  ====> let { likes, name } = this.props
  - [x] Spread (w/ prepend and append) this.setState({ messages: [...this.state.messages, 'newmessage']})
  - [x] Objects with the same key/value name ===> let myPerson = {firstName, lastName}
  - [x] constructor vs. ES7 instance variables ===> ie state = {}
  - [x] { [variable]: "as_key" }

- Too Involved for RN
    - [x] HOCs Magic magic magic!

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[Redux Code Structure](https://redux.js.org/faq/code-structure)
[HOCs](https://reactjs.org/docs/higher-order-components.html)

## Lecture Notes

