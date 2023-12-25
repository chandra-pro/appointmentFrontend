// AvailableSlots.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AvailableSlots.css"; // Import CSS file

const BASE_URL = "http://localhost:3000";
const AvailableSlots = ({ SelectDate, doctorID }) => {
  const [slots, setSlots] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/slots/available?doctorID=${doctorID}&date=${SelectDate}`
        );
        setSlots(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (SelectDate) {
      fetchAvailableSlots();
    }
  }, [SelectDate]);
  const timeSlots = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
  ];
  const handleSlotClick = slotTime => {
    // Your logic for handling the slot click
    console.log(`Slot clicked: ${slotTime}`);

    navigate("/register", {
      state: { time: slotTime, date: SelectDate, doctorID: doctorID },
    });
  };

  return (
    <div>
      <h2>Available Slots for {SelectDate}</h2>
      <ul className="slots-list">
        {timeSlots.map((val, index) => {
          const time = val; // Adjust based on your actual time slots
          const isSlotAvailable = slots.some(slot => slot.slotTime === time);

          return (
            <div>
              <button
                key={index}
                className={`slot-item ${
                  isSlotAvailable ? "available" : "unavailable"
                }`}
                onClick={() => handleSlotClick(val)}
                disabled={isSlotAvailable}
              >
                {val}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableSlots;
