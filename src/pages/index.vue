<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import HomeScreenLayout from "@/layouts/homeScreen.vue";
import BannerContent from "@/components/layouts/BannerContent.vue";

import { useMovie } from "@/composable/usefetchhMovie";
import type { genre } from "@/models/movieGenres";
const genres: genre[] = ["comedy", "documentary", "horror", "romantic"];
const movieInfo = reactive<{
  title: string;
  description: string;
  background: string;
}>({ title: "", description: "", background: "" });

const movies = ref<{ genre: string; list: any[] }[]>([]);
const { fetchMovieGenre, fetchOriginalMovie } = useMovie();

onMounted(async () => {
  const { title, description, background } = await fetchOriginalMovie();

  // Requests for filling movie genre rows

  /**
   * Set movieInfo
   */
  movieInfo.title = title;
  movieInfo.description = description;
  movieInfo.background = background;

  for (const genre of genres) {
    const response = await fetchMovieGenre(genre);

    movies.value.push({ genre: genre, list: await response });
  }

  console.log("Response for comedy", await movies.value);
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
    <template #poster-rows>
      <VRow v-for="(movie, index) in movies" :key="index" class="row-col">
        <VCol cols="12">
          <h1 class="text-white pa-2">{{ movie.genre }}</h1>
        </VCol>
        <VCol class="d-flex" cols="12">
          <v-img
            class="poster-img mx-2"
            v-for="(item, k) in movie.list"
            :key="k"
            :src="item.background"
          ></v-img>
        </VCol>
      </VRow>
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
.poster-img {
  max-height: 150px;
}
.row-col {
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;
}
</style>
