import React, { useState, useEffect } from "react";
import "../css/TreatmentForm.css";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/";

const FeedbackForm = () => {
  const getFetchData = async () => {
    const data = await axios.get("/api/feedback/getfeedback");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    date: "",
    doctor_name: "",
    rate: "",
    feedback_type: [],
    feedback: "",
    satisfaction: "",
  });

  const [dataList, setDataList] = useState([]);

  const [successPopup, setSuccessPopup] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.gender.trim() === "" ||
      formData.date.trim() === "" ||
      formData.doctor_name.trim() === "" ||
      formData.rate.trim() === "" ||
      formData.feedback_type.length === 0 ||
      formData.feedback.trim() === "" ||
      formData.satisfaction.trim() === ""
    ) {
      return;
    }

    try {
      const { name, email, gender, date, doctor_name, rate, feedback_type, feedback, satisfaction } = formData;
      const response = await axios.post("/api/feedback/createfeedback", {
        name,
        email,
        gender,
        date,
        doctor_name,
        rate,
        feedback_type,
        feedback,
        satisfaction,
      });

      if (response.data.success) {
        alert("Feedback submitted successfully!");
        setSuccessPopup(true);
        getFetchData();
        setFormData({
          name: "",
          email: "",
          gender: "",
          date: "",
          doctor_name: "",
          rate: "",
          feedback_type: [],
          feedback: "",
          satisfaction: "",
        });
      } else {
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleLike = () => {
    setFormData((prev) => ({
      ...prev,
      rate: "👍",
    }));
  };

  const handleStarRating = (rating) => {
    const starEmojis = "⭐️".repeat(rating);
    setFormData((prev) => ({
      ...prev,
      satisfaction: starEmojis,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      gender: "",
      date: "",
      doctor_name: "",
      rate: "",
      feedback_type: [],
      feedback: "",
      satisfaction: "",
    });
    setSuccessPopup(false);
  };

  return (
    <div className="container">
      <form>
        <h1>Feedback Form</h1>
        <div className="form-group">
          <label htmlFor="name">User Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleOnChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleOnChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" required />
        </div>
        <div className="form-group">
          <label htmlFor="gender" value={formData.gender}>Gender</label>
          <div>
            <input type="radio" name="gender" id="male" value="male" onChange={handleOnChange} required />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" name="gender" id="female" value="female" onChange={handleOnChange} required />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleOnChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="doctor_name">Doctor's Name</label>
          <input type="text" name="doctor_name" id="doctor_name" value={formData.doctor_name} onChange={handleOnChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="rate">Rate Your Doctor</label>
          <button type="button" onClick={handleLike}>👍Like</button>
          <span>{formData.rate}</span>
        </div>
        <div className="form-group">
          <label htmlFor="feedback_type" value={formData.feedback_type}>Feedback Type</label>
          <div>
            <input type="checkbox" name="feedback_type" id="suggestion" value="suggestion" onChange={handleOnChange} />
            <label htmlFor="suggestion">Suggestion</label>
          </div>
          <div>
            <input type="checkbox" name="feedback_type" id="complaint" value="complaint" onChange={handleOnChange} />
            <label htmlFor="complaint">Complaint</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Describe Feedback</label>
          <textarea name="feedback" id="feedback" value={formData.feedback} onChange={handleOnChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rate">Overall satisfaction</label>
          <button type="button" onClick={() => handleStarRating(1)}>⭐️</button>
          <button type="button" onClick={() => handleStarRating(2)}>⭐️</button>
          <button type="button" onClick={() => handleStarRating(3)}>⭐️</button>
          <button type="button" onClick={() => handleStarRating(4)}>⭐️</button>
          <button type="button" onClick={() => handleStarRating(5)}>⭐️</button>
          <span>{formData.satisfaction}</span>
        </div>
        <div className="form-group">
          <button type="button" onClick={handleSubmit}>Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
        
      </form>
    </div>
  );
};

export default FeedbackForm;

 
