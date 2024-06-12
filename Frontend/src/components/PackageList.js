import React from "react";
//import "../css/DoctorList.css"; // You may need to create a separate CSS file for PackageList if required.

const PackageList = ({ dataList, handleVerify }) => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Doctor Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((packageItem) => (
            <tr key={packageItem._id}>
              <td>{packageItem.packageName}</td>
              <td>{packageItem.doctorName}</td>
              <td>
                <button className="verify" onClick={() => handleVerify(packageItem._id)}>
                  verify
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageList;

