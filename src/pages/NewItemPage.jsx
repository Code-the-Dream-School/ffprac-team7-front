import React, { useState } from "react";
import "../styles/NewItemPage.css";
import Header from "../shared/header";
import CameraIcon from "../assets/CameraIcon";
import { ToastContainer, toast } from "react-toastify";

const theToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjJkNzAzZWJhMzJmNDFjNzg5NTIwMWIiLCJ1c2VybmFtZSI6IlRyZWVTdGFuZCIsImlhdCI6MTcxNDI2OTgwMCwiZXhwIjoxNzE2ODYxODAwfQ.v1kpMaryjcNcDq-3QT-rHXGbT-RhF2UX0oFyq7he4Pw";
const token = encodeURIComponent(theToken);

const NewItemPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lost, setLost] = useState("");
  const [dateReported, setDateReported] = useState("");
  const [location, setLocation] = useState("");
  const [newItemData, setNewItemData] = useState({});
  const [message, setMessage] = useState(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/v1/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          lost,
          dateReported,
          location,
        }),
      });

      if (response.ok) {
        const itemData = await response.json();
        console.log("Item posted success", itemData);
        setNewItemData(itemData);
        setMessage(alert("Item posted successfully"));
        setTitle("");
        setDescription("");
        setLost("");
        setDateReported("");
        setLocation("");
      } else {
        const errorData = await response.json();
        console.log(
          "Post item failed",
          response.status,
          response.json(),
          errorData
        );
        setMessage(alert("Failed to post item. Please try again."));
      }
    } catch (error) {
      console.log("Post item failed", error);
    }
  };

  return (
    <div>
      <Header pageTitle="Report an Item" />
      {message && (
        <div
          className={`message ${
            message.includes("success") ? "success" : "error"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="newItemFormContainer">
        <label htmlFor="image">Attach Image</label>
        <div className="imgInputContainer">
          <CameraIcon className="camera-icon" />
        </div>

        <div>
          <label htmlFor="date">Date</label>

          <input
            className="textInput"
            type="date"
            id="dateLostFound"
            value={dateReported}
            onChange={(e) => setDateReported(e.target.value)}
            required
          ></input>
        </div>
        <div>
          {" "}
          <label htmlFor="title">Item Name</label>
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
          <label htmlFor="location">Location</label>

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
            <option value={true}>Lost</option>
            <option value={false}>Found</option>
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItemPage;
