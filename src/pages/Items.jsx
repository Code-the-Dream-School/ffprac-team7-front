import React, { useState, useEffect } from "react";
import Header from "../shared/header";
import ItemCard from "../shared/ItemCard";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Items.css";


const token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjJkNzAzZWJhMzJmNDFjNzg5NTIwMWIiLCJ1c2VybmFtZSI6IlRyZWVTdGFuZCIsImlhdCI6MTcxNDI2OTgwMCwiZXhwIjoxNzE2ODYxODAwfQ.v1kpMaryjcNcDq-3QT-rHXGbT-RhF2UX0oFyq7he4Pw';
const encodedToken = encodeURIComponent(token);


  const Items = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");
    const [error, setError] = useState(null);
   
    useEffect(() => {
      fetchItems();
    }, []);


    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/items', {
         
          headers: {
              Authorization:`Bearer ${ encodedToken }`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        setError(error.message);
        toast.error('Failed to fetch items');
        console.log(error.message)
      }
    };



    const handleFilterChange = (event) => {
      const { value } = event.target;
      setFilter(value);
    };
   
    const filteredItems = items.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(filter.toLowerCase());
      const dateMatch = item.dateLostFound.includes(filter);
      return titleMatch || dateMatch;
    });
   

   
    return (
      <div>
        <Header pageTitle="Reported Items" />
        <div className="searchContainer">
          <input
            className="searchField"
            type="text"
            placeholder="Search: title or date"
            value={filter}
            onChange={handleFilterChange}
            />
        </div>
        {filteredItems.length === 0 ? (
          <div className="noResultsMessage">No Results Found</div>
         ):(
        <div className="reportedItemsContainer">
          {filteredItems.map((item) => (
            // <Link key={item.id} to={`/item/${item.id}`}>
            <ItemCard
            key={item._id}
            title={item.title}
            description={item.description}
            location={item.location}
            lost={item.lost}
            dateReported={item.dateReported}
          />
            // </Link>
          ))}
        </div>
      )}
      <ToastContainer className='itemsToast'/>
      </div>
    );
  };
 
  export default Items;