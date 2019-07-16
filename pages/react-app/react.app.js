import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers';
import App from './src/App';

// bootstrap 时候建立，数据可以持久化
const store = createStore(reducer, {id: 0}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const ProviderApp = () => <Provider store={store}><App/></Provider>;

function domElementGetter() {
    return document.getElementById("react-child")
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: ProviderApp,
    domElementGetter,
});

// rootComponent ? Promise.resolve() : loadRootComponent().then(setRoot)
export function bootstrap(props) {
    return Promise
        .resolve()
        .then(() => {
            console.log('bootstrapped React!')
        });
}

// React.createElement(SingleSpaContext.Provider, {value: props}, rootComponentElement)
// -> getRootDomEl
// -> reactDomRender
export const mount = [
    reactLifecycles.mount,
    function (props) {
        return Promise
            .resolve()
            .then(() => {
                console.log('mounted!', props)
            });
    }
];

// ReactDOM.unmountComponentAtNode
export const unmount = [
    reactLifecycles.unmount,
];

export const timeouts = {
    bootstrap: {
        millis: 5000,
        dieOnTimeout: true,
    },
    mount: {
        millis: 5000,
        dieOnTimeout: false,
    },
    unmount: {
        millis: 5000,
        dieOnTimeout: true,
    },
    unload: {
        millis: 5000,
        dieOnTimeout: true,
    },
};
