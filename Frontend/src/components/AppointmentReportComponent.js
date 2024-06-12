
import React from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "../css/TreatmentList.css";

const AppointmentReportComponent = ({ dataList }) => {
  console.log(dataList); 
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Appointment List Report', 10, 10);

    const headers = ['Name', 'Package Name', 'Doctor Name'];

    const data = [];
    data.push(headers);

    let totalPackages = 0;

    if (dataList && dataList.length) {
      dataList.forEach((appointment) => {
        const rowData = [appointment.name, appointment.packageName, appointment.doctorName];
        data.push(rowData);

        totalPackages++;
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
      
    }

    doc.save('appointment_details_report.pdf');
  };

  return (
    <div className="report">
      <h1>Appointment Details Report</h1>
      <button onClick={generatePDF}>Generate PDF</button>
      {dataList && dataList.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Package Name</th>
              <th>Doctor Name</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.name}</td>
                <td>{appointment.packageName}</td>
                <td>{appointment.doctorName}</td>
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

export default AppointmentReportComponent;
