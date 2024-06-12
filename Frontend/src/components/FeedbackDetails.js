import React, { useState, useEffect } from "react";
import axios from "axios";
import Feedbackcard from "./Feedbackcard";
import Homepage from "./HomePage";
import "../css/CustomerTreatments.css";
import FeedbackForm from "./FeedbackForm";

axios.defaults.baseURL = "http://localhost:8090/";

function FeedbackDetails() {
  const [addSection, setAddSection] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    date: "",
    doctor_name: "",
    rate: "",
    feedback_type: "",
    feedback: "",
    satisfaction: "",
    _id: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("/api/feedback/getfeedback");
      if (response.data.success) {
        setFeedback(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching Feedback data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData._id) {
        const response = await axios.put(
          `/api/feedback/updatefeedback/${formData._id}`,
          formData
        );
        if (response.data.success) {
          alert(response.data.message);
          setFormData({
            name: "",
            email: "",
            gender: "",
            date: "",
            doctor_name: "",
            rate: "",
            feedback_type: "",
            feedback: "",
            satisfaction: "",
            _id: "",
          });
          setAddSection(false);
          getFetchData();
        }
      } else {
        const response = await axios.post("/api/feedback/createfeedback", formData);
        if (response.data.success) {
          alert(response.data.message);
          setFormData({
            name: "",
            email: "",
            gender: "",
            date: "",
            doctor_name: "",
            rate: "",
            feedback_type: "",
            feedback: "",
            satisfaction: "",
          });
          setAddSection(false);
          getFetchData();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error details:", error.response ? error.response.data : error);

      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  useEffect(() => {
    // Fetch feedback data from your backend
    async function fetchFeedbacks() {
      try {
        const response = await axios.get("/api/feedback/getfeedback");
        if (response.data.success) {
          setFeedback(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      }
    }

    fetchFeedbacks();
  }, []);

  const handleSearch = () => {
    const filteredFeedbacks = feedback.filter((feedbackItem) =>
      feedbackItem.doctor_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredFeedbacks);
  };

  return (
    <div>
      <Homepage />

      <h2>Feedback Section</h2>
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

      <h2>{formData._id ? "Edit Feedback" : "Add Feedback"}</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Add feedback"}
      </button>
      {addSection && (
        <FeedbackForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          rest={formData}
        />
      )}

      <div className="treatment-list">
        <div className="treatment-columns">
          {searchResults.length > 0
            ? searchResults.map((feedbackItem) => (
                <div key={feedbackItem._id} className="treatment-column">
                  <Feedbackcard feedback={feedbackItem} />
                </div>
              ))
            : feedback.map((feedbackItem) => (
                <div key={feedbackItem._id} className="treatment-column">
                  <Feedbackcard feedback={feedbackItem} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetails;
