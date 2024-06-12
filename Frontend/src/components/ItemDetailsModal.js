// ItemDetailsModal.js
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/TreatmentDetailsModal.css";
import "../css/ConfirmationBox.css";

function ItemDetailsModal({ item }) {
  const history = useHistory();
  const [showModal, setShowModal] = useState(true);

  const handleAddClick = () => {
    history.push("/confirmation");
    // You can implement the logic for adding items to the cart or performing any other action here
  };

  const handleModalClose = () => {
    setShowModal(false);
    history.push("/customer-treatments");
    // Close the modal and navigate to the desired page
  };

  if (!item || item.length === 0 || !showModal) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Item Details</h2>
        <img
          src={`http://localhost:8090/uploads/${item.image}`}
          alt={`Item ${item._id}`}
          className="modal-image"
        />
        <p className="modal-categoryName">{item.categoryName}</p>
        <p className="modal-description">{item.description}</p>
        <p className="modal-price">Price: ${item.price}</p>
        <p className="modal-description">{item.Supplier}</p>

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

export default ItemDetailsModal;
