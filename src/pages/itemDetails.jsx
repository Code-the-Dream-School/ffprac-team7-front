import { Link } from "react-router-dom"
import {toast} from 'react-toastify'

export function ItemDetails() {


  const notify  = () => toast("Hello details!")
    return (
        <div>
            <h1>Item Details</h1>
            <p>This page shows the item details</p>
            <Link to="/">Back to Home Page</Link>
            <button onClick={notify} style={{width: "100%", fontSize: "2rem", marginTop: "1rem"}}>Make some <span style={{fontStyle: "italic"}}>Toast</span></button>
        </div>
    )
}
