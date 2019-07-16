import Vue from 'vue';
import App from './src/App.vue';
import router from './src/router';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue-app',
        router,
        render: h => h(App)
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
    function () {
        return Promise
            .resolve()
            .then(() => {
                console.log('bootstrapped Vue!')
            })
    }
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];
