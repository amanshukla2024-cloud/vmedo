import React from 'react';

export default function Sidebar({ showSection }) {
  return (
    <div className="sidebar">

      {/* LOGO + TITLE */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        marginBottom: '20px',
        gap: '10px'  // spacing between logo and text
      }}>
        {/* Logo (circular) */}
        <img 
          src="vit.jpeg" 
          alt="College Logo" 
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',   // circular logo
            display: 'block'
          }}
        />

        <h2 style={{
          margin: 0, 
          color: 'white', 
          fontSize: '1.2rem', 
          fontWeight: 'bold'
        }}>
          V-MEDO
        </h2>
      </div>

      {/* MENU */}
      <a onClick={() => showSection('dashboard')}>Dashboard</a>
      <a onClick={() => showSection('profile')}>Profile</a>
      <a onClick={() => showSection('history')}>History</a>
      <a onClick={() => showSection('appeals')}>Appeals</a>

    </div>
  );
}
