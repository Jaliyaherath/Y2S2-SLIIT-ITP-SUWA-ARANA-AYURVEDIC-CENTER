// components/ItemList.js
import React from "react";
import "../css/TreatmentList.css";

const ItemList = ({ dataList, handleEdit, handleDelete, showActions = true }) => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Category Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Supplier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item) => (
            <tr key={item._id}>
              <td>{item.Inametem}</td>
              <td>
                <img
                  src={`http://localhost:8090/uploads/${item.image}`}
                  alt={`Item ${item._id}`}
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              <td>{item.categoryName}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.Supplier}</td>

              <td>
                {showActions && (
                  <>
                    <button className="btn btn-edit" onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                    <button className="btn btn-delete" onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
