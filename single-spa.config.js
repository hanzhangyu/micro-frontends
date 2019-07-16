/**
 * @file spa root config
 */
import {registerApplication, start} from 'single-spa'
import {navBar} from "./pages/navBar/navBar.app";

function pathPrefix(prefix, paths = []) {
    return function (location) {
        return (
            paths.find(path => path === location.pathname) ||
            location.pathname.startsWith(prefix)
        );
    }
}

start(); // 也可以先start，这样可以先bootstrap apps 然后在 fetch bundle（1. 这里navBar是在single-spa.config.js, 2. start放在registerApplication 之间无效）

/**
 * @appName {string}
 * @applicationOrLoadingFn {LifeCycles} 可以使用loadingFn载入application，application接口看 *.app.js
 * @activityFn
 * @customProps
 */
registerApplication(
    'navBar',
    navBar,
    () => true
);

registerApplication(
    'vue-app',
    () => import('./pages/vue-app/vue.app.js'),
    pathPrefix('/vue-child', ['', '/'])
);
registerApplication(
    'vue-app2',
    () => import('./pages/vue-app2/vue.app2.js'),
    pathPrefix('/hello')
);
registerApplication(
    'react',
    () => import('./pages/react-app/react.app.js'),
    pathPrefix('/react-child')
);
// start();
