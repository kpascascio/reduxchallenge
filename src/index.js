import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import Counter from './reducer/index';

// const middleStore = applyMiddleware(reduxThunk)(createStore)

const store = createStore(Counter)
ReactDOM.render(<App store= {store}/>, document.getElementById('root'));
registerServiceWorker();
