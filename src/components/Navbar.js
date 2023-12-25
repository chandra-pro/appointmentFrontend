import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   const classNav = scroll > 50 ? "navbar" : "navbar";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">Logo</span>
        <span className="navbar-title">Your App Name</span>
      </div>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/appointment">Appointment</a>
        <a href="#services">Services</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
