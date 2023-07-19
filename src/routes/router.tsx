import ErrorPage from "../ErrorPage/ErrorPage.tsx";
import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "../WelcomePage.tsx";
import SignInScreen from "../SigninPage/SignInScreen.tsx";
import Root from "../Root.tsx";
import HomeScreen from "../HomeScreen.tsx";
import ProfileScreen from "../ProfileScreen/ProfileScreen.tsx";
import Protected from "./protected.tsx";
import MoviePage from "../MoviePage/MoviePage.tsx";
import SignupPage from "../SignupPage/SignupPage.tsx";
import SearchPage from "../SearchPage/SearchPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <Root />
            </Protected>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <HomeScreen />,
            },
            {
                path: "profile",
                element: <ProfileScreen />,
            },
            {
                path: "movie/:movieId",
                element: <MoviePage />,
            },
            {
                path: "/search",
                element: <SearchPage title={""} fetchUrl={""} />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginScreen />,
        errorElement: <ErrorPage />,
        children: [{ path: "login/loginForm", element: <SignInScreen /> }],
    },
    {
        path: "/signUp",
        element: <SignupPage />,
        errorElement: <ErrorPage />,
    },
]);
