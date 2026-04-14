import React, { useState } from "react";

export default function Announcement() {

  const [message, setMessage] = useState("");

  const send = () => {
    if (!message.trim()) {
      alert("Enter message");
      return;
    }

    alert("Announcement Sent");
    setMessage("");
  };

  return (
    <div>

      <h2>Announcement</h2>

      <p style={{ marginBottom: "20px" }}>
        Send message to all users
      </p>

      <p><b>Message</b></p>

      <textarea
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="action-btn" onClick={send} style={{ marginTop: "20px" }}>
        Submit
      </button>

    </div>
  );
}
