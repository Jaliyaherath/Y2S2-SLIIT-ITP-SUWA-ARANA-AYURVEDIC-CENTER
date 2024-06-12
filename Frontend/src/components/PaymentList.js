// components/TreatmentList.js
import React from "react";
import "../css/TreatmentList.css";


const PaymentList = ({ dataList, handleEdit, handleDelete,showActions }) => {
  return (

    
    <div className="tableContainer">
       
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Image</th>
           
             <th>Actions</th>  
          </tr>
        </thead>
        <tbody>
          {dataList.map((payment) => (
            <tr key={payment._id}>
              <td>Rs.{payment.price}</td>
              <td>
                <img
                  src={`http://localhost:8090/uploads/${payment.image}`}
                  alt={`payment ${payment._id}`}
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              
              <td>
                <button className="btn btn-edit" onClick={() => handleEdit(payment)}>
                  Edit
                </button>
                <button className="btn btn-delete" onClick={() => handleDelete(payment._id)}>
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

export default PaymentList;
