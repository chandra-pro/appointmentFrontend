import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { registerfunction } from "../Services/Apis";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
// import Spinner from "react-bootstrap/Spinner";
import "./Login.css";
const BASE_URL = process.env.BASE_URL;

const Register = () => {
  const [passhow, setPassShow] = useState(false);
  const [spiner, setSpiner] = useState(false);
  const location = useLocation();
  const date = location.state?.date || "No data received";
  const time = location.state?.time || "No data received";
  const doctorID = location.state?.doctorID || "no data";
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  // setinputvalue
  const handleChange = e => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  // register data
  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, age, gender, phoneNumber } = inputdata;
    console.log(inputdata);

    if (name === "") {
      toast.error("Enter Your Name");
    } else if (email === "") {
      toast.error("Enter Your Email");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else if (age === "") {
      toast.error("Enter Your Password");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      toast.error("password length minimum 6 character");
    } else {
      setSpiner(true);
      console.log("e hmar hai", inputdata);
      const response = await registerfunction(inputdata);

      // const response = await axios.post(
      //   `${BASE_URL}/api/register`,
      //   inputdata, { headers: { 'Content-Type': 'application/json' }}
      // );
      console.log("Registration successful");
      if (response.status === 200) {
        setInputdata({
          ...inputdata,
          name: "",
          email: "",
          age: "",
          gender: "",
          phoneNumber: "",
        });
        setSpiner(false);
        navigate("/verify", {
          state: { data: email, date: date, time: time, doctorID: doctorID },
        });
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Appointment form</h1>
            <p style={{ textAlign: "center" }}>
              Please fill the appointment form to get the confirmation earliest
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id=""
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={handleChange}
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="age">Age</label>

              <input
                type="text"
                name="age"
                id=""
                onChange={handleChange}
                placeholder="Enter Your age"
              />
              <div className="form_input">
                <label htmlFor="gender">Gender</label>
                <select name="gender" onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <br />
              <div className="form_input">
                <label htmlFor="phoneNumber">phoneNumber</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id=""
                  onChange={handleChange}
                  placeholder="Enter Your phone number"
                />
              </div>
            </div>
            <button className="btn" onClick={handleSubmit}>
              Sign Up
              {spiner ? <span>Loading..</span> : ""}
            </button>
            <p>Don't have and account </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Register;
