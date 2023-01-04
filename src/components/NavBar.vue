<script setup lang="ts">
/*
  imports
 */
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useAuthStore } from "@/stores/AuthStore";

/*
  mobile nave
 */

const showMobileNave = ref(false);

/*
  Click outside to close
 */
const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);
onClickOutside(navbarMenuRef, () => (showMobileNave.value = false), {
  ignore: [navbarBurgerRef],
});

/*
  Auth store
 */
const authStore = useAuthStore();

/*
  logout
 */
const logout = () => {
  showMobileNave.value = false;
  authStore.logoutUser();
};
</script>
<template>
  <nav
    class="navbar is-success"
    role="navigation"
    aria-label="main navigation">
    <div class="container px-2">
      <div class="navbar-brand">
        <div
          class="navbar-item is-size-4 is-family-monospace is-clickable"
          @click="$router.push({ name: 'notes' })">
          Noteballs
        </div>

        <a
          ref="navbarBurgerRef"
          class="navbar-burger"
          @click.prevent="showMobileNave = !showMobileNave"
          role="button"
          :class="{ 'is-active': showMobileNave }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        ref="navbarMenuRef"
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNave }">
        <div class="navbar-start">
          <button
            v-if="authStore.isLoggedIn"
            class="button is-small is-info mt-3 ml-3"
            @click="logout">
            Log out: {{ authStore.user?.email }}
          </button>
        </div>
        <div class="navbar-end">
          <RouterLink
            @click="showMobileNave = false"
            to="/"
            class="navbar-item"
            active-class="is-active">
            Notes
          </RouterLink>
          <RouterLink
            @click="showMobileNave = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active">
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    width: 100%;
    left: 0;
  }
}
</style>
