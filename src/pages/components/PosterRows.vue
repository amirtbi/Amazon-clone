<script setup lang="ts">
interface Props {
  title: string;
  movieList: [];
}

defineProps<Props>();
</script>

<template>
  <VCol :col="3">
    <!--Title -->
    <h1>{{ title }}</h1>
    <!--Poster-->
    <v-img
      v-for="(movie, index) in movieList"
      :key="index"
      :src="movie.bakcground"
    ></v-img>
  </VCol>
</template>
