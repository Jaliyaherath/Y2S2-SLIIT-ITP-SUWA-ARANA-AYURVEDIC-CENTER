import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import Homepage from "./HomePage";
import "../css/CustomerTreatments.css"; // Import your CSS file

axios.defaults.baseURL = "http://localhost:8090/";

function DoctorItems() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch item data from your backend
    async function fetchItems() {
      try {
        const response = await axios.get("/getData"); // Change the route if needed
        if (response.data.success) {
          setItems(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    }

    fetchItems();
  }, []);

  const handleSearch = () => {
    const filteredItems = items.filter((item) =>
      item.Inametem.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredItems);
  };

  return (
    <div>
      <Homepage />
      <h2>Doctor Items</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i>
          Search
        </button>
      </div>
      <div className="item-list">
        <div className="item-columns">
          {searchResults.length > 0
            ? searchResults.map((item) => (
                <div key={item._id} className="item-column">
                  <ItemCard item={item} />
                </div>
              ))
            : items.map((item) => (
                <div key={item._id} className="item-column">
                  <ItemCard item={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorItems;
