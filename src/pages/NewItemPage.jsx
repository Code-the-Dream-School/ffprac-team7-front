import React, { useState } from "react";

const NewItemPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);
  const [dateLostFound, setDateLostFound] = useState("");
  const [location, setLocation] = useState("")

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", { title, description, status });
    // Reset to
    setTitle("");
    setDescription("");
    setStatus("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Attach Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            value={image}
            onChange={handleImageChange}
          ></input> </div>

          <div><label htmlFor="date">Date</label>
          <input
            type="date"
            id="dateLostFound"
            value={dateLostFound}
            onChange={(e) => setDateLostFound(e.target.value)}
            required
          ></input>

           </div>
        <div>  <label htmlFor="title">Item Name</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label >Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Item Category</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
