
import Nav from "./NavBar/Nav";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Root.css";
import SearchPage from "./SearchPage/SearchPage";
import { useSelector } from "react-redux";
import { selectSearchState } from "./state/searchSlice";

function Root() {
    const showSearchState = useSelector(selectSearchState);

    return (
        <>
            <Nav />
            {showSearchState && (
                <div className="search-overlay">
                    <SearchPage isLargeRow title={""} fetchUrl={""} />
                </div>
            )}

            <div id="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Root;
