import "./assets/main.css";
import 'vuetify/styles';
import 'font-awesome/css/font-awesome.min.css'

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa4'

import App from "./App.vue";
import router from "./router";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import i18n from "./lang/index.js";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
          fa,
        },
      },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(i18n)

app.mount("#app");
