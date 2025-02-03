import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import Header from "../components/Header";
import InvestmentDetails from "../components/InvestmentDetails";

function Status() {
  const { status } = useParams();  // Get the dynamic parameter from the URL
  const [title, setTitle] = useState("");  // Initialize title state

  // Update title state when status changes
  useEffect(() => {
    if (status) {
      setTitle(`Investment Status: ${status}`);  // Set title dynamically
    }
  }, [status]);

  return (
    <div className="main">
      <LeftNav setTitle={setTitle} />
      <div className="right">
        <Header title={title} />
        <InvestmentDetails />
      </div>
    </div>
  );
}

export default Status;

