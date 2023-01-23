<script setup lang="ts">
interface IMovieItem {
  title: string;
  background: string;
  description: string;
  vote: number;
}

interface IMoviesByGenre {
  genre: string;
  list: IMovieItem[];
}
interface Props {
  movieList: IMoviesByGenre[];
}

defineProps<Props>();
</script>

<template>
  <VRow v-for="(movie, index) in movieList" :key="index" class="row-col">
    <VCol class="ma-4 d-flex align-center justify-space-between" cols="12">
      <h1 class="text-h6 text-white">{{ movie.genre }}</h1>
      <v-btn
        class="btn-more"
        variant="text"
        color="primary"
        append-icon="mdi-arrow-right-thin"
      >
        All movies
      </v-btn>
    </VCol>
    <VCol class="d-flex" cols="12">
      <v-img
        class="poster-img mx-2"
        v-for="(item, k) in movie.list"
        :key="k"
        :lazy-src="item.background"
        cover
        :src="item.background"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
@import "@/assets/pages/components/movieRow.scss";
</style>
