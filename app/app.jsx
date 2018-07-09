
// var React = require('react');
// var ReactDOM = require('react-dom');
// // var {Provider} = require('react-redux');
// var redux = require('redux');

// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// // var TodoApp = require('TodoApp');
// // var actions = require('actions');
// // var store = require('configureStore').configure();
// // var TodoAPI = require('TodoAPI');

// store.subscribe(() => {
// 	var state = store.getState();
// 	console.log('New state', state);
// 	TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

// //Load foundation
// $(document).foundation();

// //App.scss
// // require('style!css!sass!applicationStyles');

// ReactDOM.render(
// 	<Provider store={store}>
// 		<TodoApp />
// 	</Provider>,
// 	document.getElementById('app')
// );




import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'redux';
import { Router, routes, browserHistory } from 'react-router';
//import routes from './routes';
import configureStore from './store/configureStore.jsx';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
, document.getElementById('app'));