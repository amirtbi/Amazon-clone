import {ref} from "vue"
import type {genre} from "@/models/movieGenres"

import {fetchMovieByGenre,fetchNetflixOriginals} from "@/services/MovieTMDBApi"

interface  originNal  {
    title:string;
    description:string;
    background:string
}
export const useMovie =()=>{

    const randomOriginalMovie = ref()
    

    /**
     * 
     * @param movies 
     * @returns random movie
     */
  
    const generateRandomMovie = (movies:any[]):originNal=>{

        const randomNumber: number = Math.floor(
            Math.random() * movies.length - 1
          );
          return {title:movies[randomNumber].name,description:movies[randomNumber].overview,background:"https://image.tmdb.org/t/p/original/"+movies[randomNumber].backdrop_path}

    }
    const fetchMovieGenre = async (mvCategory:genre)=>{

        try {
            const response = await fetchMovieByGenre(mvCategory)

            
            const {results} = response?.data
            console.log(results)

            const movieList = results.map((movie:any)=>{
                return {title:movie.title,background:"https://image.tmdb.org/t/p/original/" +
                movie.poster_path,description:movie.overview,vote:movie.vote_average}
            })
            return movieList
        }

        catch(e){
            console.log("e",e)
        }
    }

    const fetchOriginalMovie = async ():Promise<originNal>=>{
       
   
            const response = await fetchNetflixOriginals()
            const {results} = response?.data
        
            console.log(("mof",results))
             return generateRandomMovie(results)
     


    
    }


    return {fetchMovieGenre,fetchOriginalMovie,randomOriginalMovie}

    
}


