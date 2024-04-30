import React, { useState, useEffect } from "react";
import Header from "../shared/header";
import ItemCard from "../shared/ItemCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Items.css";
import { Link } from 'react-router-dom';
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjJkNzAzZWJhMzJmNDFjNzg5NTIwMWIiLCJ1c2VybmFtZSI6IlRyZWVTdGFuZCIsImlhdCI6MTcxNDI2OTgwMCwiZXhwIjoxNzE2ODYxODAwfQ.v1kpMaryjcNcDq-3QT-rHXGbT-RhF2UX0oFyq7he4Pw";
const encodedToken = encodeURIComponent(token);

const Items = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(null);
  const [lostFilter, setLostFilter] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/items", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${encodedToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      console.log(data);
      setItems(data.items || []);
    } catch (error) {
      setError(error.message);
      toast.error("Failed to fetch items");
      console.log(error.message);
    }
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const handleClearFilter = () => {
    setFilter("");
  };

  const handleLostFilter = (lostValue) => {
    setLostFilter(lostValue);
  };

  const filteredItems = Array.isArray(items)
    ? items.filter((item) => {
        const lowercaseFilter = filter.toLowerCase();
        const lowercaseTitle = item.title.toLowerCase();
        return (
          (!lostFilter || item.lost === lostFilter) && // Check lost filter
          ((item._id && item._id.toLowerCase().includes(lowercaseFilter)) ||
            (item.location &&
              item.location.toLowerCase().includes(lowercaseFilter)) ||
            (item.dateReported &&
              item.dateReported.toLowerCase().includes(lowercaseFilter)) ||
            (item.title && lowercaseTitle.includes(lowercaseFilter))) // Filter by title
        );
      })
    : [];

  console.log();
  return (
    <div>
      <Header pageTitle="Reported Items" />
      <div className="LostFoundButtonContainer">
        <button className="button" onClick={() => handleLostFilter(true)}>
          Lost
        </button>
        <div className="searchContainer">
          <input
            className="searchField"
            type="text"
            placeholder="Search: Title, Date, or Location"
            value={filter}
            onChange={handleFilterChange}
          />
          {filter && (
            <button className="clearFilterButton" onClick={handleClearFilter}>
              Clear
            </button>
          )}
        </div>
        <button className="button" onClick={() => handleLostFilter(false)}>
          Found
        </button>
      </div>
      {filteredItems.length === 0 ? (
        <div className="noResultsMessage">No Results Found</div>
      ) : (
        <div className="reportedItemsContainer">
          {filteredItems.map((item) => (
            <Link key={item._id} to={`/items/${item._id}`}>
              <ItemCard
                key={item._id}
                title={item.title}
                description={item.description}
                location={item.location}
                lost={item.lost}
                dateReported={item.dateReported}
              />
            </Link>
          ))}
        </div>
      )}
      <ToastContainer className="itemsToast" />
    </div>
  );
};

export default Items;
