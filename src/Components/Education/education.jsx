import React from "react";
import '../Education/education.css'
import { Link } from "react-router-dom";
import { useState } from "react";
const Education  = () => {
  const [handle,setHandle]= useState("")
const handleInput=(e)=>{
 const {name,value}=e.target;
 setHandle({...handle,[name]:value})
 console.log(handle);
 
}
    return(
        <>
        <div className="container">
    <div className="edu-wrap">
      <form className="edu-form">
        <h3 className="edu-title">Education</h3>

        <div className="edu-row">
          <label className="edu-label" htmlFor="">High School or Equivalent Name</label>
          <input onChange={handleInput} name="name" className="edu-input" type="text" />

          <label className="edu-label graduation-label" htmlFor="gradDate">Graduation Date</label>
          <input onChange={handleInput} name="graduation-date" className="edu-input" type="date" />
        </div>

        <div className="edu-row">
          <label className="edu-label" htmlFor="city">School Address</label>
          <input  onChange={handleInput}  name="city" className="edu-input" type="text" placeholder="City" />
          <input onChange={handleInput} name="S" className="edu-input" type="text" placeholder="State / Province" />
        </div>

        <div className="edu-column">
          <select className="edu-select" defaultValue="">
            <option value="" >
              Please Select
            </option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>India</option>
            <option>Other</option>
          </select>
          <label className="edu-small-label">Country</label>
        </div>

        <div className="edu-btns">
          <Link to ="/">
          <button type="button" className="edu-back-btn">
            Back
          </button></Link>
          <Link to="/fee">
          <button type="submit" className="edu-next-btn">
            Next
          </button>
          </Link>
        </div>
      </form>
    </div>
    </div>
   </>
    )
}
export default Education;