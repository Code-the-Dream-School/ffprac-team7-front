import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/itemDetails.css";

export function ItemDetails() {
    return (
        <div class='item_details_container'>
            <Header pageTitle="Item Details"/>
            
            <img class='itemImage' src='360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'/>
            
            <h4 class='itemName'>Item Name</h4>
            
            <h4 class="description" > Description </h4>
            <textarea class="rect1" ></textarea>  {/* <-- text area ? */}
            
            <h4 class="date" > Date Found </h4>
            <textarea class="rect2" placeholder="DD/MM/YYYY"> DD/MM/YYYY </textarea>   {/* <-- text area ? */}
           
            <h4 class="location" > Location </h4>
            <textarea class="rect3" placeholder='Location' ></textarea>   {/* <-- text area ? */}
            
            <h4 class="status" > Status </h4>
            <div class="lostFound" > Lost </div>   

            <div class="claim" > Claim </div>   {/*button*/}
        
            <Link class='BackHome' to="/">Back to Home Page</Link>
        </div>
    )
}


