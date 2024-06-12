// TreatmentCard.js
//import React, { useState } from "react";
import "../css/TreatmentCard.css";

function AppointmentCard({ appointment }) {

  return (
    <div className="treatment-card">
      <h3 className="treatment-name">{appointment.name}</h3>
      <div className="treatment-details">
      <p className="treatment-packageName">{appointment.packageName}</p>
        <p className="treatment-description">{appointment.doctorName}</p>
        
      </div>
    </div>
  );
}

export default AppointmentCard;
