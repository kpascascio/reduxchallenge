import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Counter from './components/Counter';
import { createStore, applyMiddleware } from 'redux';
import ReducerCounter from './reducer/reducerIndex';
import reduxThunk from 'redux-thunk';

const middleStore = applyMiddleware(reduxThunk)(createStore)

const store = middleStore(ReducerCounter)
ReactDOM.render(<Counter store= {store}/>, document.getElementById('root'));
