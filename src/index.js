import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Counter from './components/Counter';
import { createStore } from 'redux';
import ReducerCounter from './reducer/reducerIndex';

const store = createStore(ReducerCounter)
console.log('store in index.js',store)
ReactDOM.render(<Counter store= {store}/>, document.getElementById('root'));
