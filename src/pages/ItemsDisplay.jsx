import React from "react";
import "../styles/ItemDisplay.css";
import Header from "../shared/header";
import ItemCard from "../shared/ItemCard";

const ItemsDisplay = ({ reportedItems }) => {
  return (
    <div>
      <Header pageTitle="Reported Items" />
      {reportedItems.map(item => (
        <ItemCard key={item.id}  />
      ))}
    </div>
  );
};



export default ItemsDisplay;

