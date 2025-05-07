import React from "react";
import { FaHome,  FaPlusSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status
    localStorage.removeItem("user"); // Optionally remove user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <h2 className="logo">COOK_BOOK Connect</h2>
      <ul className="nav-links">
        <li>
          <Link to="/home" className="nav-item">
            <FaHome /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/create" className="nav-item">
            <FaPlusSquare /> <span>Upload</span>
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
