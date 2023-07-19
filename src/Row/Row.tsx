import React, { useEffect, useState } from "react";
import "./Row.css";

import HttpClient from "../Axios";
import { useNavigate } from "react-router-dom";

interface props {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

function Row(props: props) {
    const imageBaseurl = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState<any[] | null>([]);

    useEffect(() => {
        async function fetch() {
            const response = await HttpClient.get(props.fetchUrl);
            setMovies(response.data.results);
            return response;
        }
        fetch();
    }, []);

    const navigate = useNavigate();

    const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        e.preventDefault();
        const movieId = Number(e.currentTarget.getAttribute("data-id"));
        // const movieId = Number(movie.id);

        navigate(`/movie/${movieId}`);
    };

    return (
        <div className="posters-container">
            <h2>{props.title}</h2>
            <div className="row-posters">
                {movies?.map(
                    (movie) =>
                        ((props.isLargeRow && movie.poster_path) ||
                            (!props.isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row-poster ${
                                    props.isLargeRow && "row-posterLarge"
                                }`}
                                key={movie.id}
                                src={`${imageBaseurl}${
                                    props.isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                }`}
                                alt={`${movie.name}`}
                                onClick={handleClick}
                                data-id={movie.id}
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default Row;
