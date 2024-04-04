import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            <p>Search:</p>
            <input type='text' disabled />
            <button disabled>Submit</button>
            <p>Overview of Features</p>
            <p>Feature 1: TBD</p>
            <p>Feature 2: TBD</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    );
}

export default LandingPage;