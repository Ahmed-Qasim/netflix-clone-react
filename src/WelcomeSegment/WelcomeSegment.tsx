import React from "react";
import "./WelcomeSegment.css"
function WelcomeSegment() {
    return (
        <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
            </h3>
            <div className="loginScreen-input">
                <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <button className="loginScreen-getStarted">
                        Get Started
                    </button>
                </form>
            </div>
        </>
    );
}

export default WelcomeSegment;
