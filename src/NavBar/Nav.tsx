import  { useEffect, useState } from "react";
import "./Nav.css";
import {  NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../state/userSlice";
import { auth } from "../fireBase";
import {  toggleSearch } from "../state/searchSlice";

function Nav() {
    
    const dispatchSearchState = useDispatch();
    const handleSearchIconClick = () => {
        dispatchSearchState(toggleSearch());
    };

    const [scrolled, setScroll] = useState(false);

   

    const navigate = useNavigate();

    const handleNavigationToProfile = () => {
        navigate("/profile");
    };
    const handleNavigationToHome = () => {
        navigate("/home");
    };

    const dispatch = useDispatch();

    const handleScroll = () => {
        if (window.scrollY > 80) setScroll(true);
        else setScroll(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const signOut = () => {
        auth.signOut();
        dispatch(logout());
    };
    return (
        <div className={`nav ${scrolled && "nav_black"}`}>
            <div className="nav-content">
                <div className="navContent-leftSide">
                    <img
                        className="nav_logo"
                        src="../src/assets/images/logo.png"
                        alt=""
                        onClick={handleNavigationToHome}
                    />
                    <ul>
                        <li>
                            <NavLink className="navLink" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                </div>

                <div className="navContent-rightSide">
                    <i
                        className="bi bi-search"
                        onClick={handleSearchIconClick}
                    ></i>
                    <img
                        className="nav_avatar"
                        src="../src/assets/images/Netflix-avatar.png"
                        alt=""
                        onClick={handleNavigationToProfile}
                    />
                    <button className="signOut" onClick={signOut}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;
