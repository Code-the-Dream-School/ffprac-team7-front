import { Link } from "react-router-dom"

export function ItemDetails() {
    return (
        <div>
            <h1>Item Details</h1>
            <p>This page shows the item details</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    )
}