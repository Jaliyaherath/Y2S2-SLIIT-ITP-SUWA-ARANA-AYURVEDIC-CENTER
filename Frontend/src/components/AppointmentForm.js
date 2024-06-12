
import React from "react";
import "../css/TreatmentForm.css";

const AppointmentForm = ({
  handleSubmit,
  handleOnChange,
  handleClose,
  rest,
}) => {
  return (
    <div className="form-container">
      <h2>{rest._id ? "Edit Appoiment" : "Add Appoiment"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">User Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleOnChange}
            value={rest.name}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="packageName">Package Name:</label>
          <input
            type="text"
            id="packageName"
            name="packageName"
            onChange={handleOnChange}
            value={rest.packageName}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctorName">Doctor Name:</label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            onChange={handleOnChange}
            value={rest.doctorName}
            required 
          />
        </div>
        <button className="btn btn-signup" type="submit">
          {rest._id ? "Update" : "Save Appoiment"}
        </button>
        {rest._id && (
          <button className="btn btn-cancel" onClick={handleClose}>
            Cancel
          </button>
        )}
        <button className="btn btn-close" onClick={handleClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;