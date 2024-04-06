import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/itemDetails.css";

export function ItemDetails() {
    return (
        <div>
            <Header pageTitle="Item Details"/>
        <div class='item_details_container'>
            
            <img class='itemImage' src='360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'/>
            
            <h4 class='itemName'>Item Name</h4>
            
            <div class="description-container"> 
            <h4 class="description" > Description </h4>
            <textarea class="DescriptionBox" ></textarea>  {/* <-- text area ? */}
            </div>
            
            <div class='Date-Container'>
            <h4 class="date" > Date Found </h4>
            <textarea class="DateBox" placeholder="DD/MM/YYYY"> DD/MM/YYYY </textarea>   {/* <-- text area ? */}
            </div>

            <div class='Location-Container'>
            <h4 class="location" > Location </h4>
            <textarea class="locationBox" placeholder='Location' ></textarea>   {/* <-- text area ? */}
            </div>
            
            <div class='Status-Container'>
            <h4 class="status" > Status </h4>
            <div class="lostFound" > Lost </div>   
            </div>

            <div class='Claim-Button-Container'>
            <button class='button'> Claim</button>
            </div>


            <Link class='BackHome' to="/">Back to Home Page</Link>
        </div>
        </div>
    )
}


