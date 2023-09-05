import { useDispatch } from "react-redux";
import "./SearchPage.css";
import { toggleSearch } from "../state/searchSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchMoviesQuery } from "../state/ApiSlice";
import { debounce, values } from "lodash";
import { useDebounce } from "@uidotdev/usehooks";
import MoviesList from "./MoviesList/MoviesList";

interface props {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
}

function SearchPage() {
    const imageBaseurl = "https://image.tmdb.org/t/p/original/";

    const [searchQuery, setSearchQuery] = useState("");
    const debouncedOnChange = useDebounce(searchQuery, 1000);

    const dispatchSearchState = useDispatch();

    const handleSearchIconClick = () => {
        dispatchSearchState(toggleSearch());
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchQuery(value);
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

            <MoviesList searchQuery={debouncedOnChange} />
        </div>
    );
}

export default SearchPage;
// useEffect(() => {
//     document.body.classList.add("no-scroll");
//     async function fetch() {
//         const response = await HttpClient.get(
//             `/search/movie?query=${searchQuery}&api_key=${Api_Key}`
//         );
//         setMovies(response.data.results);
//         console.log("response", response.data.results);
//         return response;
//     }
//     fetch();
//     return () => {
//         document.body.classList.remove("no-scroll");
//     };
// }, [searchQuery]);
