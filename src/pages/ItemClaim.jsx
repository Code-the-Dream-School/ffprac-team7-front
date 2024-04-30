import React, { useState, useEffect } from "react";
import Header from "../shared/header";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/ItemClaim.css";
import  imagePlaceholder from "../assets/placeholder.svg"

const ItemClaim = () => {
  const { id } = useParams();
  const [currentItem, setCurrentItem] = useState({});
  const [proveOwnership, setProveOwnership] = useState("");
  const [error, setError] = useState(null);
  const encodedToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjJkNzAzZWJhMzJmNDFjNzg5NTIwMWIiLCJ1c2VybmFtZSI6IlRyZWVTdGFuZCIsImlhdCI6MTcxNDI2OTgwMCwiZXhwIjoxNzE2ODYxODAwfQ.v1kpMaryjcNcDq-3QT-rHXGbT-RhF2UX0oFyq7he4Pw";
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/items", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${encodedToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        console.log("Fetched items:", data);
        const fetchedItem = data.items.find((item) => item._id === id);
        if (!fetchedItem) {
          throw new Error("Item not found");
        }
        setCurrentItem(fetchedItem);
      } catch (error) {
        setError(error.message);
        toast.error("Failed to fetch item");
        console.error(error.message);
      }
    };
    fetchItems();
  }, [id]);
  const handleSubmitClaim = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Header pageTitle="Claim Item" />
      <div className="claimPageContainer">
        <div className="imgItemContainer">
          <img
            className="imgItem"
            src={currentItem.images || imagePlaceholder}
            alt={currentItem.title || ""}
          />
        </div>
        <h2 className="itemTitle">{currentItem.title || ""}</h2>
        {error ? (
          <div className="errorContainer">{error}</div>
        ) : (
          <form onSubmit={handleSubmitClaim}>
            <label htmlFor="claim">
              Provide some unique info about item proving ownership
            </label>
            <textarea
              id="claim"
              value={proveOwnership}
              className="claimText"
              onChange={(e) => setProveOwnership(e.target.value)}
            />
            <button type="submit" className="submitClaimButton">
              Submit Claim
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default ItemClaim;