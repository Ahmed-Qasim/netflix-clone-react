import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../fireBase";
import { useDispatch } from "react-redux";
import { login } from "../state/userSlice";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

function SignInScreen() {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current?.value ?? "",
            passRef.current?.value ?? ""
        )
            .then((userAuth) => {
                dispatch(
                    login({
                        uid: userAuth.user?.uid,
                        email: userAuth.user?.email,
                    })
                );
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const handleSignupClick: React.MouseEventHandler<HTMLImageElement> = (
        e
    ) => {
        e.preventDefault();
        navigate(`/signUp`);
    };
    return (
        <div className="signinScreen">
            <form className="loginForm" action="">
                <h1>Sign In</h1>
                <input
                    ref={emailRef}
                    type="email"
                    name=""
                    placeholder="Email"
                    id=""
                />
                <input
                    ref={passRef}
                    type="password"
                    name=""
                    placeholder="Password"
                    id=""
                />
                <button type="submit" onClick={signIn}>
                    {" "}
                    Sign In
                </button>
                <h6>
                    <span className="signinScreen-grey">New to Netflix? </span>
                    <span
                        className="signinScreen-link"
                        onClick={handleSignupClick}
                    >
                        Sign up Now.
                    </span>
                </h6>
            </form>
        </div>
    );
}

export default SignInScreen;
