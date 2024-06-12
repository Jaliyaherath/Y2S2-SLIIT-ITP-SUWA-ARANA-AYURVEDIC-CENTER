
import React from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "../css/TreatmentList.css";

const ItemReoprtComponenet = ({ dataList }) => {
  console.log(dataList); 
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Item List Report', 10, 10);

    const headers = ['Name', 'Category Name', 'Price'];

    const data = [];
    data.push(headers);

    let totalItems = 0;
    let totalPre = 0;

    if (dataList && dataList.length) {
      dataList.forEach((Item) => {
        const rowData = [Item.Inametem, Item.categoryName, Item.price];
        data.push(rowData);

        totalItems++;
        totalPre += Item.price;
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
      doc.text(`Total Items: ${totalItems}`, 10, startY + 10 + data.length * 10);
      doc.text(`Total Price: $${totalPre.toFixed(2)}`, 10, startY + 20 + data.length * 10);
    }

    doc.save('Item_list_report.pdf');
  };

  return (
    <div className="report">
      <h1>Items List Report</h1>
      <button onClick={generatePDF}>Generate PDF</button>
      {dataList && dataList.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((Item, index) => (
              <tr key={index}>
                <td>{Item.Inametem}</td>
                <td>{Item.categoryName}</td>
                <td>{Item.price}</td>
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

export default ItemReoprtComponenet;
