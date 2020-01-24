import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { createStore } from 'redux';
import reducer from './reducer';
import { likeCreator, handleChangeCreator } from './actionCreators'

let store = createStore(reducer);

store.dispatch({type: 'POOP'})
store.dispatch(likeCreator())
// store.dispatch({type: 'LIKE'})
// store.dispatch({type: 'LIKE'})

console.log('AFTER LIKES', store.getState())

store.dispatch(handleChangeCreator('wassap homies'))

console.log('AFTER handle change', store.getState())

/**
 * 
 * UsersReducer
 * TweetsReducer
 * 
 * 
 */


ReactDOM.render(<App />, document.getElementById('root'));
