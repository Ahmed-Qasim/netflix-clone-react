import "./HomeScreen.css";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import requests from "./Requests";

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* home page */}
            <Banner />
            <Row
                title="NETFLEX ORIGINALS"
                fetchUrl={requests.fetchNetflixOrlginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default HomeScreen;
