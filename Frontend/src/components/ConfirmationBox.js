import React from "react";
import { useHistory } from "react-router-dom";
import "../css/success.css";

function ConfirmationBox({ onConfirm, onCancel }) {
  const history = useHistory();

  const handleConfirm = () => {
    // You can perform any necessary actions here
    onConfirm();

    // Redirect to the success page
    history.push("/success");
  };


  
  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h2>Confirmation</h2>
        <p>Are you sure you want to add this treatment?</p>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmationBox;

