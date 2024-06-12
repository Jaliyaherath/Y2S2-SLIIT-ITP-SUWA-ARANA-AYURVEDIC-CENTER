
import React from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "../css/TreatmentList.css";

const PaymentReportComponent = ({ dataList }) => {
  console.log(dataList); 
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Payment Details Report', 10, 10);

    const headers = ['Price', 'Slip'];

    const data = [];
    data.push(headers);

  
    let totalPrice = 0;

    if (dataList && dataList.length) {
      dataList.forEach((payment) => {
        const rowData = [payment.price,payment.image];
        data.push(rowData);

        
        totalPrice += payment.price;
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
      doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 10, startY + 20 + data.length * 10);
    }

    doc.save('payment_details_report.pdf');
  };

  return (
    <div className="report">
      <h1>Payment Details Report</h1>
      <button onClick={generatePDF}>Generate PDF</button>
      {dataList && dataList.length ? (
        <table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Slip</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((payment, index) => (
              <tr key={index}>
                <td>Rs.{payment.price}</td>
                <td>{payment.image}</td>
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

export default PaymentReportComponent;
