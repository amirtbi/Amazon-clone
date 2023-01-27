export type genre = "comedy" | "horror" | "romantic" | "documentary" | "Netflix origin";




export interface MovieGenreRows {
    title:string;
    posterPath:string
}

export interface IMovieItem {
    title:string;
    background:string;
    description:string;
    vote:number
    releaseDate:string

}

export type MovieCover =  Pick<IMovieItem,"title" | "background" |"description">

export interface IMoviesByGenre{
    genre:genre;
    list:IMovieItem[]
}

