// CustomDateSelector.js
import React, { useState, useEffect } from "react";
import "./CustomDateSelector.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvailableSlots from "./AvailableSlot";

const CustomDateSelector = ({ doctorID }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [selecteddate, setSelecteddate] = useState(null);
  const [showComponent, setShowComponent] = useState(false);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  const datesPerPage = 3;

  useEffect(() => {
    // Fetch data or perform actions based on the selected date and current page
    console.log("Selected Date:", selectedDate);
    console.log("Current Page:", currentPage);
  }, [selectedDate, currentPage]);

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    const startIdx = (currentPage - 1) * datesPerPage + today.getDate();
    const endIdx = startIdx + datesPerPage;

    for (let i = startIdx; i < endIdx; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      dates.push(date);
    }

    return dates;
  };

  const formatDayLabel = date => {
    const dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const today = new Date();
    console.log(today, today.toDateString, "hello");
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      const dayAbbreviation = dayAbbreviations[date.getDay()];
      return `${dayAbbreviation}, ${getDayWithOrdinal(
        date.getDate()
      )}${getMonthAbbreviation(date.getMonth())}`;
    }
  };

  const getDayWithOrdinal = day => {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = day < 30 ? day % 20 : day % 30;
    const suffix = relevantDigits <= 3 ? suffixes[relevantDigits] : suffixes[0];
    return `${day}`;
  };

  const getMonthAbbreviation = monthIndex => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[monthIndex];
  };

  const handleDateClick = date => {
    setSelectedDate(date);
    setShowComponent(!showComponent);
    setSelecteddate(date);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className="custom-date-selector">
      <h2>Select a Date</h2>

      <div className="date-grid">
        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevPage} />
        {generateDates().map(date => (
          <div className="grid-cell-parent">
            <div
              key={date.toISOString()}
              className={`date-cell ${
                selectedDate &&
                selectedDate.toISOString() === date.toISOString()
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleDateClick(date)}
            >
              <div className="date-info">{formatDayLabel(date)}</div>
              <div className="slots">
                <span>8 slots available</span>
              </div>
            </div>
          </div>
        ))}

        <FontAwesomeIcon icon={faChevronRight} onClick={handleNextPage} />
      </div>
      {showComponent ? (
        <AvailableSlots
          // key={date}
          SelectDate={selecteddate.toLocaleDateString("en-IN", options)}
          doctorID={doctorID}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomDateSelector;
