import { useNavigate } from "react-router-dom";
import { useSearchMoviesQuery } from "../../state/ApiSlice";
import { toggleSearch } from "../../state/searchSlice";
import "./MoviesList.css";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

function MoviesList(props: any) {
    const imageBaseurl = "https://image.tmdb.org/t/p/original/";

    const { data, isLoading, isFetching, isError } = useSearchMoviesQuery(
        props.searchQuery
    );

    const navigate = useNavigate();

    const dispatchSearchState = useDispatch();

    const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        e.preventDefault();
        const movieId = Number(e.currentTarget.getAttribute("data-id"));
        dispatchSearchState(toggleSearch());

        navigate(`/movie/${movieId}`);
    };

    return (
        <div className="search-posters">
            {isError ? ( // Step 2: Check isError
                <div className="error-message">
                    Something went wrong. Please try again later.
                </div>
            ) : (!data && isLoading) || isFetching ? (
                <CircularProgress />
            ) : data?.results.length == 0 ? (
                <>not found</>
            ) : (
                data?.results?.map(
                    (movie) =>
                        movie.poster_path && (
                            <img
                                className="poster"
                                key={movie.id}
                                src={`${imageBaseurl}${movie.poster_path}`}
                                alt={`${movie.name}`}
                                onClick={handleClick}
                                data-id={movie.id}
                            />
                        )
                )
            )}
        </div>
    );
}

export default MoviesList;
