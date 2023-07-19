import React from "react";
import "./WelcomePage.css";
import "./SigninPage/SignInScreen";
import SignInScreen from "./SigninPage/SignInScreen";
import { useSelector } from "react-redux";
import { selectUser } from "./state/userSlice";
import { Navigate } from "react-router-dom";
import WelcomeSegment from "./WelcomeSegment/WelcomeSegment";
import SignupPage from "./SignupPage/SignupPage";

function WelcomePage() {
    const user = useSelector(selectUser);
    console.log("🚀 ~ file: LoginScreen.tsx:11 ~ LoginScreen ~ user:", user);

    if (user) {
        return <Navigate to="/home" replace />;
    }
    return (
        <div className="loginScreen">
            <div className="loginScreen-bg">
                <div className="loginScreen-topContainer">
                    <img
                        className="loginScreen-logo"
                        src="../src/assets/images/logo.png"
                        alt=""
                    />
                    {/* <button className="loginScreen-signIn-btn"> Sign In</button> */}
                </div>
                <div className="loginScreen-gradient"></div>
                <div className="loginScreen-body">
                    {/* <WelcomeSegment /> */}
                    <SignInScreen />
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
