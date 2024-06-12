import React from "react";
//import "../css/DoctorForm.css";

const DoctorForm = ({
  handleSubmit,
  handleOnChange,
  handleClose,
  rest,
}) => {
  return (
    <div className="form-container">
      <h2>{rest._id ? "Edit Doctor" : "Add Doctor"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">name:</label>
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
          <label htmlFor="specialization">Specialization:</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            onChange={handleOnChange}
            value={rest.specialization}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="schedule">Schedule:</label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            onChange={handleOnChange}
            value={rest.schedule}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleOnChange}
            value={rest.date}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fees">Fees:</label>
          <input
            type="number"
            id="fees"
            name="fees"
            onChange={handleOnChange}
            value={rest.fees}
            required
          />
        </div>
        <button className="btn btn-signup" type="submit">
          {rest._id ? "Update" : "Save Doctor"}
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

export default DoctorForm;
