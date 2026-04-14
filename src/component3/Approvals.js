import React, { useState } from 'react';

export default function Approvals({ systemDay }) {

  const [activeTab, setActiveTab] = useState('approved');

  // APPROVED
  const [approvedAppeals, setApprovedAppeals] = useState([
    {
      id: 201,
      type: "Medo-Academic",
      raised: 15,
      approved: 16,
      reason: "Academic adjustment approved."
    },
    {
      id: 202,
      type: "Medo-Academic",
      raised: 18,
      approved: 19,
      reason: "Exam conflict resolved."
    }
  ]);

  // PENDING
  const [pendingAppeals, setPendingAppeals] = useState([
    {
      id: 301,
      type: "Medo-Academic",
      raised: 17,
      reason: "Request for assignment extension."
    },
    {
      id: 302,
      type: "Medo-Academic",
      raised: 20,
      reason: "Lab reschedule due to medical overlap."
    }
  ]);

  // APPROVE FUNCTION
  const approveAppeal = (id) => {

    const appeal = pendingAppeals.find(a => a.id === id);

    if (!appeal) return;

    const approvedItem = {
      ...appeal,
      approved: systemDay
    };

    setApprovedAppeals([...approvedAppeals, approvedItem]);

    setPendingAppeals(pendingAppeals.filter(a => a.id !== id));
  };

  // CARD RENDER
  const renderCard = (a, status) => (
    <div key={a.id} className="appeal-card">

      <h3>Appeal #{a.id}</h3>

      <p><b>Type:</b> Medo-Academic</p>

      <p><b>Day Raised:</b> Day {a.raised}</p>

      <p>
        <b>Day Approved:</b>{" "}
        {a.approved ? `Day ${a.approved}` : "-"}
      </p>

      <p><b>Status:</b> {status}</p>

      <p><b>Reason:</b> {a.reason}</p>

      {/* APPROVE BUTTON */}
      {status === "Pending" && (
        <button
          className="action-btn"
          onClick={() => approveAppeal(a.id)}
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
        <button onClick={() => setActiveTab('approved')}>Approved</button>
        <button onClick={() => setActiveTab('pending')}>Pending</button>
      </div>

      {/* APPROVED */}
      {activeTab === 'approved' && (
        <div>
          {approvedAppeals.map(a => renderCard(a, "Approved"))}
        </div>
      )}

      {/* PENDING */}
      {activeTab === 'pending' && (
        <div>
          {pendingAppeals.length === 0 ? (
            <p>No pending approvals.</p>
          ) : (
            pendingAppeals.map(a => renderCard(a, "Pending"))
          )}
        </div>
      )}

    </div>
  );
}
