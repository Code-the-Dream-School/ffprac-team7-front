import React from "react";
import Header from "../shared/header"
import { useState } from "react";




const ItemClaim = ({item}) =>{

const [proveOwnership, setProveOwnership] = useState("");

    return (
        <div>
            <Header pageTitle="Claim Item" />
    <img src={item.photo}/>
    <h2>{item.title}</h2>
    <form>
        <label htmlFor="proveOwnership">Provide some unique info about item proving ownership</label>
        <textarea
        id="claim"
        value={proveOwnership}
        onChange={(e)=>setProveOwnership(e.target.value)}

        />
        <button>Submit Claim</button>

    </form>

        </div>

    )
}


export default ItemClaim;

