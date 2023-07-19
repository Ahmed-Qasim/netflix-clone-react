import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../state/userSlice";
import "./SearchPage.css";
import { toggleSearch } from "../state/searchSlice";
import HttpClient from "../Axios";
import { Api_Key } from "../Requests";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface props {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

function SearchPage(props: props) {
    const imageBaseurl = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState<any[] | null>([]);
    const [searchQuery, setSearchQuery] = useState("");

    // const searchInputRef = useRef<HTMLInputElement | null>(null);

    const dispatchSearchState = useDispatch();

    const handleSearchIconClick = () => {
        dispatchSearchState(toggleSearch());
    };

    const navigate = useNavigate();

    const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        e.preventDefault();
        const movieId = Number(e.currentTarget.getAttribute("data-id"));
        // const movieId = Number(movie.id);

        navigate(`/movie/${movieId}`);
    };

    useEffect(() => {
        document.body.classList.add("no-scroll");
        async function fetch() {
            const response = await HttpClient.get(
                `/search/movie?query=${searchQuery}&api_key=${Api_Key}`
            );
            setMovies(response.data.results);
            console.log("response", response.data.results);
            return response;
        }
        fetch();
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [searchQuery]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className="SearchPage">
            <div className="search">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="type what you wish here..."
                />
                <button onClick={handleSearchIconClick}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
            <div className="search-posters">
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

export default SearchPage;
