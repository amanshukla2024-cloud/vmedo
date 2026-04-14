import React, { useState } from "react";
import StateCard from "../component2/StateCard";
import StudentSearch from "../component2/StudentSearch";

export default function Dashboard({ systemDay, setSystemDay }) {
  const [activeSection, setActiveSection] = useState(""); // studentSearch / others
  const [reg, setReg] = useState(""); // input registration

  const increaseDay = () => setSystemDay(systemDay === 31 ? 1 : systemDay + 1);
  const decreaseDay = () => setSystemDay(systemDay === 1 ? 31 : systemDay - 1);

  const handleSearch = () => {
    if (reg.trim() !== "") setActiveSection("studentSearch");
  };

  const resetView = () => {
    setActiveSection("");
    setReg("");
  };

  const isCollapsed = activeSection === "studentSearch";

  return (
    <div className={`main ${isCollapsed ? "collapsed" : ""}`}>

      {/* PROFILE / IDENTITY */}
      <div className="identity">
        <div className="profile-img">
          <img
            src={isCollapsed ? "student.jpg" : "admin.jpg"}
            alt="Profile"
          />
        </div>

        <div className="profile-details">
          {isCollapsed ? (
            <>
              <h2>Student</h2>
              <p>Reg No: {reg}</p>
            </>
          ) : (
            <>
              <h2>Welcome, Admin</h2>
              <p>System Control Panel</p>
            </>
          )}
        </div>

        {!isCollapsed && (
          <div className="system-day">
            <span>System Day</span>
            <div className="day-controls">
              <button onClick={decreaseDay}>{"<"}</button>
              <span>{systemDay}</span>
              <button onClick={increaseDay}>{">"}</button>
            </div>
          </div>
        )}
      </div>

      {/* STATE CARD */}
      {!isCollapsed && <StateCard systemDay={systemDay} />}

      {/* DASHBOARD PANELS */}
      {!isCollapsed && (
        <div className="grid">
          <div className="panel student-panel">
            <h3>Student Search</h3>
            <input
              type="text"
              placeholder="Enter Registration Number"
              value={reg}
              onChange={(e) => setReg(e.target.value)}
            />
            <button className="action-btn" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="panel" onClick={() => setActiveSection("physicianSearch")}>
            <h3>Physician Search</h3>
          </div>

          <div className="panel" onClick={() => setActiveSection("announcement")}>
            <h3>Announcement</h3>
            <p>Send announcements</p>
          </div>

          <div className="panel" onClick={() => setActiveSection("notifications")}>
            <h3>Notifications</h3>
          </div>
        </div>
      )}

      {/* STUDENT SEARCH SECTION */}
      {isCollapsed && <StudentSearch reg={reg} resetView={resetView} />}
    </div>
  );
}
