// ItemsForm.js
import React from "react";
import "../css/TreatmentForm.css";

const ItemsForm = ({
  handleSubmit,
  handleOnChange,
  handleFileChange,
  handleClose,
  rest,
}) => {
  return (
    <div className="form-container">
      <h2>{rest._id ? "Edit Item" : "Add Item"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Inametem">Item Name:</label>
          <input
            type="text"
            id="Inametem"
            name="Inametem"
            onChange={handleOnChange}
            value={rest.Inametem}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Item Image:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            onChange={handleOnChange}
            value={rest.categoryName}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleOnChange}
            value={rest.price}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description1">Description:</label>
          <textarea
            id="description"
            name="description"
            onChange={handleOnChange}
            value={rest.description}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Supplier">Supplier:</label>
          <textarea
            id="Supplier"
            name="Supplier"
            onChange={handleOnChange}
            value={rest.Supplier}
            required
          />
        </div>
        <button className="btn btn-signup" type="submit">
          {rest._id ? "Update" : "Save Item"}
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

export default ItemsForm;
