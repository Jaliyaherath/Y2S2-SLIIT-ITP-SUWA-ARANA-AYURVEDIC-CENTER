
// NavigationBar.js

import React from "react";
import { Link } from "react-router-dom";
import "../css/NavigationBar.css";

function NavigationBar() {
  return (
    
    <nav className="sidebar">
    
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Items</Link>
        </li>
        <li>
          <Link to="/customer-treatments">Avilable Items for Doctors</Link>
        </li>
        <li>
          <Link to="/rep">Report</Link>
        </li>
       
      </ul>
      <ul>
        <li>
          <Link to="/ad">Add Treatment</Link>
        </li>
        <li>
          <Link to="/treatments">Avilable Treatment for Customers</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
       
      </ul>

      <ul>
        <li>
          <Link to="/dd">Add Doctor</Link>
        </li>
        <li>
          <Link to="/pe">Package List</Link> {/* Add this line */}
        </li>
       
        {/* Add other links as needed */}
      </ul>
      <ul>
        <li>
          <Link to="/addPay">Payment Details</Link>
        </li>
        <li>
          <Link to="/customer-payments">Do Payment</Link>
        </li>
        <li>
          <Link to="/reportPay">Report</Link>
        </li>
       
      </ul>

      <ul>
        <li>
          <Link to="/addApp">Appointment Details</Link>
        </li>
        <li>
          <Link to="/customer-appointments">Book Appointment</Link>
        </li>
        <li>
          <Link to="/reportApp">Report</Link>
        </li>
       
      </ul>
      <ul>
        <li>
          <Link to="/feedback-add">Add feedback</Link>
        </li>
        <li>
          <Link to="/customer-feedback">feedbcaks</Link>
        </li>
        <li>
          <Link to="/feedbackreport">Report</Link>
        </li>
       
      </ul>



    </nav>
  );
}

export default NavigationBar;
