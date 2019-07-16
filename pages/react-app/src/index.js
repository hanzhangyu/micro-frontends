import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import reducer from './reducers';

const store = createStore(reducer, {id: 0}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById("react-app");
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
