<script setup lang="ts">
import { reactive, ref, onMounted, nextTick } from "vue";
import HomeScreenLayout from "@/layouts/homeScreen.vue";
import BannerContent from "@/components/layouts/BannerContent.vue";

import { useMovie } from "@/composable/usefetchhMovie";

const movieInfo = reactive<{
  title: string;
  description: string;
  background: string;
}>({ title: "", description: "", background: "" });

const { fetchMovieGenre, fetchOriginalMovie } = useMovie();

onMounted(async () => {
  const { title, description, background } = await fetchOriginalMovie();

  /**
   * Set movieInfo
   */
  movieInfo.title = title;
  movieInfo.description = description;
  movieInfo.background = background;

  await nextTick();
  await fetchMovieGenre("comedy");
  // await fetchData();
});
</script>

<template>
  <HomeScreenLayout>
    <template #banner-image>
      <v-img
        class="banner-image"
        width="100%"
        height="100%"
        :src="movieInfo.background"
      ></v-img>
    </template>
    <template #banner-content>
      <BannerContent
        :title="movieInfo.title"
        :description="movieInfo.description"
      />
    </template>
    <template #main> </template>
  </HomeScreenLayout>
</template>

<style scoped>
.banner-image {
  position: absolute;
  z-index: -1;
  width: 100%;
}
</style>
