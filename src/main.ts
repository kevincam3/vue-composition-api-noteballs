/* main.ts is where we create our root module, add anything middleware that needs to be used globally and bootstrap it to the browser */

// Here we're importing the function needed to create the vue app from the vue library
import { createApp } from "vue";

// Here we're importing the root component from the components folder. This is the component that will be used to load any global components and will be the parent of all other components
import App from "@/App.vue";

// Here we're importing the router from the router folder. We need this router to be able to navigate between views
import router from "@/router";

// Here we're importing the store from the store folder. We need this store to be able to share data between components
import { createPinia } from "pinia";

// Here we're using the function we imported to create the vue app
const app = createApp(App);

// Here we're passing in the store so it can be used throughout the app
app.use(createPinia());

// Here we're passing in the router so it can be used throughout the app
app.use(router);

// Here we're mounting the app to the browser. This is what actually loads the app into the browser
app.mount("#app");
