import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import HttpClient from "../Axios";

const Api_Key = "85afc898b1eeba0994c8c54ab6e7ce1e";

export interface Movie {
    id: string;
    poster_path: string;
    backdrop_path: string;
    name: string;
}
interface MovieResponse {
    page: number;
    results: Movie[];
}
export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
    endpoints: (builder) => ({
        getTrending: builder.query({
            query: () => `trending/all/week?api_key=${Api_Key}&language=en-US`,
        }),

        getMovies: builder.query<MovieResponse, string>({
            query: (fetchUrl) => fetchUrl,
        }),
        searchMovies: builder.query<MovieResponse, string>({
            query: (searchQuery) =>
                `/search/movie?query=${searchQuery}&api_key=${Api_Key}`,
        }),
    }),
});

export const { useGetTrendingQuery, useGetMoviesQuery, useSearchMoviesQuery } =
    movieApi;

export default movieApi.reducer;
