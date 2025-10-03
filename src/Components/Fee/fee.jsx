import React from "react";
import '../Fee/fee.css'
import { Link } from "react-router-dom";
const Fee = () =>{
    
    return(
        <>
      <div className="container">
        <div className="fee-box">
        <h1>Application Fee</h1>
        <p>Payment is due 3 days prior to the start of the class</p>
        <hr />
        <h3>Payment Method:</h3>
        <div className="check-flex">
       <div> <input type="checkbox" name="" id="" />Credit Card</div>
        <div><input type="checkbox" name="" id="" />Mail a Cheque</div>
        <div><input type="checkbox" name="" id="" />In-person at school</div>
        </div>
         <hr />
         <div className="dis">
            <Link to="/education">
          <button type="button" className="fee-back-btn">
            Back
          </button></Link>
          <Link to = "/thanks">
          <button type="submit" className="fee-submit-btn">
            Submit Form
          </button></Link>
          </div>
        </div>
      </div>
        </>
    )
}
export default Fee;