import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { otpVerify } from "../Services/Apis";
import { useNavigate, useLocation } from "react-router-dom";

import "./Login.css";

const OTPForm = () => {
  const [spiner, setSpiner] = useState(false);
  const location = useLocation();
  const date = location.state?.date || "No data received";
  const time = location.state?.time || "No data received";
  const doctorID = location.state?.doctorID || "no data";
  const [inputdata, setInputdata] = useState({
    email: "",
    otp: "",
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
    const { email, otp } = inputdata;
    console.log(inputdata);

    if (otp === "") {
      toast.error("Enter Your Name");
    } else if (email === "") {
      toast.error("Enter Your Email");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else {
      setSpiner(true);
      console.log("e hmar hai", inputdata);
      const response = await otpVerify(inputdata);

      console.log("Registration successful");
      if (response.status === 200) {
        setInputdata({
          ...inputdata,

          email: "",
          otp: "",
        });
        setSpiner(false);

        navigate("/appointment", {
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
            <h1>OTP verification</h1>
            <p style={{ textAlign: "center" }}>
              Please fill the appointment form to get the confirmation earliest
            </p>
          </div>
          <form>
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
              <label htmlFor="otp">Age</label>

              <input
                type="text"
                name="otp"
                id=""
                onChange={handleChange}
                placeholder="Enter Your OTP"
              />
            </div>
            <button className="btn" onClick={handleSubmit}>
              Verify
              {spiner ? <span>Loading..</span> : ""}
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default OTPForm;
