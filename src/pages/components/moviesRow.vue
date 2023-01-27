<script setup lang="ts">
import { useHover } from "@/composable/useHover";

interface IMovieItem {
  title: string;
  background: string;
  description: string;
  vote: number;
  releaseDate: string;
}

interface IMoviesByGenre {
  genre: string;
  list: IMovieItem[];
}
interface Props {
  movieList: IMoviesByGenre[];
}

defineProps<Props>();

/**
 * Composable
 */
const { hover, overlayStyle, mouseEvent } = useHover();
</script>

<template>
  <VRow
    class="poster-container"
    v-for="(movie, index) in movieList"
    :key="index"
  >
    <VCol class="ma-2 d-flex align-center justify-space-between" cols="12">
      <h1 class="text-h6 text-white">{{ movie.genre }}</h1>
      <h1 class="text-element">hover on me</h1>

      <v-btn
        class="btn-more"
        variant="text"
        color="primary"
        append-icon="mdi-arrow-right-thin"
      >
        All movies
      </v-btn>
    </VCol>
    <VCol class="d-flex poster-row flex-nowrap" cols="12">
      <VRow class="poster-row flex-nowrap d-flex">
        <VCol
          v-for="(item, k) in movie.list"
          :key="k"
          class="image-container"
          :cols="movie.genre === 'Netflix origin' ? '2 ' : '1'"
        >
          <v-img
            @mouseenter="mouseEvent('enter', $event, k)"
            @mouseleave="mouseEvent('leave', $event, k)"
            width="100%"
            cover
            class="poster-image mx-2"
            :lazy-src="item.background"
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

            <div
              v-if="hover[k]"
              class="d-flex flex-column justify-end text-h2 pa-2"
              style="height: 100%"
              :style="overlayStyle"
            >
              <h6 class="text-white text-subtitle-1">
                Release Date: {{ item.releaseDate }}
              </h6>
              <h6 class="text-white text-subtitle-1">
                {{ item.vote }}
              </h6>
            </div>
          </v-img>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
@import "@/assets/pages/components/movieRow.scss";
</style>
