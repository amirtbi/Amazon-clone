<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import HomeScreenLayout from "@/layouts/homeScreen.vue";
import BannerContent from "@/components/layouts/BannerContent.vue";
import { fetchNetflixOriginals } from "@/services/MovieTMDBApi";

const movieInfo = reactive<{
  title: string;
  description: string;
  background: string;
}>({ title: "", description: "", background: "" });

const loading = ref(false);
const fetchData = async () => {
  try {
    loading.value = true;
    const { data } = await fetchNetflixOriginals();

    const { results: movieList } = await data;
    console.log("Results", movieList);
    const randomNumber: number = Math.floor(
      Math.random() * movieList.length - 1
    );
    movieInfo.title = movieList[randomNumber].name;
    movieInfo.background =
      "https://image.tmdb.org/t/p/original/" +
      movieList[randomNumber].backdrop_path;
    movieInfo.description = movieList[randomNumber].overview;

    console.log("movie info", movieInfo);
  } catch (e) {
    console.log("e", e);
  }
};

onMounted(async () => {
  await fetchData();
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
