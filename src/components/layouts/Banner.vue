<script setup lang="ts">
import { ref } from "vue";
const bannerSrc = ref<string>(
  "https://img.freepik.com/free-photo/close-up-portrait-handsome-stylish-man-elegant-black-suit-dark-background_613910-14716.jpg?w=740&t=st=1672935180~exp=1672935780~hmac=4cd3755ddbf0fed48131cce37af4c13e713705e88b4e887e1e795f843c693a2c"
);
</script>

<template>
  <div class="banner-container">
    <img class="banner-cover" :src="bannerSrc" alt="banner" />
  </div>
</template>

<style scoled>
.banner-container {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}
.banner-cover {
  width: 100%;
  max-height: 400px;
}
</style>
