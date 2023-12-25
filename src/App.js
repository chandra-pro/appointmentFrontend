import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./components/Register";

import Login from "./components/Login";
import DoctorProfile from "./components/DoctorProfile";
import HomePage from "./components/HomePage";
import OTPForm from "./components/OtpVerify";
import Appointment from "./components/Appointment";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<DoctorProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<OTPForm />} />

        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
