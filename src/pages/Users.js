import LeftNav from "../components/LeftNav";
import Header from "../components/Header";
import React, { useState } from "react";
import Table1 from "../components/Table1";

function Users() {
  const [title, setTitle] = useState("Users");
  return (
    <div className="main">
      <LeftNav setTitle={setTitle} />

      <div className="right">
        <Header title={title} />
        <Table1 />
      </div>
    </div>
  );
}

export default Users;
