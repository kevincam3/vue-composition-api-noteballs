/* main.ts is where we create our root module, add anything middleware that needs to be used globally and bootstrap it to the browser */

// createApp; Here we're importing the function needed to create the vue app from the vue library.
// markRow; When adding external properties, class instances that come from other libraries, or simply things that are not reactive, you should wrap the object with markRaw() before passing it to pinia.
import { createApp, markRaw } from "vue";

// Here we're importing the root component from the components folder. This is the component that will be used to load any global components and will be the parent of all other components
import App from "@/App.vue";

// Here we're importing the router from the router folder. We need this router to be able to navigate between views
import router from "@/router";

// Here we're importing the store from the store folder. We need this store to be able to share data between components
import { createPinia } from "pinia";

// Here we're using the function we imported to create the vue app
const app = createApp(App);

const pinia = createPinia();

// Here we are importing the "Router" type from the vue-router library so that we can use it to type the router in pinia
import type { Router } from "vue-router";

declare module "pinia" {
  export interface PiniaCustomProperties {
    router: Router;
  }
}

// Here we are adding a new property to the pinia store called "router". This property will be used to store the router we imported above so it can be used in the pinia store.
// Below the use property of pinia is used to add a plugin to pinia. It requires a function. that get access to a parameter called "context" that includes the following properties:
// pinia: the pinia store, app: the vue app, store: the store the plugin is augmenting and options: the options object defining the store passed to defineStore.
// in our case below we are using destructuring to get the store property from the context object and passing it to our function/plugin. Normally plugins are defined in a separate file and imported here.
// but since our plugin is so small we are defining it here. Reference https://pinia.vuejs.org/core-concepts/plugins.html#introduction
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

// Here we're passing in the store so it can be used throughout the app
app.use(pinia);

// Here we're passing in the router so it can be used throughout the app
app.use(router);

// Here we're mounting the app to the browser. This is what actually loads the app into the browser
app.mount("#app");
