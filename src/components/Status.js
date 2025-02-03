import React from "react";

const Status = ({ status, showText = true }) => {
  return (
    <td>
      {status === "active" ? (
        <div
          className="active"
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "20px",
            backgroundColor: "green",
          }}
        />
      ) : (
        <div
          className="inactive"
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "20px",
            backgroundColor: "red",
          }}
        />
      )}{showText && <span> {status} </span>}
    </td>
  );
};

export default Status;
