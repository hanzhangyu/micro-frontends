import {registerApplication, start} from 'single-spa'

function pathPrefix(prefix, paths = []) {
    return function (location) {
        return (
            paths.find(path => path === location.pathname) ||
            location.pathname.startsWith(prefix)
        );
    }
}

registerApplication(
    'navBar',
    () => import('./pages/navBar/navBar.app.js').then(module => module.navBar),
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
start();
