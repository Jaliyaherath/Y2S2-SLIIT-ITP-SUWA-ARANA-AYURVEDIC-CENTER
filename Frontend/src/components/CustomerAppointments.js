import React, { useState, useEffect } from "react";

import axios from "axios";
import AppointmentCard from "./AppointmentCard";
import AppointmentForm from "./AppointmentForm";
import Homepage from "./HomePage";
import "../css/CustomerTreatments.css"; // Import your CSS file

axios.defaults.baseURL = "http://localhost:8090/";

function AppointmentPage() {
  const [addSection, setAddSection] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    packageName: "",
    doctorName: "",
    _id: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (formData._id) {
        const response = await axios.put(`api/Appoiment/updateAPP/${formData._id}`, formData);
       if (response.data.success) {
          alert(response.data.message);
          setFormData({
            name: "",
            packageName: "",
            doctorName: "",
            _id: "",
          });
          setAddSection(false);
          getFetchData(); 
        } 

        }else {
            const response = await axios.post("api/Appoiment/createApp", formData);
            if (response.data.success) {
              alert(response.data.message);
              setFormData({
                name: "",
                packageName: "",
                doctorName: "",
              });
              setAddSection(false);
              getFetchData(); 
            } 
        }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("api/Appoiment/getApp");
      if (response.data.success) {
        setDataList(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    // Fetch appointment data from your backend
    async function fetchAppointments() {
      try {
        const response = await axios.get("api/Appoiment/getApp");
        if (response.data.success) {
          setAppointments(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    }

    fetchAppointments();
  }, []);

  const handleSearch = () => {
    const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredAppointments);
  };

  return (
    <div>
      <Homepage />


    

      
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

      <h2>{formData._id ? "Edit Appointment" : "Book Appointment"}</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Book Appointment"}
      </button>
      {addSection &&
        <AppointmentForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          
          rest={formData}
        />}
      <h2>Appoinments</h2>
      <div className="treatment-list">
        <div className="treatment-columns">
          {searchResults.length > 0
            ? searchResults.map((appointment) => (
                <div key={appointment._id} className="treatment-column">
                  <AppointmentCard appointment={appointment} />
                </div>
              ))
            : appointments.map((appointment) => (
                <div key={appointment._id} className="treatment-column">
                  <AppointmentCard appointment={appointment} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default AppointmentPage;
