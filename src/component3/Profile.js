import React from "react";

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>

      <div className="identity">
        <div className="profile-img">
          <img src="admin.jpg" alt="Admin" />
        </div>

        <div>
          <h3>Admin User</h3>
          <p><b>Role:</b> System Administrator</p>
          <p><b>Access:</b> Full Control</p>
        </div>
      </div>

    </div>
  );
}
