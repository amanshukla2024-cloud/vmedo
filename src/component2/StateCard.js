import React from "react";

export default function StateCard({ systemDay }) {
  let stateName = "";
  let bgClass = "";

  if (systemDay >= 1 && systemDay <= 14) {
    stateName = "Normal Day";
    bgClass = "state-normal";
  } else if (systemDay >= 15 && systemDay <= 22) {
    stateName = "Near Exam";
    bgClass = "state-near";
  } else {
    stateName = "Exam Time";
    bgClass = "state-exam";
  }

  return (
    <div className={`state-card ${bgClass}`}>
      <h2>{stateName}</h2>
      <p>System Day: {systemDay}</p>
    </div>
  );
}
