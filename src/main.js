import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';

const app = createApp(App);

app.use(router);
app.use(VueResource);

app.config.productionTip = false;

app.config.globalProperties.$http.options.root = 'http://127.0.0.1:8000/';

vueConfig.config.productionTip = false;

new vue ({
    router,
    data() {}
})

app.mount('#app');

