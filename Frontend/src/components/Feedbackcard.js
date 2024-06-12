// TreatmentCard.js
import React, { useState } from "react";
import "../css/TreatmentCard.css";
//import TreatmentDetailsModal from "./TreatmentDetailsModal";

function Feedbackcard({feedback }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    
  return (
    <div className="treatment-card">
      
            <div key={feedback._id} className="treatment">
              <div className="treatment-header">
                <div className="treatment-name">{feedback .name}</div>
                <div className="treatment-date">{feedback .date}</div>
              </div>
              <div className="treatment-body">
                <div className="treatment-doctor">
                  Doctor Name :- {feedback .doctor_name}
                </div><br></br>
                <div className="treatment-feedback">{feedback .feedback}</div>
                <div className="treatment-satisfaction">
                  Overall satisfaction: {feedback .satisfaction}
                </div>
              </div>
            </div>
        
    </div>
  );
}

export default Feedbackcard;
