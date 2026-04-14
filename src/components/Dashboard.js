import React from 'react';
import StateCard from './StateCard';

export default function Dashboard({ 
  state, setState, day, setDay, 
  systemDay, setSystemDay, 
  showSection 
}) {

  // SYSTEM DAY CONTROL
  const increaseDay = () => {
    setSystemDay(systemDay === 31 ? 1 : systemDay + 1);
  };

  const decreaseDay = () => {
    setSystemDay(systemDay === 1 ? 31 : systemDay - 1);
  };

  // ---------------- PANEL CONTENT ----------------

  let rec = [];
  let today = [];
  let care = [];
  let status = [];

  // -------- S1 --------
  if (state === "S1") {

    rec = [
      "Maintain hydration",
      "Follow regular exercise",
      "Eat balanced meals"
    ];

    today = [
      "No medical action required",
      "Continue normal routine",
      "Monitor general well-being"
    ];

    care = [
      "Stay fit and active",
      "Report if discomfort arises",
      "Maintain healthy habits"
    ];

    status = [
      "No supervision required",
      "Health condition stable",
      "Fit for daily activities"
    ];
  }

  // -------- S3 --------
  else if (state === "S3") {

    rec = [
      "Visit assigned physician",
      "Follow prescribed treatment",
      "Ensure proper rest"
    ];

    today = [
      "Medical review scheduled",
      "Follow supervision protocol",
      "Limit physical activity"
    ];

    care = [
      "Under physician supervision",
      "Adhere strictly to advice",
      "Track recovery progress"
    ];

    status = [
      "Monitoring in progress",
      "Recovery phase active",
      "Condition under observation"
    ];
  }

  // -------- S4 --------
  else if (state === "S4") {

    rec = [
      "Follow hospital treatment",
      "Maintain medical records",
      "Avoid physical strain"
    ];

    today = [
      "Inpatient care ongoing",
      "Treatment in progress",
      "Continuous monitoring active"
    ];

    care = [
      "Specialist supervision active",
      "Continuous medical support",
      "Critical care assistance"
    ];

    status = [
      "Hospitalized",
      "Condition under observation",
      "Recovery in controlled environment"
    ];
  }

  // ---------------- UI ----------------

  return (
    <>
      {/* TOP BAR */}
      <div className="identity" style={{ justifyContent: 'space-between' }}>
        
        {/* LEFT */}
        <div style={{ display:'flex', alignItems:'center' }}>
          <div className="profile-img">
            <img src="my.jpg" alt="Student Photo" />
          </div>
          <div className="student-info">
            <h2>Welcome, Aman Shukla</h2>
            <p><b>Reg No: 24BCE5038</b></p>
          </div>
        </div>

        {/* RIGHT — SYSTEM DAY */}
        <div style={{ textAlign:'center' }}>
          
          <div style={{
            fontSize:'17px',
            color:'#24345c',
            marginBottom:'6px',
            fontWeight:'500'
          }}>
            System Day
          </div>

          <div style={{
            display:'flex',
            alignItems:'center',
            background:'white',
            borderRadius:'10px',
            padding:'6px 10px',
            border:'1px solid #ddd',
            boxShadow:'0 2px 6px rgba(0,0,0,0.08)'
          }}>
            
            <button onClick={decreaseDay} style={btnStyle}>{'<'}</button>

            <span style={{
              minWidth:'30px',
              textAlign:'center',
              fontWeight:'600',
              color:'#24345c'
            }}>
              {systemDay}
            </span>

            <button onClick={increaseDay} style={btnStyle}>{'>'}</button>

          </div>
        </div>

      </div>

      {/* STATE CARD */}
      <StateCard 
        state={state} 
        setState={setState} 
        day={day} 
        setDay={setDay} 
      />

      {/* PANELS */}
      <div className="grid">

        <div className="panel">
          <h3>Recommended Actions</h3>
          <ul>
            {rec.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h3>Today’s Action</h3>
          <ul>
            {today.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div 
          className="panel"
          onClick={() => showSection('careteam')}
          style={{ cursor:'pointer' }}
        >
          <h3>Care Team</h3>
          <ul>
            {care.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h3>Today's Status</h3>
          <ul>
            {status.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
}

// BUTTON STYLE
const btnStyle = {
  background:'transparent',
  border:'none',
  fontSize:'16px',
  cursor:'pointer',
  padding:'4px 8px',
  color:'#24345c'
};


