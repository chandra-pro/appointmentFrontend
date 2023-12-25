import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState(false);

  const navigate = useNavigate();

  // sendotp
  const sendOtp = async e => {
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else {
      setSpiner(true);
      const data = {
        email: email,
      };

      // const response = await sentOtpFunction(data);
      // console.log(response);

      // if (response.status === 200) {
      //   setSpiner(false);
      //   localStorage.setItem("username", response.data.name);
      //   localStorage.setItem("sellerid", response.data.id);
      //   navigate("/user/otp", { state: email });
      // } else {
      //   toast.error(response.response.data.error);
      // }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login with OTP.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
              />
            </div>
            <button className="btn" onClick={sendOtp}>
              Login
              {spiner ? <span>Loading...</span> : ""}
            </button>
            <p>
              Don't have and account <NavLink to="/register">Sing up</NavLink>{" "}
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
