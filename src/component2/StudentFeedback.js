import React, { useState } from "react";

export default function StudentFeedback() {

  const [selectedState, setSelectedState] = useState("S1");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {

    if (message.trim() === "") {
      alert("Please enter a message");
      return;
    }

    alert(`Message sent to students of ${selectedState}`);

    setMessage("");
    setSelectedState("S1");
  };

  return (
    <div>

      {/* HEADING */}
      <h2>Student Feedback</h2>

      {/* SUB TEXT */}
      <p style={{ marginBottom: "25px", color: "#555" }}>
        Write message to All students of a particular state
      </p>

      {/* STATE */}
      <p><b>Select State</b></p>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option>S1</option>
        <option>S3</option>
        <option>S4</option>
      </select>

      {/* MESSAGE */}
      <p style={{ marginTop: "25px" }}>
        <b>Message</b>
      </p>

      
      <textarea
  rows="10"
  style={{ width: "30%" }}   // 🔥 control width here
  placeholder="Enter your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>


      /><br></br>

      {/* BUTTON */}
      <button
        className="action-btn"
        style={{ marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Submit
      </button>

    </div>
  );
}



