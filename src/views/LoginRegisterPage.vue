<script setup lang="ts">
/*
  imports
 */
import { ref, computed, reactive } from "vue";
import Credentials = Types.Credentials;
import { useAuthStore } from "@/stores/AuthStore";
/*
  register / login
 */
// We are using this const to determine if we are in register or login mode. When they click on the login button they are in login mode, when they click on the register button they are in register mode.
// We are also using the const to set which button is active by adding the is-active class to the button.
const register = ref(false);

/*
  form title
 */
//Here we use a computed property. This is used to declaratively describe a value that depends on other values. Or in other words my value depends on some other value that changes. In this case the value of register.
const formTitle = computed(() => (register.value ? "Register" : "Login"));

/*
  credentials
 */
// We used typescript to define the type of credentials using an external interface that we imported so we have cleaner code than adding the types using the "as string" syntax.
const credentials = reactive<Credentials>({
  email: "",
  password: "",
});

/*
  auth store
 */
const authStore = useAuthStore();

/*
  form submit
 */
const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("Please enter an email and password gosh darnit!");
  } else {
    if (register.value) {
      // register the user in a declarative way. We know the user just successfully submitted the register form so just register them.
      authStore.registerUser(credentials);
    } else {
      // login
      authStore.loginUser(credentials);
    }
  }
};
</script>
<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }"><a @click.prevent="register = false">Login</a></li>
        <li :class="{ 'is-active': register }"><a @click.prevent="register = true">Register</a></li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">{{ formTitle }}</div>
        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com" />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                type="password"
                placeholder="Enter a password" />
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">{{ formTitle }}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
