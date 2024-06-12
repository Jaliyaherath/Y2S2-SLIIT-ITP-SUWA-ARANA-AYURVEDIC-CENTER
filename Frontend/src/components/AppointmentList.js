// components/TreatmentList.js
import React from "react";
import "../css/TreatmentList.css";


const AppointmentList = ({ dataList, handleEdit, handleDelete,showActions }) => {
  return (

    
    <div className="tableContainer">
       
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Package Name</th>
            <th>Doctor Name</th>
             <th>Actions</th>  
          </tr>
        </thead>
        <tbody>
          {dataList.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.name}</td>
              <td>{appointment.packageName}</td>
              <td>{appointment.doctorName}</td>
              <td>
                <button className="btn btn-edit" onClick={() => handleEdit(appointment)}>
                  Edit
                </button>
                <button className="btn btn-delete" onClick={() => handleDelete(appointment._id)}>
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

export default AppointmentList;
