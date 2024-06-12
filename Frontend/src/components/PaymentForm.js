
import React from "react";
import "../css/TreatmentForm.css";
// import BOC from '../bankLogo/BOC.png';
// import commercial from '../bankLogo/commercial.jpg';
// import NSB from '../bankLogo/NSB.png';
// import sampath from '../bankLogo/sampath.jpg';
// import seylan from '../bankLogo/seylan.png';

const PaymentForm = ({
  handleSubmit,
  handleOnChange,
  handleFileChange,
  handleClose,
  rest,
}) => {
  return (
    <div className="form-container">
      <h2>{rest._id ? "Edit Payment" : "Do Payment"}</h2>
      <form onSubmit={handleSubmit}>
      
      {/* <div className='content'>

      <div className='box'>
      <a href='https://online.boc.lk/T001/channel.jsp'><img src={BOC} alt='boc'></img></a>
      </div>

      <div className='box'>
      <a href='https://www.combank.lk/digitalbanking/'><img src={commercial} alt='commercial'></img></a>
      </div>

      <div className='box'>
      <a href='https://digital.nsb.lk/'><img src={NSB} alt='nsb'></img></a>
      </div>

      <div className='box'>
      <a href='https://www.sampathvishwa.com/SVRClientWeb/ActionController'><img src={sampath} alt='sampath'></img></a>
      </div>

      <div className='box'>
      <a href='https://www.seylanbank.lk/banking-internet-seylan-real/login'><img src={seylan} alt='seylan'></img></a>
      </div>

      </div> */}
      
      <p><strong>Do your payment for the below bank details</strong></p>
        <div className='bank-details'>
        <p>G.G.A Kaushalya</p>   
        <p>Account Number=2172387</p>
        <p>Bank=BOC</p>
        <p>Branch=Ampara</p>
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
          <label htmlFor="image">Payment Slip:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files[0])}
          />
        </div>
        <button className="btn btn-signup" type="submit">
          {rest._id ? "Update" : "Save Payment"}
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

export default PaymentForm;