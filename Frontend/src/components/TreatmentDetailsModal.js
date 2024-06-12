
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/TreatmentDetailsModal.css";
import "../css/ConfirmationBox.css";

function TreatmentDetailsModal({ treatment }) {
  const history = useHistory(); 
  const [showModal, setShowModal] = useState(true);

  const handleAddClick = () => {
    
    history.push("/confirmation");
  };

  const handleModalClose = () => {
   
    setShowModal(false);
    history.push("/customer-treatments");
  };

 
  if (!treatment || treatment.length === 0 || !showModal) {
    
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Treatment Details</h2>
        <img
          src={`http://localhost:8090/uploads/${treatment.image}`}
          alt={`Treatment ${treatment._id}`}
          className="modal-image"
        />
        <p className="modal-packageName">{treatment.packageName}</p>
        <p className="modal-description">{treatment.description1}</p>
        <p className="modal-description">{treatment.description2}</p>
        <p className="modal-price">Price: ${treatment.price}</p>

        <button className="modal-add" onClick={handleAddClick}>
          Add
        </button>

        <button className="modal-close" onClick={handleModalClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TreatmentDetailsModal;
