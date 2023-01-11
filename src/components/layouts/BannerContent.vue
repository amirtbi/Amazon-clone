<script setup lang="ts">
/**
 * Types and Interfaces
 */
interface Props {
  title?: string;
  description?: string;
}
defineProps<Props>();

const printMessage = () => {
  console.log("button clicked");
};
</script>
<template>
  <div class="banner-content__title pb-2">
    <h1 class="text-white">{{ title }}</h1>
  </div>
  <div class="banner-content__actions d-flex">
    <v-btn
      @click="printMessage"
      class="mr-2"
      size="small"
      color="secondary"
      variant="flat"
      >Play movie</v-btn
    >
    <v-btn size="small" variant="flat" color="primary">Next movie</v-btn>
  </div>
  <div class="banner-content__description pt-2">
    <p class="text-truncate text-subtitle-2 text-white">{{ description }}</p>
  </div>
</template>

<style scoped>
.banner-content__description > p {
  inline-size: 400px;
}
</style>
