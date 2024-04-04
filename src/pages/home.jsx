import { Link } from "react-router-dom"
import Header from "../shared/header";

export function Home() {
    return (
        <div>
            <Header/>
            <h1>home</h1>
            <p>This is the home page.</p>
            <Link to="/indexPage">Go to Index Page</Link>
            <Link to="/itemDetails">Go to Item Details page</Link>
            <Link to="/reportedItems">Reported Items</Link>
            <Link to="/reportNewItem">Report and Item</Link>
        </div>
    )
}