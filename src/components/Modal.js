import React from 'react';

export default function Modal({ closeModal }) {
  return (
    <div className="inline-modal">

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Physical Fitness Certificate</h2>
        <span 
          onClick={closeModal} 
          style={{ cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}
        >
          ×
        </span>
      </div>

      <hr style={{ margin: '10px 0' }} />

      <p><b>Liver:</b> Normal</p>
      <p><b>Spleen:</b> Normal</p>
      <p><b>Lungs:</b> Clear</p>
      <p><b>Heart Sounds:</b> Normal</p>
      <p><b>Eyes:</b> 20/20</p>
      <p><b>Hearing:</b> Normal</p>
      <p><b>Extremities:</b> Normal</p>
      <p><b>Other Checks:</b> Normal</p>

    </div>
  );
}

