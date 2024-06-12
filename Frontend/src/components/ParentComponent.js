// ParentComponent.js
import React, { useState } from "react";
import ConBox from "./ConBox";
import { useHistory } from "react-router-dom";

function ParentComponent() {
  const history = useHistory();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
   
    history.push("/success"); // Replace with the path to your success page

 
    setShowConfirmation(false);
  };

  const handleCancel = () => {      
 
    setShowConfirmation(false);
  };

  return (
    <div>
      <button onClick={handleAddClick}>Add Items</button>
      {showConfirmation && (
        <ConBox onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default ParentComponent;
