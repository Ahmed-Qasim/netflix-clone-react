import { useEffect, useState } from "react";
import "./Banner.css";
import HttpClient from "../Axios";
import requests from "../Requests";
import { Movie } from "../types";
import { useNavigate } from "react-router-dom";

function Banner() {
    // fetch movies
    async function fetchData() {
        const request = await HttpClient.get(requests.fetchTrending);

        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );

        return request;
    }

    function truncate(string: string, n: number) {
        return string.length > n ? string.substring(0, n - 1) + "..." : string;
    }
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const navigate = useNavigate();

    const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        e.preventDefault();
        const movieId = Number(e.currentTarget.getAttribute("data-movie-id"));

        navigate(`/movie/${movieId}`);
    };

    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            }}
            data-movie-id={movie?.id}
            onClick={handleClick}
        >
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_button-container">
                    <button className="banner_button play">
                        <i className="bi bi-play-circle"></i>Play
                    </button>
                    <button className="banner_button myList">
                        <i className="bi bi-exclamation-circle"></i> My List
                    </button>
                </div>
                <div className="banner_description">
                    {truncate(`${movie?.overview}`, 100)}
                </div>
            </div>
            <div className="banner--fadeBottom" />
        </div>
    );
}

export default Banner;
