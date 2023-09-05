import React from "react";
import "./Row.css";

import { useNavigate } from "react-router-dom";
import { useGetMoviesQuery } from "../state/ApiSlice";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

interface props {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

function Row(props: props) {
    const imageBaseurl = "https://image.tmdb.org/t/p/original/";

    const { data, isLoading, isFetching } = useGetMoviesQuery(props.fetchUrl);

    const navigate = useNavigate();

    const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        e.preventDefault();
        const movieId = Number(e.currentTarget.getAttribute("data-id"));
        // const movieId = Number(movie.id);

        navigate(`/movie/${movieId}`);
    };

    if (!data || isLoading|| isFetching) {
        return <CircularProgress/>;
    }
    const movies = data.results;
    console.log("🚀 ~ file: Row.tsx:17 ~ Row ~ movies:", movies);

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
