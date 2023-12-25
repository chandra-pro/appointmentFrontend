import { Button } from "@mui/material";
import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import CustomDateSelector from "./ReactDatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClinicMedical,
  faVideo,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Main = ({ object }) => {
  const navigate = useNavigate();
  const isclicked = true;
  const handleProfile = () => {
    navigate("/profile", { state: { dID: object._id } });
  };
  return (
    <div className="main-container">
      <div className="profile-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwbfHuj6RXsZ82aEePOC75ydsFgIx6qk9rw&usqp=CAU"
          alt="doctor profile"
          width={120}
          height={120}
          className="profile-img"
        ></img>
        <div className="profile-info">
          <h4>{object.name}</h4>
          <p>{object.specialization}</p>
          <Button
            variant={isclicked ? "outlined" : "contained"}
            onClick={handleProfile}
          >
            VIEW PROFILE
          </Button>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="appointment-main-container">
        <div className="appointment-container">
          <h2>Book Appointment</h2>
          <div className="clinic">
            <CurrencyRupeeIcon className="currency" />
            <p>500</p>
          </div>
          <p className="pay">(pay at clinic)</p>
          <h3>CLinic Name</h3>
          <p>Dr Malti Devi CLinic Maharsatra 302017</p>
        </div>
        <div className="service-icons">
          <div className="medical-icon">
            <FontAwesomeIcon icon={faClinicMedical} size="7x" color="green" />
          </div>
          <div className="audio-icon">
            <FontAwesomeIcon icon={faPhoneVolume} size="7x" color="green" />
          </div>
          <div className="video-icon">
            <FontAwesomeIcon icon={faVideo} size="7x" color="green" />
          </div>
        </div>
      </div>

      <CustomDateSelector doctorID={object._id} />
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Main;
