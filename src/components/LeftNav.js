import React from "react";
import Image from "../images/bloom1.png";
import { Link, NavLink } from "react-router-dom";
import "../styles/LeftStyle.css";
import { RiHome9Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { TbBusinessplan } from "react-icons/tb";
import { MdNotificationAdd } from "react-icons/md";

const ImageList = [
  {
    icon: <RiHome9Fill />,
    list: "Dashboard",
  },
  {
    icon: <FaUsers />,
    list: "Users",
  },
  {
    icon: <TbBusinessplan />,
    list: "Investments",
  },
  {
    icon: <MdNotificationAdd />,
    list: "Notifications",
  },
];

function LeftNav({ setTitle }) {
  return (
    <div className="left">
      <div>
        <img src={Image} />
      </div>

      <div className="link">
        {ImageList.map((data, index) => (
          <div key={index} className="navlink">
            <NavLink
              onClick={() => setTitle(data.list)}
              id="nav"
              to={`/ImageList/${data.list}`}
              className={({ isActive }) => {
                return isActive ? "active-navlink" : "inactive-navlink";
              }}
            >
              {data.icon}
              {data.list}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftNav;
