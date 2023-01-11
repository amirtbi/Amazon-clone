import ApiClass from "@/configs/Api";
import type { genre } from "@/models/movieGenres";
const api = new ApiClass();

const API_KEY = "2e15d9ad5a01ad9794aae8f3b6f6aca0";
/**
 * BaseUrls for MovieTmdb api
 */
const BASEURLS = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  commedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romaticMvoie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documantriesMovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

/**
 * Functions for requestging and fetching data from MovieTMDB
 */
export const fetchTrendingMovies = () => {
  return api.get(`${BASEURLS.trending}`);
};

/**
 * Fetch Top rated movie
 * @returns
 */
export const fetchTopRatedMovie = () => {
  return api.get(`${BASEURLS.topRated}`);
};

/**
 *
 * @param movieGenre
 * @returns
 */
export const fetchMovieByGenre = (movieGenre: genre) => {
  if (movieGenre === "commedy") {
    return api.get(`${BASEURLS.commedyMovies}`);
  } else if (movieGenre === "horror") {
    return api.get(`${BASEURLS.horrorMovies}`);
  } else if (movieGenre === "romantic") {
    return api.get(`${BASEURLS.romaticMvoie}`);
  } else if (movieGenre === "documentray") {
    return api.get(`${BASEURLS.documantriesMovie}`);
  }
};

export const fetchNetflixOriginals = () => {
  return api.get(`${BASEURLS.netflixOriginal}`);
};
