import React, { useState } from "react";

export default function GenerateReceipt({ systemDay, addToHistory }) {

  const [form, setForm] = useState({
    student: "",
    bp: "",
    temp: "",
    pulse: "",
    medication: "",
    fromState: "S1",
    toState: "S3"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateReceipt = () => {
    if (!form.student) {
      alert("Enter student name");
      return;
    }

    const newReceipt = {
      day: systemDay,
      student: form.student,
      bp: form.bp,
      temp: form.temp,
      pulse: form.pulse,
      medication: form.medication,
      from: form.fromState,
      to: form.toState
    };

    addToHistory(newReceipt);

    alert("Receipt Generated ✔");

    setForm({
      student: "",
      bp: "",
      temp: "",
      pulse: "",
      medication: "",
      fromState: "S1",
      toState: "S3"
    });
  };

  return (
    <div>

      <h2>Generate Medical Receipt</h2>

      <div className="visit-card">

        {/* DAY */}
        <div className="visit-date">
          Day {systemDay}
        </div>

        {/* STUDENT */}
        <div className="digital-receipt">
          <h4><b>Student Details</b></h4>

          <p>
            <b>Name:</b>
            <input
              name="student"
              value={form.student}
              onChange={handleChange}
            />
          </p>
        </div>

        {/* BEFORE STATE */}
        <div className="state-before">
          <h4><b>Before</b></h4>

          <p>
            <b>Status:</b>
            <select
              name="fromState"
              value={form.fromState}
              onChange={handleChange}
            >
              <option>S1</option>
              <option>S3</option>
              <option>S4</option>
            </select>
          </p>
        </div>

        {/* RECEIPT BODY */}
        <div className="digital-receipt">
          <h4><b>Receipt</b></h4>

          <p>
            <b>BP:</b>
            <input name="bp" value={form.bp} onChange={handleChange} />
          </p>

          <p>
            <b>Temp:</b>
            <input name="temp" value={form.temp} onChange={handleChange} />
          </p>

          <p>
            <b>Pulse:</b>
            <input name="pulse" value={form.pulse} onChange={handleChange} />
          </p>

          <p>
            <b>Medications:</b>
            <input name="medication" value={form.medication} onChange={handleChange} />
          </p>

          <p>
            <b>Physician:</b> Dr. Sharma
          </p>
        </div>

        {/* AFTER STATE */}
        <div className="state-after">
          <h4><b>After</b></h4>

          <p>
            <b>Status:</b>
            <select
              name="toState"
              value={form.toState}
              onChange={handleChange}
            >
              <option>S1</option>
              <option>S3</option>
              <option>S4</option>
            </select>
          </p>
        </div>

        {/* BUTTON */}
        <button className="action-btn" onClick={generateReceipt}>
          Generate Receipt
        </button>

      </div>
    </div>
  );
}






