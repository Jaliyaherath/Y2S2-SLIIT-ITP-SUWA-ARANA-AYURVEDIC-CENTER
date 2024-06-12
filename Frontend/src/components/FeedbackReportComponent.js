
import React from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "../css/TreatmentList.css";

const FeedbackReportComponent = ({ dataList }) => {
  console.log(dataList); 
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Treatment List Report', 10, 10);

    const headers = ['DocterName', 'Feedback Type', 'Describe Feedback'];

    const data = [];
    data.push(headers);

    let totalPackages = 0;
    let totalPrice = 0;

    if (dataList && dataList.length) {
      dataList.forEach((feedback) => {
        const rowData = [feedback.name, feedback.feedback_type, feedback.feedback];
        data.push(rowData);

        totalPackages++;
        totalPrice += feedback.feedback;
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
      doc.text(`Total Feedbaks: ${totalPackages}`, 10, startY + 10 + data.length * 10);
      doc.text(`Total Data: $${totalPrice.toFixed(2)}`, 10, startY + 20 + data.length * 10);
    }

    doc.save('feedaback_list_report.pdf');
  };

  return (
    <div className="report">
      <h1>Feedback List Report</h1>
      <button onClick={generatePDF}>Generate PDF</button>
      {dataList && dataList.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Feedback Type</th>
              <th>Describe Feedback</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.name}</td>
                <td>{feedback.packageName}</td>
                <td>{feedback.price}</td>
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

export default FeedbackReportComponent;
