import { Link } from "react-router-dom"

export function Index() {
    return (
        <div>
            <h1>index</h1>
            <p>This is the Index Page</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    )
}