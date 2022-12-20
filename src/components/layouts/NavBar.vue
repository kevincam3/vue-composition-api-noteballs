<template>
  <nav
    class="navbar is-success"
    role="navigation"
    aria-label="main navigation">
    <div class="container px-2">
      <div class="navbar-brand">
        <div
          class="navbar-item is-size-4 is-family-monospace is-clickable"
          @click="$router.push('/')">
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
<script setup>
/*
  imports
 */
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

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
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    width: 100%;
    left: 0;
  }
}
</style>
