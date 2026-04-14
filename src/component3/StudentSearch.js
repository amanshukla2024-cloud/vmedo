import React from "react";

export default function StudentSearch({ reg, resetView }) {
  return (
    <div className="student-report">
      <h2>Student Report</h2>

      <div className="identity profile-top">
        <div className="profile-img">
          <img src="student.jpg" alt="Student" />
        </div>

        <div className="student-info">
          <h3>Rahul Verma</h3>
          <p><b>Reg No:</b> {reg}</p>
          <p><b>S3 Approved : Appeal Ratio:</b> 2 : 3</p>
          <p><b>Visits (Normal Days):</b> 3</p>
          <p><b>Visits (Near Exam):</b> 2</p>
          <p><b>Last Visit Day:</b> Day 18</p>

          <button className="action-btn" style={{ marginTop: "15px" }} onClick={resetView}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
