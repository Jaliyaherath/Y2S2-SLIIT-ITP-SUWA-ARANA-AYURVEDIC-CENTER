
import React from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "../css/TreatmentList.css";

const ReportComponent = ({ dataList }) => {
  console.log(dataList); 
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Treatment List Report', 10, 10);

    const headers = ['Name', 'Package Name', 'Price'];

    const data = [];
    data.push(headers);

    let totalPackages = 0;
    let totalPrice = 0;

    if (dataList && dataList.length) {
      dataList.forEach((treatment) => {
        const rowData = [treatment.name, treatment.packageName, treatment.price];
        data.push(rowData);

        totalPackages++;
        totalPrice += treatment.price;
      });
    }

    const startX = 10;
    const startY = 20;

    doc.autoTable({
      startY,
      head: [headers],
      body: data,
      startY: startY + 10,
      styles: {
        fontSize: 12,
        cellPadding: 2,
      },
    });

    if (dataList && dataList.length) {
      doc.text(`Total Packages: ${totalPackages}`, 10, startY + 10 + data.length * 10);
      doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 10, startY + 20 + data.length * 10);
    }

    doc.save('treatment_list_report.pdf');
  };

  return (
    <div className="report">
      <h1>Treatment List Report</h1>
      <button onClick={generatePDF}>Generate PDF</button>
      {dataList && dataList.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Treatment Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((treatment, index) => (
              <tr key={index}>
                <td>{treatment.name}</td>
                <td>{treatment.categoryName}</td>
                <td>{treatment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ReportComponent;
