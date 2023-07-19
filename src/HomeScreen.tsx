import React, { useState } from "react";
import Nav from "./NavBar/Nav";
import "./HomeScreen.css";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import requests from "./Requests";
import SearchPage from "./SearchPage/SearchPage";
import { selectSearchState, toggleSearch } from "./state/searchSlice";
import { useSelector } from "react-redux";

function HomeScreen() {
    return (
        <div className="homeScreen">
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
