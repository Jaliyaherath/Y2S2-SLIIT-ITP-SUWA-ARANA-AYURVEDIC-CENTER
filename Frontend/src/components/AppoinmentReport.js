import React, { useState, useEffect } from "react";
import axios from "axios";
import AppointmentReportComponent from "./AppointmentReportComponent";
axios.defaults.baseURL = "http://localhost:8090/";

function AppointmentReport() {

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

  const handleEdit = (appointment) => {

    setFormData({
      _id: appointment._id,
      name: appointment.name,
      packageName: appointment.packageName,
      doctorName: appointment.doctorName,
      
    });

    setAddSection(true);

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

      <h2>Appoinment Details Report</h2>

      {/* Render the ReportComponent and pass the dataList as a prop */}

      <AppointmentReportComponent dataList={dataList} />

    </div>

  );

};

 

export default AppointmentReport;