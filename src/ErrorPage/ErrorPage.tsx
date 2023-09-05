import "./ErrorPage.css";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className="center">
            <div className="content">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <h2>{error.statusText || error.message}</h2>
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;
