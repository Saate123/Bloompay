import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Status from "./Status";
import "../styles/BoxStyle.css";

function InvestmentDetails() {
  const { status } = useParams(); // Get status from URL
  const location = useLocation(); // Get state data passed via Link

  // Extracting investment details from location state
  const { amount, username, start, type, end } = location.state || {};

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "30px",
          marginTop: "20px",
        }}
      >
        <h4>{amount || "N/A"}</h4>
        <h4>
          <Status status={status} showText={true} />
        </h4>
      </div>
      <div
        className="text"
        style={{
          lineHeight: "40px",
          backgroundColor: "fefefe",
          boxShadow: "0 0 20px rgba(168, 143, 143, 0.15)",
          width: "60%",
          marginLeft: "20%",
          marginBottom: "40px",
        }}
      >
        <h4>User: {username || "N/A"}</h4>
        <h4>Investment Date: {start || "N/A"}</h4>
        <h4>Investment Type: {type || "N/A"}</h4>
        <h4>Due Date: {end || "N/A"}</h4>
      </div>
      <div
        className="butt"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button>Block User</button>
        <button>Report User</button>
      </div>
    </div>
  );
}

export default InvestmentDetails;
