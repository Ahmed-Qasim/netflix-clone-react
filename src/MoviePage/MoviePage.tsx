import { useEffect, useState } from "react";
import "./MoviePage.css";
import { useParams } from "react-router-dom";
import HttpClient from "../Axios";
import { Movie } from "../types";
import YouTube from "react-youtube";

function MoviePage() {
    const Api_Key = "85afc898b1eeba0994c8c54ab6e7ce1e";
    const imageBaseurl = "https://image.tmdb.org/t/p/original/";
    const { movieId } = useParams();

    const [movie, setMovie] = useState<any | undefined>(undefined);
    console.log("🚀 ~ file: Moviepage.tsx:14 ~ MoviePage ~ movie:", movie);

    // const [movie, setMovie] = useState<Movie|undefined>(undefined);
    const [trailer, setTrailer] = useState();
    const [releaseYear, setReleaseYear] = useState();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        async function fetch() {
            const response = await HttpClient.get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_Key}&append_to_response=videos`
            );
            setMovie(response.data);
            console.log(response.data);

            const videos = response.data.videos.results;
            const officialTrailer = videos.find(
                (vid: { name: string }) => vid.name === "Official Trailer"
            );
            const anyVideo = response.data.videos.results[0];

            const releaseDate = response.data.release_date.split("-")[0];
            setReleaseYear(releaseDate);
            const trailer = officialTrailer
                ? officialTrailer.key
                : anyVideo.key;
            setTrailer(trailer);

            // setFilm({
            //     releaseDate,
            //     trailer,
            // });
            // if (officialTrailer) {
            //     (officialTrailer.key);
            //     console.log(officialTrailer);
            // } else {
            //     setTrailer(anyVideo.key);
            //     console.log(anyVideo);
            // }
            // else {
            //     console.log("No videos found.");
            // }
            // console.log(response.data.videos.results[response.data.videos.results.length - 1].site);

            return response;
        }
        fetch();
    }, [movieId]);

    console.log(movie);

    
    return (
        <div className="moviePage">
            <div className="moviePage-info row align-items-center ">
                <div className="leftSide col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <img
                        className="posterImg"
                        src={`${imageBaseurl}${movie?.poster_path}`}
                        alt=""
                    />
                </div>

                <div className="rightSide col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <h1>{movie?.title}</h1>
                    <p>{movie?.overview}</p>
                    <div className="movie-info">
                        <div>
                            <i className="bi bi-calendar-check"></i> Release
                            Date: {movie?.release_date}
                        </div>
                        <div>
                            <i className="bi bi-tags"></i>
                            Genre: {movie?.genres[0]?.name},{" "}
                            {movie?.genres[1]?.name}, {movie?.genres[2]?.name}
                        </div>
                        <div>
                            <i className="bi bi-clock"></i> Runtime:{" "}
                            {movie?.runtime} min
                        </div>

                        <div>
                            <i className="bi bi-flag"></i>
                            Production countery:{" "}
                            {movie?.production_countries[0]?.name}
                        </div>
                        <div>
                            <i className="bi bi-ticket-perforated"></i> Rating:{" "}
                            {movie?.vote_average}
                        </div>
                        <div>
                            <i className="bi bi-megaphone"></i> Original
                            language: {movie?.original_language}
                        </div>
                    </div>
                </div>
            </div>
            <div className="player">
                <h1>
                    {movie?.title} {releaseYear}
                </h1>
                <div className="youtube-container">
                    <YouTube videoId={trailer} className="player"></YouTube>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
