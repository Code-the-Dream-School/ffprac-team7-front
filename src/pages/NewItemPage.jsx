import React, { useState } from "react";
import "../styles/NewItemPage.css";
import Header from "../shared/header";
import CameraIcon from "../assets/CameraIcon";



const NewItemPage = ({token}) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lost, setLost] = useState("");
  const [dateReported, setDateReported] = useState("");
  const [location, setLocation] = useState("")
  const [error, setError] =useState("")





  const handleAddItem = async(formData) => {
    
      try {
        const response = await fetch('http://localhost:8000/api/v1/items', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${await token}`,
            },
            body: formData,
        });

        if (response.ok) {
            const body = await response.json();
            console.log(`Item created successfully ${response.status}, body`);
        } else {
            throw new Error(`API request failed ${response.status}`);
        }
    } catch (error) {
        console.error("Error while adding item:", error);
        alert("Failed to add item. Please try again later.");
    }
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");


    if (!title || !description || !lost || !dateReported || !location) {
        setError("All fields are required!");
        return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("lost", lost);
    formData.append("dateReported", dateReported);
    formData.append("location", location);

    try {
     
        await handleAddItem(formData);
setLost("")
    } catch (error) {

        console.error("Error while submitting form:", error);
        setError("Failed to submit the form. Please try again later.");
    }
};

  return (
    <div>
      <Header pageTitle="Report an Item"/>
      <form onSubmit={handleSubmit} className="newItemFormContainer" >
           <label htmlFor="image">Attach Image</label>
        <div className="imgInputContainer">
          <CameraIcon className="camera-icon"/>
          </div>

          <div><label  htmlFor="date">Date</label>
       
          <input
          className="textInput"
            type="date"
            id="dateLostFound"
            value={dateReported}
            onChange={(e) => setDateReported(e.target.value)}
            required
          ></input>

           </div>
        <div>  <label  htmlFor="title">Item Name</label>
        
          <input
          className="textInput"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location" >Location</label>
         
          <input
          className="textInput"
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Item Status</label>
          
          <select
            id="status"
            value={lost}
            onChange={(e) => setLost(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
       
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewItemPage;
