import ApiClass from "@/configs/Api";
import type { genre } from "@/models/movieGenres";
import type { AxiosResponse } from "axios";
const api = new ApiClass();

const API_KEY = "2e15d9ad5a01ad9794aae8f3b6f6aca0";
/**
 * BaseUrls for MovieTMDB api
 */
const BASEURL = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanticMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentariesMovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

/**
 * Functions for requesting and fetching data from MovieTMDB
 */
export const fetchTrendingMovies = () => {
  return api.get(`${BASEURL.trending}`);
};

/**
 * Fetch Top rated movie
 * @returns
 */
export const fetchTopRatedMovie = () => {
  return api.get(`${BASEURL.topRated}`);
};

/**
 *
 * @param movieGenre
 * @returns
 */
export const fetchMovieByGenre = <AxiosResponse>(movieGenre: genre) => {
  if (movieGenre === "comedy") {
    return api.get(`${BASEURL.comedyMovies}`);
  } else if (movieGenre === "horror") {
    return api.get(`${BASEURL.horrorMovies}`);
  } else if (movieGenre === "romantic") {
    return api.get(`${BASEURL.romanticMovie}`);
  } else if (movieGenre === "documentary") {
    return api.get(`${BASEURL.documentariesMovie}`);
  }
};

export const fetchNetflixOriginals = <AxiosResponse>() => {
  return api.get(`${BASEURL.netflixOriginal}`);
};
