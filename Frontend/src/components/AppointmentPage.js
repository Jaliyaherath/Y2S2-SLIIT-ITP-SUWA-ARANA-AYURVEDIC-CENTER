
import React, { useState, useEffect } from "react";
import axios from "axios";
import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";

axios.defaults.baseURL = "http://localhost:8090/";

function AppointmentPage() {
  const [addSection, setAddSection] = useState(false);
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
  
  const handleEdit = (appointment) => {
    setFormData({
      _id: appointment._id,
      name: appointment.name,
      packageName: appointment.packageName,
      doctorName: appointment.doctorName,
      
    });
    setAddSection(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`api/Appoiment/deleteApp/${id}`);

      if (response.data.success) {
        alert(response.data.message);
        getFetchData(); // Update dataList after delete
      }
    } catch (error) {
      console.error("Error deleting Appointment:", error);
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

  return (
    <div>
      {/* <h2>{formData._id ? "Edit Appointment" : "Add Appointment"}</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Add Appointment"}
      </button> */}
      {addSection ? (
        <AppointmentForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          
          rest={formData}
        />
      ) : (
        <div>
          <AppointmentList
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

export default AppointmentPage;

