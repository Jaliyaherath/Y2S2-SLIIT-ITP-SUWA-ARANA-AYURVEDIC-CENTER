
import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentForm from "./PaymentForm";
import PaymentList from "./PaymentList";
//import ReportComponent from "./ReportComponent";

axios.defaults.baseURL = "http://localhost:8090/";

function PaymentPage() {
  const [addSection, setAddSection] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [payments, setPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
    const { name, value } = e.target;
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
          `/api/payment/updatePay/${formData._id}`,
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
        const response = await axios.post("/api/payment/createPay", formDataWithFile, {
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

  const handleEdit = (payment) => {
    setFormData({
      _id: payment._id,
      price: payment.price,
    });
    setAddSection(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/payment/deletePay/${id}`);

      if (response.data.success) {
        alert(response.data.message);
        getFetchData(); // Update dataList after delete
      }
    } catch (error) {
      console.error("Error deleting Payment:", error);
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("/api/payment/getPay");
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
    // Fetch payment data from your backend
    async function fetchPayments() {
      try {
        const response = await axios.get("/api/payment/getPay");
        if (response.data.success) {
          setPayments(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    }

    fetchPayments();
  }, []);

  const handleSearch = () => {
    const filteredPayments = payments.filter((payment) =>
    payment.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredPayments);
  };

  return (
    <div>
      {/* <h2>{formData._id ? "Edit Payment" : "Add Payment"}</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Add Payment"}
      </button> */}

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


      {addSection ? (
        <PaymentForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleFileChange={handleFileChange}
          rest={formData}
        />
      ) : (
        <div>
          <PaymentList
            dataList={dataList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          {/* <div>
    
            <ReportComponent dataList={dataList} />
    
          </div> */}
        </div>
      )}
    </div>
  );
}

export default PaymentPage;

