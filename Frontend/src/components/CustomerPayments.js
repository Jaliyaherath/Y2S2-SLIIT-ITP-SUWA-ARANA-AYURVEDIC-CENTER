import React, { useState, useEffect } from "react";

import axios from "axios";
//import AppointmentCard from "./AppointmentCard";
import PaymentForm from "./PaymentForm";
import Homepage from "./HomePage";
import "../css/CustomerTreatments.css"; // Import your CSS file

axios.defaults.baseURL = "http://localhost:8090/";

function CustomerPayments() {
  const [addSection, setAddSection] = useState(false);
  // const [payments, setPayments] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({
    price: "",
    image: null,
    _id: "",
  });

  const handleFileChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFile = new FormData();
    formDataWithFile.append("price", formData.price);
    formDataWithFile.append("image", formData.image);
    try {
      if (formData._id) {
        formDataWithFile.append("_id", formData._id);
        const response = await axios.put(
          `/api/payment//updatePay/${formData._id}`,
          formDataWithFile,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.success) {
          alert(response.data.message);
          setFormData({
            price: "",
            image: null,
            _id: "",
          });
          setAddSection(false);
          getFetchData(); 
        }
      } else {
        const response = await axios.post("/api/payment//createPay", formDataWithFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.success) {
          alert(response.data.message);
          setFormData({
            price: "",
            image: null,
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
      const response = await axios.get("/api/payment//getPay");
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

  // useEffect(() => {
  //   // Fetch payment data from your backend
  //   async function fetchPayments() {
  //     try {
  //       const response = await axios.get("/getData");
  //       if (response.data.success) {
  //         setPayments(response.data.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching payment data:", error);
  //     }
  //   }

  //   fetchPayments();
  // }, []);

  // const handleSearch = () => {
  //   const filteredPayments = payments.filter((payment) =>
  //     payment.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setSearchResults(filteredPayments);
  // };

  return (
    <div>
      <Homepage />


    

      
      {/* <div className="search-bar">
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
      </div> */}

      <h2>{formData._id ? "Edit Payment" : "Do Payment"}</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Do Payment"}
      </button>
      {addSection &&
        <PaymentForm
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        handleFileChange={handleFileChange}
        rest={formData}
      />}
      {/* <h2>Appoinments</h2>
      <div className="treatment-list">
        <div className="treatment-columns">
          {searchResults.length > 0
            ? searchResults.map((payment) => (
                <div key={payment._id} className="treatment-column">
                  <AppointmentCard payment={payment} />
                </div>
              ))
            : payments.map((payment) => (
                <div key={payment._id} className="treatment-column">
                  <AppointmentCard payment={payment} />
                </div>
              ))}
        </div>
      </div> */}
    </div>
  );
}

export default CustomerPayments;
