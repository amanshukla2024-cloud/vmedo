import React from 'react';

export default function CareTeam() {
  return (
    <div id="careteam">
      <h2>Care Team</h2>

      <div className="careteam-grid">

        {/* DOCTOR 1 */}
        <div className="careteam-card">
          <div className="profile-img">
            <img src="doctor1.jpg" alt="Dr. Mehta" />
          </div>
          <h3>Dr. Mehta</h3>
          <p><b>Specialisation:</b> General Physician</p>
          <p><b>Days:</b> Mon – Fri</p>
          <p><b>Time:</b> 09:00 – 17:00</p>
        </div>

        {/* DOCTOR 2 */}
        <div className="careteam-card">
          <div className="profile-img">
            <img src="doctor2.jpg" alt="Dr. Sharma" />
          </div>
          <h3>Dr. Sharma</h3>
          <p><b>Specialisation:</b> Internal Medicine</p>
          <p><b>Days:</b> Tue – Thu</p>
          <p><b>Time:</b> 10:00 – 16:00</p>
        </div>

        {/* DOCTOR 3 */}
        <div className="careteam-card">
          <div className="profile-img">
            <img src="doctor3.jpg" alt="Dr. Rao" />
          </div>
          <h3>Dr. Rao</h3>
          <p><b>Specialisation:</b> Cardiologist</p>
          <p><b>Days:</b> Mon, Wed, Fri</p>
          <p><b>Time:</b> 11:00 – 15:00</p>
        </div>

        {/* DOCTOR 4 */}
        <div className="careteam-card">
          <div className="profile-img">
            <img src="doctor4.jpg" alt="Dr. Iyer" />
          </div>
          <h3>Dr. Iyer</h3>
          <p><b>Specialisation:</b> Orthopedic</p>
          <p><b>Days:</b> Tue, Thu</p>
          <p><b>Time:</b> 09:30 – 14:00</p>
        </div>

        {/* DOCTOR 5 */}
        <div className="careteam-card">
          <div className="profile-img">
            <img src="doctor5.jpg" alt="Dr. Singh" />
          </div>
          <h3>Dr. Singh</h3>
          <p><b>Specialisation:</b> Neurologist</p>
          <p><b>Days:</b> Mon – Wed</p>
          <p><b>Time:</b> 12:00 – 17:00</p>
        </div>

        {/* DOCTOR 6 */}
        <div className="careteam-card">
          <div className="profile-img">
            <img src="doctor6.jpg" alt="Dr. Nair" />
          </div>
          <h3>Dr. Nair</h3>
          <p><b>Specialisation:</b> Dermatologist</p>
          <p><b>Days:</b> Wed – Fri</p>
          <p><b>Time:</b> 10:00 – 14:00</p>
        </div>

        {/* DOCTOR 7 */}
        <div className="careteam-card">
          <div className="profile-img">
            <img src="doctor7.jpg" alt="Dr. Gupta" />
          </div>
          <h3>Dr. Gupta</h3>
          <p><b>Specialisation:</b> ENT Specialist</p>
          <p><b>Days:</b> Mon, Thu</p>
          <p><b>Time:</b> 09:00 – 13:00</p>
        </div>

        {/* DOCTOR 8 */}
        <div className="careteam-card">
          <div className="profile-img">
            <img src="doctor8.jpg" alt="Dr. Verma" />
          </div>
          <h3>Dr. Verma</h3>
          <p><b>Specialisation:</b> Psychiatrist</p>
          <p><b>Days:</b> Tue – Sat</p>
          <p><b>Time:</b> 11:00 – 18:00</p>
        </div>

      </div>
    </div>
  );
}

