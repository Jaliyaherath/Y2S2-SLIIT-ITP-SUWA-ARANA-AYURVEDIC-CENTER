
import React from "react";
//import "../css/DoctorForm.css";

const PackageForm = ({
  handleSubmit,
  handleOnChange,
  handleClose,
  rest,
}) => {
  return (
    <div className="form-container">
      <h2>{rest._id ? "Edit Doctor" : "Assign Doctor"}</h2>
      <form onSubmit={handleSubmit}>
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
          <select
            id="doctorName"
            name="doctorName"
            onChange={handleOnChange}
            value={rest.doctorName}
            required
          >
            <option value="">Select a doctor</option>
            <option value="S.rathnayake">S.rathnayake</option>
            <option value="A.dissanayake">A.dissanayake</option>
            <option value="K.basnayake">K.basnayake</option>
            <option value="I.jayathilaka">I.jayathilaka</option>
            <option value="T.karunaratne">T.karunaratne</option>
          </select>
        </div>
        <button className="btn btn-signup" type="submit">
          {rest._id ? "Update" : "Assign Doctor"}
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

export default PackageForm;
