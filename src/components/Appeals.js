import React, { useState, useEffect } from 'react';

export default function Appeals({ systemDay }) {

  // 🔥 TYPE RULE ENGINE
  const getAvailableTypes = () => {
    if (systemDay >= 1 && systemDay <= 14) {
      return ["Medical"];
    }
    if (systemDay >= 15 && systemDay <= 21) {
      return ["Medical", "Medo-Academic"];
    }
    if (systemDay >= 22 && systemDay <= 31) {
      return ["Exam-Aid", "Emergency"];
    }
    return ["Medical"];
  };

  const availableTypes = getAvailableTypes();

  const [activeTab, setActiveTab] = useState('approved');

  // APPROVED (STATIC SAMPLE)
  const [approvedAppeals] = useState([
    {
      id: 101,
      type: "Medical",
      raised: 1,
      approved: 2,
      reason: "Medical leave approved for fever."
    },
    {
      id: 102,
      type: "Medo-Academic",
      raised: 16,
      approved: 17,
      reason: "Academic conflict resolved."
    }
  ]);

  // PENDING
  const [pendingAppeals, setPendingAppeals] = useState([]);

  // FORM STATE
  const [form, setForm] = useState({
    type: availableTypes[0],
    reason: ""
  });

  // 🔁 KEEP FORM TYPE VALID WHEN SYSTEM DAY CHANGES
  useEffect(() => {
    setForm(prev => ({
      ...prev,
      type: availableTypes[0]
    }));
  }, [systemDay]);

  // SUBMIT
  const submitAppeal = () => {
    if (!form.reason.trim()) {
      alert("Please enter a reason.");
      return;
    }

    const newAppeal = {
      id: Date.now(),
      type: form.type,
      raised: systemDay,
      approved: "-",
      reason: form.reason
    };

    setPendingAppeals([...pendingAppeals, newAppeal]);

    setForm({
      type: availableTypes[0],
      reason: ""
    });

    setActiveTab('pending');
  };

  // RENDER CARD
  const renderCard = (a, status) => (
    <div key={a.id} className="appeal-card">
      <h3>Appeal #{a.id}</h3>
      <p><b>Type:</b> {a.type}</p>
      <p><b>Day Raised:</b> Day {a.raised}</p>
      <p><b>Day Approved:</b> {a.approved === "-" ? "-" : "Day " + a.approved}</p>
      <p><b>Status:</b> {status}</p>
      <p><b>Reason:</b> {a.reason}</p>
    </div>
  );

  return (
    <div id="appeals">
      <h2>Appeals</h2>

      {/* TABS */}
      <div className="appeal-options" style={{ marginBottom:20 }}>
        <button onClick={() => setActiveTab('approved')}>Approved</button>
        <button onClick={() => setActiveTab('pending')}>Pending</button>
        <button onClick={() => setActiveTab('compose')}>Compose</button>
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
            <p>No pending appeals.</p>
          ) : (
            pendingAppeals.map(a => renderCard(a, "Pending"))
          )}
        </div>
      )}

      {/* COMPOSE */}
      {activeTab === 'compose' && (
        <div className="appeal-card">
          <h3>Compose New Appeal</h3>

          <p>
            <label><b>Type:</b></label><br />
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              style={{ width:'100%', padding:8, borderRadius:6 }}
            >
              {availableTypes.map((type, index) => (
                <option key={index}>{type}</option>
              ))}
            </select>
          </p>

          <p>
            <label><b>Reason:</b></label><br />
            <textarea
              rows="4"
              style={{ width:'100%', padding:8, borderRadius:6 }}
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            />
          </p>

          <button
            onClick={submitAppeal}
            style={{
              padding:'10px 14px',
              border:'none',
              borderRadius:6,
              background:'#24345c',
              color:'white',
              cursor:'pointer'
            }}
          >
            Submit Appeal
          </button>
        </div>
      )}
    </div>
  );
}
