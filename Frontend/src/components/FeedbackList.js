import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

function FeedbackList() {
  const handleDelete = async (id) => {
    const data = await axios.delete("/api/feedback/deletefeedback/" + id);

    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const getFetchData = async () => {
    const data = await axios.get("/api/feedback/getfeedback");
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const [dataList, setDataList] = useState([]);

  return (
    <div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>Doctor's Rate</th>
              <th>Feedback Type</th>
              <th>Describe Feedback</th>
              <th>Overall satisfaction</th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((el) => (
                <tr key={el._id}>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.gender}</td>
                  <td>{el.date}</td>
                  <td>{el.doctor_name}</td>
                  <td>{el.rate}</td>
                  <td>{el.feedback_type}</td>
                  <td>{el.feedback}</td>
                  <td>{el.satisfaction}</td>
                  <td>
                    <button className="btn btn-delete" onClick={() => handleDelete(el._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeedbackList;
