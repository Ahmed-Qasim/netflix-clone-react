const Api_Key = "85afc898b1eeba0994c8c54ab6e7ce1e";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
    fetchNetflixOrlginals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en-Us`,
    fetchActionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
    fetchMovie: `/movie/videos?api_key=${Api_Key}`
};

// https://api.themoviedb.org/3/trending/all/week?api_key=5afc898b1eeba0994c8c54ab6e7ce1e&language=en-US`
export{Api_Key}
export default requests