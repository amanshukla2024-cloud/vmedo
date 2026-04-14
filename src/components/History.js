import React from 'react';

export default function History() {
  return (
    <div id="history">
      <h2>Medical History</h2>

      <div className="timeline">

        {/* VISIT 1 */}
        <div className="visit-card">
          <div className="visit-date">Day 02</div>

          <div className="state-before">
            <h4><b>Before</b></h4>
            <p><b>Status:</b> S1 — FIT</p>
          </div>

          <div className="digital-receipt">
            <h4><b>Receipt</b></h4>
            <p><b>BP:</b> 120/80 mmHg</p>
            <p><b>Temp:</b> 36.7°C</p>
            <p><b>Pulse:</b> 72 bpm</p>
            <p><b>Medications:</b> None</p>
            <p><b>Physician:</b> Dr. Mehta</p>
          </div>

          <div className="state-after">
            <h4><b>After</b></h4>
            <p><b>Status:</b> S3 — MEDICAL REST</p>
          </div>
        </div>

        {/* VISIT 2 */}
        <div className="visit-card">
          <div className="visit-date">Day 05</div>

          <div className="state-before">
            <h4><b>Before</b></h4>
            <p><b>Status:</b> S3 — MEDICAL REST</p>
          </div>

          <div className="digital-receipt">
            <h4><b>Receipt</b></h4>
            <p><b>BP:</b> 118/76 mmHg</p>
            <p><b>Temp:</b> 36.8°C</p>
            <p><b>Pulse:</b> 70 bpm</p>
            <p><b>Medications:</b> Vitamin D Supplements</p>
            <p><b>Physician:</b> Dr. Sharma</p>
          </div>

          <div className="state-after">
            <h4><b>After</b></h4>
            <p><b>Status:</b> S1 — FIT</p>
          </div>
        </div>

        {/* VISIT 3 */}
        <div className="visit-card">
          <div className="visit-date">Day 09</div>

          <div className="state-before">
            <h4><b>Before</b></h4>
            <p><b>Status:</b> S1 — FIT</p>
          </div>

          <div className="digital-receipt">
            <h4><b>Receipt</b></h4>
            <p><b>BP:</b> 122/82 mmHg</p>
            <p><b>Temp:</b> 37.1°C</p>
            <p><b>Pulse:</b> 75 bpm</p>
            <p><b>Medications:</b> Paracetamol</p>
            <p><b>Physician:</b> Dr. Mehta</p>
          </div>

          <div className="state-after">
            <h4><b>After</b></h4>
            <p><b>Status:</b> S3 — MEDICAL REST</p>
          </div>
        </div>

        {/* VISIT 4 */}
        <div className="visit-card">
          <div className="visit-date">Day 12</div>

          <div className="state-before">
            <h4><b>Before</b></h4>
            <p><b>Status:</b> S3 — MEDICAL REST</p>
          </div>

          <div className="digital-receipt">
            <h4><b>Receipt</b></h4>
            <p><b>BP:</b> 119/78 mmHg</p>
            <p><b>Temp:</b> 36.9°C</p>
            <p><b>Pulse:</b> 71 bpm</p>
            <p><b>Medications:</b> Rest + Fluids</p>
            <p><b>Physician:</b> Dr. Sharma</p>
          </div>

          <div className="state-after">
            <h4><b>After</b></h4>
            <p><b>Status:</b> S1 — FIT</p>
          </div>
        </div>

      </div>
    </div>
  );
}
