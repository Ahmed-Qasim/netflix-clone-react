import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../fireBase";
import { login } from "../state/userSlice";
import "./SignupPage.css";

function SignupPage() {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);
    const firstNameRef = useRef<HTMLInputElement | null>(null);
    const lastNameRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const register = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current?.value ?? "",
            passRef.current?.value ?? ""
        )
            .then((UserCredential) => {
                dispatch(
                    login({
                        uid: UserCredential.user?.uid,
                        email: UserCredential.user?.email,
                    })
                );
                const user = UserCredential.user;
                return user?.updateProfile({
                    displayName: `${firstNameRef} ${lastNameRef}`,
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const handleClick = () => {
        navigate(`/login`);
    };

    return (
        <div className="loginScreen">
            <div className="loginScreen-bg">
                <div className="loginScreen-topContainer">
                    <img
                        className="loginScreen-logo"
                        src="../src/assets/images/logo.png"
                        alt=""
                    />
                    <button
                        className="loginScreen-signIn-btn"
                        onClick={handleClick}
                    >
                        Sign In
                    </button>
                </div>
                <div className="loginScreen-gradient"></div>
                <div className="loginScreen-body">
                    <div className="signupScreen">
                        <form className="loginForm" action="">
                            <h1>Sign Up</h1>
                            <input
                                ref={firstNameRef}
                                type="text"
                                name=""
                                placeholder="First Name"
                                id=""
                            />
                            <input
                                ref={lastNameRef}
                                type="text"
                                name=""
                                placeholder="Last Name"
                                id=""
                            />
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

                            <button type="submit" onClick={register}>
                                {" "}
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
