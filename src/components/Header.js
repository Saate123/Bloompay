import React, { useState } from "react";
import "../styles/HeaderStyle.css";
import { RiSearchLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Header = ({ title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="header">
      <p>
        Pages / <strong>{title}</strong>
      </p>
      <div className="search">
        {toggle && <RiSearchLine style={{ marginTop: "7.5px" }} />}
        <input
          type="search"
          placeholder="search here...."
          style={{
            border: "none",
            outline: "none",
            borderRadius: "15px",
            marginLeft: "5px",
            height: "96%",
            width: "90%",
          }}
          onClick={() => setToggle(false)}
          onBlur={() => setToggle(true)}
        />
      </div>
      <Link to={"/"} style={{ fontSize: "20px", marginRight: "2%" , color:"black"}}>
        <FiLogOut />
      </Link>
      <Link to={"/"} style={{ fontSize: "20px", marginRight: "2%", color:"black"}}>
        {" "}
        <IoMdSettings />
      </Link>
      <Link
        to={"/ImageList/Notifications"}
        style={{ fontSize: "20px", marginRight: "2%", color:"black" }}
      >
        {" "}
        <IoNotifications />
      </Link>
    </div>
  );
};

export default Header;
