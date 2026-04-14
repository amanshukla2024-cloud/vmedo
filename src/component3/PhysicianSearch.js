import React, { useState } from "react";

export default function StudentSearch() {

  const [reg, setReg] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div>

      {!show && (
        <>
          <h2>Student Search</h2>

          <input
            placeholder="Enter Registration Number"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
          />

          <button className="action-btn" onClick={() => setShow(true)}>
            Search
          </button>
        </>
      )}

      {show && (
        <div className="identity">
          <div className="profile-img">
            <img src="student.jpg" alt="Student" />
          </div>

          <div>
            <h3>{reg}</h3>
            <p>S3 Approval Ratio: 2/3</p>
            <p>Visits Normal: 3</p>
            <p>Visits Near Exam: 2</p>
            <p>Last Visit: Day 12</p>
          </div>
        </div>
      )}

    </div>
  );
}
