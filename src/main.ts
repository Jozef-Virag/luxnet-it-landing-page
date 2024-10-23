import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from './router/index';

import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

const app = createApp(App);

app.use(router);

app.use(Particles, {
    init: async (engine: Engine) => {
        await loadFull(engine);
    }
});

app.mount("#app");
