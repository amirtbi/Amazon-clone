<script setup lang="ts">
import { reactive } from "vue";
import BannerContent from "./BannerContent.vue";
const movieInfo = reactive({
  title: "Movie Title",
  description:
    "Movie Description Movie Description Movie DescriptionMovie Description Movie Description",
});
</script>

<template>
  <div class="banner-container">
    <div class="banner-content">
      <BannerContent
        :title="movieInfo.title"
        :description="movieInfo.description"
      />
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  background: black;
  background-size: cover;
  background-position: center top 10%;
  background-repeat: no-repeat;
  object-fit: contain;
  height: 448px;
}
.banner-cover {
  width: 100%;
  max-height: 400px;
  height: 400px;
}
.banner-content {
  position: relative;
  top: 35%;
  left: 5%;
}
</style>
