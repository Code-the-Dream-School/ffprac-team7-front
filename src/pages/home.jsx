import { Link } from "react-router-dom"

export function Home() {
    return (
        <div>
            <h1>home</h1>
            <p>This is the home page.</p>
            <Link to="/indexPage">Go to Index Page</Link>
            <Link to="/itemDetails">Go to Item Details page</Link>
        </div>
    )
}