import React from 'react';

export default function Profile() {
  return (
    <div id="profile">
      <h2>Profile</h2>

      {/* TOP IDENTITY — LEFT ALIGNED, Student-style layout */}
      <div className="identity profile-top">
        {/* Profile Picture */}
        <div className="profile-img">
          <img src="doctor7.jpg" alt="Physician" />
        </div>

        {/* Physician Info */}
        <div className="physician-info">
          <h3>Dr. Sharma</h3>
          <p><b>Specialization:</b> General Medicine</p>
          <p><b>Weekdays:</b> Mon - Fri</p>
          <p><b>Timing:</b> 9:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
}



