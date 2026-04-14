import React from "react";

export default function StudentSearch() {

  const regNo = localStorage.getItem("searchReg");

  return (
    <div>

      <h2>Student Report</h2>

      <div className="identity profile-top">

        <div className="profile-img">
          <img src="my.jpg" alt="Student" />
        </div>

        <div className="student-info">

          <h3>Aman Shukla</h3>

          <p><b>Reg No:</b> {regNo}</p>

          <p><b>S3 Approved : Appeal Ratio:</b> 2 : 3</p>
          <p><b>Visits (Normal Days):</b> 3</p>
          <p><b>Visits (Near Exam):</b> 2</p>
          <p><b>Last Visit Day:</b> Day 18</p>

        </div>

      </div>

    </div>
  );
}

