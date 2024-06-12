
import React, { useState, useEffect } from "react";
import axios from "axios";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
//import FeedbackReportComponent from "./FeedbackReportComponent";

axios.defaults.baseURL = "http://localhost:8090/";

function FeedbackPage() {
  const [addSection, setAddSection] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    gender:"",
    date:"",
    doctor_name:"",
    rate:"",
    feedback_type:"",
    feedback:"",
    satisfaction:"",
    _id: "",
  });

  // const handleFileChange = (file) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     image: file,
  //   }));
  // };

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

      const { satisfaction, ...formDataWithoutSatisfaction } = formData;
      const dataToSend = { ...formDataWithoutSatisfaction, satisfaction: formData.satisfaction.toString() };
      if (formData._id) {
        const response = await axios.put(`/api/feedback/update/${formData._id}`, formData);
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
        const response = await axios.post("/api/feedback/create", formData);
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
     
      alert(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };
  

  const handleEdit = (feedback) => {
    setFormData({
      _id: feedback._id,
      name: feedback.name,
      email: feedback.email,
      date:feedback.date,
      doctor_name: feedback.doctor_name,
      rate: feedback.rate,
      feedback_type:feedback.feedback_type,
      feedback:feedback.feedback,
      satisfaction: feedback.satisfaction,
    });
    setAddSection(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/feedback/delete/${id}`);

      if (response.data.success) {
        alert(response.data.message);
        getFetchData(); // Update dataList after delete
      }
    } catch (error) {
      console.error("Error deleting Feedback:", error);
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("/api/feedback/getData");
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

  return (
    <div>
      {/* <h2>{formData._id ? "Edit Treatment" : "Add Feedback"}</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Add feedback"}
      </button> */}
      {addSection ? (
        <FeedbackForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
  
          rest={formData}
        />
      ) : (
        <div>
          <FeedbackList
            dataList={dataList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <div>
    
            
    
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackPage;

