import "../styles/TableStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>S/N</th>
        <th>Name</th>
        <th>Date</th>
        <th>Active Investors</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
  );
}

function TableRow(props) {
  const [showDialogue, setShowDialogue] = useState(false);

  const handleDialogue = () => {
    setShowDialogue(!showDialogue);
  };

  const getStatusColor = (status) => {
    if (status === "100%") return "green";
    else if (status > "50%") return "green";
    else if (status === "50%") return "orange";
    else return "red";
  };

  return (
    <tr>
      <td>{props.sn}</td>
      <td>
        <Link to="#" onClick={handleDialogue}>
          {props.name}
        </Link>
        {showDialogue && (
          <div className="dialogue">
            <h4>INVESTMENT DETAILS</h4>
            <p>
              <strong>Name:</strong> {props.name}
            </p>
            <p>
              <strong>Date:</strong> {props.date}
            </p>
            <p>
              <strong>Active Investors:</strong> {props.active}
            </p>
            <p>
              <strong>Amount:</strong> {props.amount}
            </p>
            <p>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: props.status,
                    paddingLeft: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopLeftRadius: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    backgroundColor: getStatusColor(props.status),
                  }}
                >
                  {props.status}
                </div>
              </div>
            </p>
            <button onClick={() => setShowDialogue(false)}>Close</button>
          </div>
        )}
      </td>
      <td>{props.date}</td>
      <td>{props.active}</td>
      <td>{props.amount}</td>
      <td>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{
              width: props.status,
              paddingLeft: "10px",
              borderBottomLeftRadius: "10px",
              borderTopLeftRadius: "10px",
              backgroundColor: getStatusColor(props.status),
            }}
          >
            {props.status}
          </div>
        </div>
      </td>
    </tr>
  );
}

function Table() {
  const data = [
    {
      sn: 1,
      name: "Parent",
      date: "13th, October 2024",
      active: "2,500",
      amount: "$3,000",
      status: "40%",
    },
    {
      sn: 2,
      name: "Youth",
      date: "13th, October 2024",
      active: "2,000",
      amount: "$2,500",
      status: "70%",
    },
    {
      sn: 3,
      name: "Child",
      date: "13th, October 2024",
      active: "1,500",
      amount: "$2,000",
      status: "50%",
    },
  ];

  return (
    <div className="bottom">
      <h3>Projects</h3>
      <table>
        <TableHeader />
        <tbody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sn={row.sn}
              name={row.name}
              date={row.date}
              active={row.active}
              amount={row.amount}
              status={row.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
