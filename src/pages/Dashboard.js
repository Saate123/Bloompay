import React, { useState } from "react";
import LeftNav from "../components/LeftNav";
import Header from "../components/Header";
import Table from "../components/Table";
import Graph from "../components/Graph";
import TopBar from "../components/TopBar";

function Dashboard() {
  const [title, setTitle] = useState("Dashboard");

  return (
    <div className="main">
      <LeftNav setTitle={setTitle}/>

      <div className="right">
        <Header title={title}/>
        <TopBar />
        <Graph />
        <Table />
      </div>
      
    </div>
  );
}

export default Dashboard;
