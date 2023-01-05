<script setup lang="ts">
import HomeScreenLayout from "@/layouts/homeScreen.vue";
</script>

<template>
  <HomeScreenLayout>
    <template #main>
      <p>index.vue</p>
      <router-link to="/about"></router-link>
    </template>
  </HomeScreenLayout>
</template>
