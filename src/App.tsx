import "./App.css";

import { RouterProvider } from "react-router-dom";
import { auth } from "./fireBase.tsx";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { login, logout } from "./state/userSlice.ts";
import { router } from "./routes/router.tsx";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            console.log(
                "🚀 ~ file: App.tsx:18 ~ onAuthStateChanged ~ userAuth:",
                userAuth
            );
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                dispatch(logout());
                auth.signOut();
            }
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch]);

    return <RouterProvider router={router} />;
}

export default App;
