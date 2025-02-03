import "../styles/TableStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../images/image.png";
import Image2 from "../images/image 2.png";
import Image3 from "../images/image 3.png";
import Image4 from "../images/image 4.png";
import Image5 from "../images/image 5.png";
import Image6 from "../images/image 6.png";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>S/N</th>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Date Created</th>
        <th>Project</th>
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
        <img src={`${props.image}`} style={{ width: "50px" }} />
      </td>
      <td>
        <Link to="#" onClick={handleDialogue}>
          {props.name}
        </Link>
        {showDialogue && (
          <div className="dialogue">
            <h4>USER DETAILS</h4>
            <img src={props.image} />
            <p>
              <strong>Name:</strong> {props.name}
            </p>
            <p>
              <strong>Email:</strong> {props.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {props.number}
            </p>
            <p>
              <strong>Date Created:</strong> {props.date}
            </p>
            <p>
              <strong>Project:</strong> {props.project}
            </p>
            <button onClick={() => setShowDialogue(false)}>Block User</button>
            <button onClick={() => setShowDialogue(false)}>Close</button>
          </div>
        )}
      </td>
      <td>{props.email}</td>
      <td>{props.number}</td>
      <td>{props.date}</td>
      <td>{props.project}</td>
    </tr>
  );
}

function Table1() {
  const data = [
    {
      sn: 1,
      image: Image1,
      name: "Echindo Saate",
      email: "saateechindo@gmail.com",
      number: "08021498512",
      date: "11-08-2024",
      project: "Parent",
    },
    {
      sn: 2,
      image: Image2,
      name: "Echindo Saate",
      email: "saateechindo@gmail.com",
      number: "08021498512",
      date: "11-08-2024",
      project: "Youth",
    },
    {
      sn: 3,
      image: Image3,
      name: "Echindo Saate",
      email: "saateechindo@gmail.com",
      number: "08021498512",
      date: "11-08-2024",
      project: "Child",
    },
    {
      sn: 4,
      image: Image4,
      name: "Echindo Saate",
      email: "saateechindo@gmail.com",
      number: "08021498512",
      date: "11-08-2024",
      project: "Parent",
    },
    {
      sn: 5,
      image: Image5,
      name: "Echindo Saate",
      email: "saateechindo@gmail.com",
      number: "08021498512",
      date: "11-08-2024",
      project: "Parent",
    },
    {
      sn: 6,
      image: Image6,
      name: "Echindo Saate",
      email: "saateechindo@gmail.com",
      number: "08021498512",
      date: "11-08-2024",
      project: "Child",
    },
    {
      sn: 7,
      image: Image4,
      name: "Echindo Saate",
      email: "saateechindo@gmail.com",
      number: "08021498512",
      date: "11-08-2024",
      project: "Youth",
    },
    {
      sn: 8,
      image: Image5,
      name: "Echindo Saate",
      email: "saateechindo@gmail.com",
      number: "08021498512",
      date: "11-08-2024",
      project: "Youth",
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
              image={row.image}
              name={row.name}
              email={row.email}
              number={row.number}
              date={row.date}
              project={row.project}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table1;
