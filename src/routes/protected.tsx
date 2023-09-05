import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../state/userSlice";

const Protected = (props: PropsWithChildren) => {
    const isLoggedIn = useSelector(selectUser);
    console.log(
        "🚀 ~ file: protected.tsx:8 ~ Protected ~ isLoggedIn:",
        isLoggedIn
    );

    if (!isLoggedIn) {
        return <Navigate to="login" replace />;
    }
    return <>{props.children}</>;
};

export default Protected;
