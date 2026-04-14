import React, { useState } from 'react';
import Modal from './Modal';

export default function Profile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="profile">
      <h2>Profile</h2>

      {/* TOP IDENTITY — LEFT ALIGNED */}
      <div className="identity profile-top">
        <div className="profile-img">
          <img src="my.jpg" alt="Student" />
        </div>

        <div className="student-info">
          <h3>Aman Shukla</h3>

          <p><b>Reg No:</b> 24BCE5038</p>
          <p><b>Blood Group:</b> B+</p>
          <p><b>Gender:</b> Male</p>
          <p><b>Height:</b> 175 cm</p>
          <p><b>Weight:</b> 70 kg</p>
          <p><b>BMI:</b> 22.9</p>

          <button 
            className="action-btn" 
            onClick={() => setShowModal(!showModal)}
          >
            View Detailed Health Data
          </button>
        </div>
      </div>

      {/* MODAL BELOW */}
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
}


