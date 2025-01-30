import "../styles/TableStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>S/N</th>
        <th>Username</th>
        <th>Investment Date</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Investment Type</th>
        <th>Cost</th>
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

  return (
    <tr>
      <td>{props.sn}</td>
      <td>
        <Link to="#" onClick={handleDialogue}>
          {props.username}
        </Link>
        {showDialogue && (
          <div className="dialogue">
            <h4>INVESTMENT DETAILS</h4>
            <p>
              <strong>Username:</strong> {props.username}
            </p>
            <p>
              <strong>Investment Date:</strong> {props.date}
            </p>
            <p>
              <strong>Start Date:</strong> {props.start}
            </p>
            <p>
              <strong>End Date:</strong> {props.end}
            </p>
            <p>
              <strong>Investment Type:</strong> {props.type}
            </p>
            <p>
              <strong>Cost:</strong> {props.cost}
            </p>
            <p>
              <strong>Status:</strong> {props.status}
            </p>
            <button onClick={() => setShowDialogue(false)}>Close</button>
          </div>
        )}
      </td>
      <td>{props.date}</td>
      <td>{props.start}</td>
      <td>{props.end}</td>
      <td>{props.type}</td>
      <td>{props.cost}</td>
      <td>{props.status}</td>
    </tr>
  );
}

function Table2() {
  const data = [
    {
      sn: 1,
      username: "Echindo",
      date: "12th Oct., 2024",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      type: "Parent",
      cost: "$3,000",
      status: "Ongoing",
    },
    {
      sn: 2,
      username: "Echindo",
      date: "12th Oct., 2024",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      type: "Youth",
      cost: "$2,000",
      status: "Pending",
    },
    {
      sn: 3,
      username: "Echindo",
      date: "12th Oct., 2024",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      type: "Youth",
      cost: "$1,500",
      status: "Completed",
    },
    {
      sn: 4,
      username: "Echindo",
      date: "12th Oct., 2024",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      type: "Parent",
      cost: "$3,000",
      status: "Completed",
    },
    {
      sn: 5,
      username: "Echindo",
      date: "12th Oct., 2024",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      type: "Parent",
      cost: "$3,000",
      status: "Ongoing",
    },
    {
      sn: 6,
      username: "Echindo",
      date: "12th Oct., 2024",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      type: "Parent",
      cost: "$2,000",
      status: "Pending",
    },
    {
      sn: 7,
      username: "Echindo",
      date: "12th Oct., 2024",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      type: "Youth",
      cost: "$2,000",
      status: "Ongoing",
    },
    {
      sn: 8,
      username: "Echindo",
      date: "12th Oct., 2024",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      type: "Youth",
      cost: "$2,000",
      status: "Ongoing",
    },
  ];
  return (
    <div>
      <table>
        <TableHeader />
        <tbody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sn={row.sn}
              username={row.username}
              date={row.date}
              start={row.start}
              end={row.end}
              type={row.type}
              cost={row.cost}
              status={row.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
