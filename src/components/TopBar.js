import React from "react";
import "../styles/TopBarStyle.css";
import { MdOutlineAddBusiness } from "react-icons/md";

function TopBar() {
  return (
    <div
      style={{
        width: "90%",
        marginTop: "30px",
        marginBottom: "50px",
        marginLeft: "50px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div className="box">
        <p>
          Number Of Investment{" "}
          <spam>
            <MdOutlineAddBusiness style={{
              marginRight:"20px", fontSize:"30px", position:"relative", top:"15px"
            }}/>
          </spam>
        </p>
        <h4>
          250,000 <span>+1%</span>
        </h4>
      </div>
      <div className="box">
        <p>Number Of Users</p>
        <h4>
          5,000 <span>+10%</span>
        </h4>
      </div>
      <div className="box">
        <p>Number Of Users</p>
        <h4>
          5,000 <span>+10%</span>
        </h4>
      </div>
    </div>
  );
}

export default TopBar;
