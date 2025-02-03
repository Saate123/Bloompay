import React from "react";
import Status from "./Status";
import { Link } from "react-router-dom";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>S/N</th>
        <th>Username</th>
        <th>Amount</th>
        <th>Investment Type</th>
        <th>Start Date</th>
        <th>Due Date</th>
        <th>Status</th>
      </tr>
    </thead>
  );
}

function TableRow({ sn, username, amount, type, start, end, status, onStatusClick }) {
  return (
    <tr>
      <td>{sn}</td>
      <td>{username}</td>
      <td>{amount}</td>
      <td>{type}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>
        <Link
          to={`/status/${status}`}
          state={{ amount, username, start, type, end }}
          onClick={() => onStatusClick(status)}
        >
          <Status status={status} showText={false} />
        </Link>
      </td>
    </tr>
  );
}

function Table2({ onStatusClick }) {
  const data = [
    {
      sn: 1,
      username: "Echindo",
      amount: "$3,000",
      type:"Parent",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      status: "active",
    },
    {
      sn: 2,
      username: "Echindo",
      amount: "$2,000",
      type:"Youth",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      status: "inactive",
    },
    {
      sn: 3,
      username: "Echindo",
      amount: "$1,500",
      type:"Children",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      status: "active",
    },
    {
      sn: 4,
      username: "Echindo",
      amount: "$3,000",
      type:"Parent",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      status: "active",
    },
    {
      sn: 5,
      username: "Echindo",
      amount: "$3,000",
      type:"Parent",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      status: "inactive",
    },
    {
      sn: 6,
      username: "Echindo",
      amount: "$2,000",
      type:"Youth",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      status: "active",
    },
    {
      sn: 7,
      username: "Echindo",
      amount: "$2,000",
      type:"Youth",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      status: "inactive",
    },
    {
      sn: 8,
      username: "Echindo",
      amount: "$2,000",
      type:"Youth",
      start: "1st Nov., 2024",
      end: "30th Nov., 2024",
      status: "active",
    },
  ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border-collapse shadow-lg">
        <TableHeader />
        <tbody>
          {data.map((row) => (
            <TableRow
              key={row.sn}
              sn={row.sn}
              username={row.username}
              amount={row.amount}
              type={row.type}
              start={row.start}
              end={row.end}
              status={row.status}
              onStatusClick={onStatusClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
