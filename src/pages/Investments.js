import LeftNav from "../components/LeftNav";
import Header from "../components/Header";
import React, { useState } from "react";
import Table2 from "../components/Table2";

function Investments() {
  const [title, setTitle] = useState("Investments");
  return (
    <div className="main">
      <LeftNav setTitle={setTitle} />

      <div className="right">
        <Header title={title} />
        <Table2 />
      </div>
    </div>
  );
}

export default Investments;
