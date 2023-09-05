
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import { useGetMoviesQuery } from "../state/ApiSlice";

function Banner(props) {
    // fetch movies
    // const [movie, setMovie] = useState<Movie | null>(null);

    // useEffect(() => {
    //     if (!isLoading && trendingMovies) {
    //         setMovie(
    //             trendingMovies?.results[
    //                 Math.floor(
    //                     Math.random() * trendingMovies?.results.length - 1
    //                 )
    //             ]
    //         );
    //     }
    // }, [isLoading, trendingMovies]);

    const { data: trendingMovies, isLoading } = useGetMoviesQuery(props.fetchUrl);

    const navigate = useNavigate();

    function truncate(string: string, n: number) {
        return string.length > n ? string.substring(0, n - 1) + "..." : string;
    }
    //navigate to movie page
    const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
        e.preventDefault();
        const movieId = Number(e.currentTarget.getAttribute("data-movie-id"));

        navigate(`/movie/${movieId}`);
    };

    if (isLoading || !trendingMovies) {
        return <div>Loading...</div>;
    }
    const randomIndex = Math.floor(
        Math.random() * trendingMovies.results.length
    );
    const movie = trendingMovies?.results[randomIndex];

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
