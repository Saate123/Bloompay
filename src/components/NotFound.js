import React from "react";
import { Link } from "react-router-dom";
import "../styles/FormStyle.css";

function NotFound() {
  return (
    <div className="back">
      <h3>Page not available</h3>

      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
