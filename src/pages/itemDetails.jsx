import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/itemDetails.css";
import placeHolder from "../assets/placeholder.svg"

export function ItemDetails() {
    return (
        <div>
            <Header pageTitle="Item Details"/>
            <div className='item_details_container'>
                <img className='itemImage' src={placeHolder} />
            
                <h2 className='itemName'>Item Name</h2>
            
                <div className="description-container"> 
                    <h3 className="description" > Description </h3>
                    <p className="descriptionBox" > </p>  
                </div>
                
                <div className='date-Container'>
                    <h3 className="date" > Date Found </h3>
                    <p className="dateBox"> DD/MM/YYYY</p>  
                </div>

                <div className='location-Container'>
                    <h3 className="location" > Location </h3>
                    <p className="locationBox">Location</p>  
                </div>
                
                <div className='status-Container'>
                    <h3 className="status" > Status </h3>
                    <p className="lostFound" > Lost </p>   
                </div>

                <div className='claim-Button-Container'>
                    <button className='button'> Claim </button>
                </div>

                <Link className='backHome' to="/">Back to Home Page</Link>
            </div>
        </div>
    )
}


