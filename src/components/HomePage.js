// HomePage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { sentHomePage } from "../Services/Apis";
import Main from "./Main";
const BASE_URL = "http://localhost:3000";
const HomePage = () => {
  const [slots, setSlots] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/alldoctors`);
        setSlots(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHomePage();

    // if (SelectDate) {
    //   fetchHomePage();
    // }
  }, []);

  //

  return (
    <div>
      <h2>Our Doctors </h2>

      {slots.map((val, index) => {
        return <Main object={val} key={index} />;
      })}
    </div>
  );
};
export default HomePage;
