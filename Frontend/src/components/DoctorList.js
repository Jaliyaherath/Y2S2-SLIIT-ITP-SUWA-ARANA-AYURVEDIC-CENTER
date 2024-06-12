// components/DoctorList.js
import React from "react";
//import "../css/DoctorList.css";

const DoctorList = ({ dataList, handleEdit, handleDelete }) => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Schedule</th>
            <th>Date</th>
            <th>Fees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.schedule}</td>
              <td>{new Date(doctor.date).toLocaleDateString()}</td>
              <td>${doctor.fees}</td>
              <td>
                <button className="btn btn-edit" onClick={() => handleEdit(doctor)}>
                  Edit
                </button>
                <button className="btn btn-delete" onClick={() => handleDelete(doctor._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
