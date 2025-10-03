import React from "react";
import '../Addmission/addmission.css'
import { Link } from "react-router-dom";
import { useState } from "react";

const Addmission =()=>{
   const [formData, setFormData] = useState({});
 const handleInput=(e)=>{
  const {name,value}=e.target;
  setFormData({...formData,[name]:value})
  
 }

 React.useEffect(() => {
   console.log(formData);
 }, [formData]);
return(


<>
    <div className="container">
      <form className="form">
        <h2>COLLEGE ADMISSIONS FORM</h2>
        <p>Enter your admission information below</p>

        
        <div className="row">
          <label className="label">Name</label>
          <div className="flex-row">
            <input onChange={handleInput} name="firstName" type="text" placeholder="First Name" className="input" />
            <input onChange={handleInput} name="middleInitial"  type="text" placeholder="Middle Initial" className="input input-narrow" />
            <input onChange={handleInput} name="lastName"  type="text" placeholder="Last Name" className="input" />
          </div>
        </div>

      
        <div className="row">
          <label className="label">Birth Date</label>
          <div className="flex-row">
            <select className="select" defaultValue="">
              <option value="">Please select a month</option>
              <option>January</option><option>February</option><option>March</option><option>April</option>
              <option>May</option><option>June</option><option>July</option><option>August</option>
              <option>September</option><option>October</option><option>November</option><option>December</option>
            </select>

            <select className="select" defaultValue="">
              <option value="" >Please select a day</option>
             <option value="">1</option>
             <option value="">2</option>
             <option value="">3</option>
             <option value="">4</option>
             <option value="">5</option>
             <option value="">6</option>
             <option value="">7</option>
             <option value="">8</option>
             <option value="">9</option>
             <option value="">10</option>
             <option value="">11</option>
             <option value="">12</option>
             <option value="">13</option>
             <option value="">14</option>
             <option value="">15</option>
             <option value="">16</option>
             <option value="">17</option>
             <option value="">18</option>
             <option value="">19</option>
             <option value="">20</option>
             <option value="">21</option>
             <option value="">22</option>
             <option value="">23</option>
             <option value="">24</option>
             <option value="">25</option>
             <option value="">26</option>
             <option value="">27</option>
             <option value="">28</option>
             <option value="">29</option>
             <option value="">30</option>
             <option value="">31</option>
                
            </select>

            <select className="select" defaultValue="">
              <option value="">Please select a year</option>
              <option value="">2025</option>
              <option value="">2024</option>
              <option value="">2023</option>
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option>
              <option value="">2016</option>
              <option value="">2015</option>
              <option value="">2014</option>
              <option value="">2013</option>
              <option value="">2012</option>
              <option value="">2011</option>
              <option value="">2010</option>
              
             
            </select>
          </div>
        </div>

        {/* Gender and Citizenship */}
        <div className="row space-between">
          <div>
            <label className="label">Gender</label>
            <label><input  type="radio" name="gender" /> Male</label>
            <label style={{ marginLeft: 10 }}><input type="radio" name="gender" /> Female</label>
          </div>

          <div>
            <label className="label">Of which country are you a citizen?</label>
            <select className="select" defaultValue="">
              <option value="" disabled>Please Select</option>
                <option value="AF">Afghanistan</option>
    <option value="">Åland Islands</option>
    <option value="">Albania</option>
    <option value="">Algeria</option>
    <option value="">American Samoa</option>
    <option value="">Andorra</option>
    <option value="">Angola</option>
    <option value="">Anguilla</option>
    <option value="">Antarctica</option>
    <option value="">Antigua and Barbuda</option>
    <option value="">Argentina</option>
    <option value="">Armenia</option>
    <option value="">Aruba</option>
    <option value="">Australia</option>
    <option value="">Austria</option>
    <option value="">Azerbaijan</option>
    <option value="">Bahamas</option>
    <option value="">Bahrain</option>
    <option value="">Bangladesh</option>
    <option value="">Barbados</option>
    <option value="">Belarus</option>
    <option value="">Belgium</option>
    <option value="">Belize</option>
    <option value="">Benin</option>
    <option value="">Bermuda</option>
    <option value="">Bhutan</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>India</option>
              <option >Pakistan</option>
              <option >Japan</option>
              <option>China</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Phone and Email */}
        <div className="row space-between">
          <div className="flex-1 margin-right">
            <label className="label">Phone</label>
            <input onChange={handleInput} name="number" type="tel" placeholder="(000) 000-0000" className="input" />
          </div>
          <div className="flex-1">
            <label className="label">E-mail Address</label>
            <input onChange={handleInput} name="email" type="email" placeholder="ex: myname@example.com" className="input" />
            <small className="small-text">example@example.com</small>
          </div>  
        </div>

        {/* Mailing Address */}
        <div className="row">
          <label className="label">Mailing Address</label>
          <input  type="text" onChange={handleInput} name="Street Address" placeholder="Street Address" className="input" />
          <input type="text"  onChange={handleInput} name="Street Address Line 2" placeholder="Street Address Line 2" className="input" />
          <div className="flex-row">
            <input type="text" onChange={handleInput} name="City" placeholder="City" className="input flex-1" />
            <input type="text" onChange={handleInput} name="State" placeholder="State / Province" className="input flex-1" />
          </div>
          <input type="text" onChange={handleInput} name="Zip-Code" placeholder="Postal / Zip Code" className="input" />
        </div>

        {/* Emergency Contact */}
        <div className="row space-between">
          <div className="flex-1 margin-right">
            <label className="label">Emergency Contact</label>
            <div className="flex-row">
              <input onChange={handleInput}  name="Emergency-Contact-First-Name" type="text" placeholder="First Name" className="input flex-1" />
              <input onChange={handleInput}  name="Emergency-Contact-Last-Name"  type="text" placeholder="Last Name" className="input flex-1" />
            </div>
          </div>
          <div className="flex-1">
            <label className="label">Relationship</label>
            <input onChange={handleInput} name="Relation" type="text" className="input" />
          </div>
        </div>

        {/* Emergency Email and Phone */}
        <div className="row space-between">
          <div className="flex-1 margin-right">
            <label className="label">Email</label>
            <input onChange={handleInput} name="Mail" type="email" placeholder="example@example.com" className="input" />
            <small className="small-text">example@example.com</small>
          </div>
          <div className="flex-1">
            <label className="label">Phone Number</label>
            <input onChange={handleInput} name="Tel" type="tel" placeholder="(000) 000-0000" className="input" />
            <small className="small-text">Please enter a valid phone number.</small>
          </div>
        </div>

        {/* Languages */}
        <div className="row">
          <label><b>Do you speak any languages other than English?</b></label>
          <label><input type="radio" name="languages" /> Yes</label>
          <label style={{ marginLeft: 15 }}><input type="radio" name="languages" /> No</label>
        </div>
       <Link to="/education">
        <button type="submit" className="submit-btn">Next</button>
        </Link>
      </form>
    </div>



</>)
}
export default Addmission;