import axios from "axios";
const HttpClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 2000,
});

export default HttpClient;

export class MoviesService {
    static getMovies() {
        return axios.get("movies");
    }
}
