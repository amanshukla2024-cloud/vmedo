import React, { useState, useEffect } from "react";

export default function Approvals({ systemDay }) {
  // INITIAL APPROVED (STATIC SAMPLE)
  const [approvedAppeals, setApprovedAppeals] = useState([
    {
      id: 101,
      type: "Medical",
      raised: 3,
      approved: 4,
      reason: "Medical supervision for mild fever.",
      stateTransition: "S1 -> S3"
    },
    {
      id: 102,
      type: "Medical",
      raised: 10,
      approved: 11,
      reason: "Hospitalization required for minor surgery.",
      stateTransition: "S3 -> S4"
    }
  ]);

  // INITIAL PENDING
  const [pendingAppeals, setPendingAppeals] = useState([
    {
      id: 201,
      type: "Medical",
      raised: 5,
      approved: "-",
      reason: "Observation for headache.",
      stateTransition: "S1 -> S3"
    },
    {
      id: 202,
      type: "Medical",
      raised: 12,
      approved: "-",
      reason: "Follow-up required for mild infection.",
      stateTransition: "S3 -> S4"
    }
  ]);

  // ACTIVE TAB
  const [activeTab, setActiveTab] = useState("approved");

  // APPROVE PENDING APPEAL
  const approvePending = (appealId) => {
    const toApprove = pendingAppeals.find((a) => a.id === appealId);
    if (!toApprove) return;

    const nowApproved = {
      ...toApprove,
      approved: systemDay, // ✅ Day Approved set to current system day
    };

    setPendingAppeals(pendingAppeals.filter((a) => a.id !== appealId));
    setApprovedAppeals([nowApproved, ...approvedAppeals]);
  };

  // RENDER SINGLE CARD
  const renderCard = (a, status, isPending = false) => (
    <div key={a.id} className="appeal-card">
      <h3>Appeal #{a.id}</h3>
      <p><b>Type:</b> {a.type}</p>
      <p><b>Day Raised:</b> Day {a.raised}</p>
      <p><b>Day Approved:</b> {a.approved === "-" ? "-" : `Day ${a.approved}`}</p>
      <p><b>State Transition:</b> {a.stateTransition}</p>
      <p><b>Status:</b> {status}</p>
      <p><b>Reason:</b> {a.reason}</p>

      {/* Approve button only for pending appeals */}
      {isPending && (
        <button
          onClick={() => approvePending(a.id)}
          className="action-btn"
          style={{ marginTop: "10px" }}
        >
          Approve
        </button>
      )}
    </div>
  );

  return (
    <div id="approvals">
      <h2>Approvals</h2>

      {/* TABS */}
      <div className="appeal-options" style={{ marginBottom: 20 }}>
        <button onClick={() => setActiveTab("approved")}>Approved</button>
        <button onClick={() => setActiveTab("pending")}>Pending</button>
      </div>

      {/* APPROVED LIST */}
      {activeTab === "approved" && (
        <div>
          {approvedAppeals.length === 0 ? (
            <p>No approved appeals.</p>
          ) : (
            approvedAppeals.map((a) => renderCard(a, "Approved"))
          )}
        </div>
      )}

      {/* PENDING LIST */}
      {activeTab === "pending" && (
        <div>
          {pendingAppeals.length === 0 ? (
            <p>No pending appeals.</p>
          ) : (
            pendingAppeals.map((a) => renderCard(a, "Pending", true))
          )}
        </div>
      )}
    </div>
  );
}

