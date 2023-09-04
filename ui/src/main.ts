import { createApp } from "vue";
import "@styles/main.css";

import vuetify from "@plugins/vuetify";
import router from "@plugins/router";
import pinia from "@plugins/pinia";
import "@plugins/webfontloader";

import Layout from "@components/Layout.vue";

const app = createApp(Layout);

app.use(router);
app.use(vuetify);
app.use(pinia);

app.mount("#app");
