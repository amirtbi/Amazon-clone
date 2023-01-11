<script setup lang="ts">
import { computed } from "vue";
import { useWindowScroll } from "@vueuse/core";
import Logo from "@/assets/netflix-logo.png";

/**
 * Composables
 */
const { y } = useWindowScroll();

/**
 * Comnputed properties
 */
const showBackground = computed(() => {
  if (y.value >= 400) {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <nav
    :class="{ 'bg-black': showBackground }"
    class="px-4 align-center d-flex justify-space-between"
  >
    <div class="logo-container">
      <v-avatar size="90px" class="d-flex" href="#">
        <v-img id="logo" :src="Logo" alt="logo"></v-img>
      </v-avatar>
    </div>
    <v-avatar color="white" size="26px">
      <v-icon>mdi-account</v-icon>
    </v-avatar>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 57px;
  transition-timing-function: ease-in !important;
  transition: all 0.5s;
}

.text-container {
  color: white;
  font-size: 12px;
}
#logo,
#user-profile {
  width: 90px;
  height: 90px;
}
</style>
