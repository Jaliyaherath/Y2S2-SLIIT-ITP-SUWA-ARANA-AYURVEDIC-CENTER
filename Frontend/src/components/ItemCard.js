// ItemsCard.js
import React, { useState } from "react";
import "../css/TreatmentCard.css";
import ItemDetailsModal from "./ItemDetailsModal"; // Create ItemDetailsModal component if it doesn't exist

function ItemsCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    
  return (
    <div className="treatment-card">
      <h3 className="treatment-name">{item.Inametem}</h3>
      <img
        src={`http://localhost:8090/uploads/${item.image}`}
        alt={`Item ${item._id}`}
        className="treatment-image"
      />
      <div className="treatment-details">
        <p className="treatment-packageName">{item.categoryName}</p>
        <p className="treatment-description">{item.description}</p>
        <p className="treatment-price">Price: ${item.price}</p>
        <p className="treatment-description">{item.Supplier}</p>
        <button className={`view-more-button ${isModalOpen ? "allow-pointer" : ""}`} onClick={toggleModal}>
          View More
        </button>
      </div>

      {isModalOpen && (
        <ItemDetailsModal item={item} onClose={toggleModal} />
      )}
    </div>
  );
}

export default ItemsCard;
