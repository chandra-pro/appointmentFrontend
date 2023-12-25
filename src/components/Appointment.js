import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const BASE_URL = "http://localhost:3000";
const Appointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.data || "No data received";
  const date = location.state?.date || "No data received";
  const time = location.state?.time || "No data received";
  const doctorID = location.state?.doctorID || "no data";

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${BASE_URL}/api/slotbook?doctorID=${doctorID}&date=${date}&time=${time}`
      );
      navigate("/");
    } catch (error) {
      console.log({ message: error });
    }
  };

  return (
    <div style={{ marginTop: 80, justifyContent: "center" }}>
      <h1>Your Appointment</h1>
      <p>{email}</p>
      <p>{date}</p>
      <p>{time}</p>
      <button onClick={handleSubmit}>Book Appointment</button>
    </div>
  );
};

export default Appointment;
