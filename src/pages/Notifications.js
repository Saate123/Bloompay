import LeftNav from "../components/LeftNav";
import Header from "../components/Header";
import React, { useState } from "react";
import Box from "../components/Box";

function Notifications() {
  const [title, setTitle] = useState("Notifications");
  return (
    <div className="main">
      <LeftNav setTitle={setTitle} />

      <div className="right">
        <Header title={title} />
        <Box />
      </div>
    </div>
  );
}

export default Notifications;
