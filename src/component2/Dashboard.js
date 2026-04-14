import React, { useState } from "react";
import StateCard from "./StateCard";

export default function Dashboard({ systemDay, setSystemDay, showSection }) {

  const [regInput, setRegInput] = useState("");

  const increaseDay = () => setSystemDay(systemDay === 31 ? 1 : systemDay + 1);
  const decreaseDay = () => setSystemDay(systemDay === 1 ? 31 : systemDay - 1);

  const handleSearch = () => {
    if (!regInput.trim()) {
      alert("Enter Registration Number");
      return;
    }

    // store in localStorage (simple, no prop mess)
    localStorage.setItem("searchReg", regInput);

    showSection("search");
  };

  return (
    <>
      {/* TOP */}
      <div className="identity">

        <div className="profile-info">
          <div className="profile-img">
            <img src="doctor7.jpg" alt="Physician" />
          </div>

          <div>
            <h2>Welcome, Dr. Sharma</h2>
            <p>Department: Campus Medical Block</p>
          </div>
        </div>

        <div className="system-day">
          <span>System Day</span>

          <div className="day-controls">
            <button onClick={decreaseDay}>{"<"}</button>
            <span>{systemDay}</span>
            <button onClick={increaseDay}>{">"}</button>
          </div>
        </div>

      </div>

      <StateCard systemDay={systemDay} />

      {/* PANELS */}
      <div className="grid">

        {/* ✅ GENERATE RECEIPT */}
        <div
  className="panel"
  onClick={() => showSection("generate")}
  style={{
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  }}
>
  {/* 🔥 TOP LEFT HEADING (UNCHANGED STYLE) */}
  <h3 style={{ marginBottom: "0" }}>
    Generate Receipt
  </h3>

  {/* 🔥 PERFECT CENTER TEXT */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <p
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      margin: 0,
      textAlign: "center"
    }}
  >
    Click to generate receipt
  </p>
</div>

        {/* ✅ STUDENT SEARCH */}
        <div className="panel">
          <h3>Student Search</h3>

          <input
            type="text"
            placeholder="Enter Reg No"
            value={regInput}
            onChange={(e) => setRegInput(e.target.value)}
          />
          <br></br>
          <button className="action-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* STATIC PANELS */}
        <div className="panel">
          <h3>Notifications</h3>
          <p>Appeals Pending: 10</p>
          <p>Admin Announcements: None</p>
        </div>
        <div
  className="panel"
  onClick={() => showSection("feedback")}
  style={{
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",   // 🔥 centers middle text vertically
    alignItems: "center"
  }}
>
  {/* 🔥 TOP CENTER HEADING */}
  <h3 style={{ alignSelf: "center", marginTop: "0" }}>
    Student Feedback
  </h3>

  {/* 🔥 CENTER TEXT */}
  <p style={{ textAlign: "center", marginTop: "10px" }}>
    Send messages to students
  </p>
</div>


        



      </div>
    </>
  );
}
