import React from "react";

export default function Sidebar({ showSection }) {
  return (
    <div className="sidebar">

      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "20px",
        gap: "10px"
      }}>
        <img src="vit.jpeg" alt="logo" style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%"
        }} />
        <h2 style={{ margin: 0, color: "white" }}>V-MEDO</h2>
      </div>

      <a onClick={() => showSection("dashboard")}>Dashboard</a>
      <a onClick={() => showSection("profile")}>Profile</a>
      <a onClick={() => showSection("approvals")}>Approvals</a>

    </div>
  );
}
