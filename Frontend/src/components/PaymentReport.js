import React, { useState, useEffect } from "react";

import axios from "axios";

import PaymentReportComponent from "./PaymetReportComponent";

 

axios.defaults.baseURL = "http://localhost:8090/";

 

function PaymentReport() {

  const [addSection, setAddSection] = useState(false);

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

 

 

 

  const handleEdit = (payment) => {

    setFormData({

      _id: payment._id,

      price: payment.price,

      image: payment.image,
      
    });

    setAddSection(true);

  };

 

 

 

  const getFetchData = async () => {

    try {

      const response = await axios.get("/getPay");

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

      <h2>Payment Details Report</h2>

      {/* Render the PaymentReportComponent and pass the dataList as a prop */}

      <PaymentReportComponent dataList={dataList} />

    </div>

  );

};

 

export default PaymentReport;