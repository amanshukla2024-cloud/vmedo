import React from 'react';

export default function StateCard({
  state, setState,
  day, setDay
}) {

  const cardClick = () => {
    if (state === "S1") {
      setState("S3");
      setDay(1);
    } 
    else if (state === "S3" && day < 4) {
      setDay(day + 1);
    } 
    else if (state === "S4") {
      alert("Hospital report uploaded (simulated)");
    }
  };

  const goBlood = (e) => {
    e.stopPropagation();
    setState("S3_TEST");
  };

  const recover = (e) => {
    e.stopPropagation();
    setState("S1");
    setDay(1);
  };

  const testPositive = (e) => {
    e.stopPropagation();
    setState("S4");
  };

  const testNegative = (e) => {
    e.stopPropagation();
    setState("S1");
    setDay(1);
  };

  // ---------------- RENDER ----------------

  let title = "";
  let quote = "";
  let showS3 = false;
  let showChoice = false;
  let choiceButtons = null;

  if (state === "S1") {
    title = "S1 — FIT";
    quote = "You are healthy. Click to request medical review.";
  }

  if (state === "S3") {
    title = "S3 — MEDICAL REST";
    showS3 = true;

    if (day === 1) {
      quote = "S3 Approved — You are now on supervised medical rest.";
    } else {
      quote = "You are under supervised rest.";
    }

    showChoice = true;

    if (day < 4) {
      choiceButtons = (
        <button onClick={recover}>Recovered</button>
      );
    } else {
      choiceButtons = (
        <>
          <button onClick={goBlood}>Blood Test</button>
          <button onClick={recover}>Recovered</button>
        </>
      );
    }
  }

  if (state === "S3_TEST") {
    title = "S3 — BLOOD TEST REVIEW";
    quote = "Awaiting blood test result.";
    showS3 = true;

    showChoice = true;
    choiceButtons = (
      <>
        <button onClick={testPositive}>Test Positive → Hospitalize</button>
        <button onClick={testNegative}>Test Negative → Fit</button>
      </>
    );
  }

  if (state === "S4") {
    title = "S4 — HOSPITALIZED";
    quote = "Under hospital care. Click to upload report.";
  }

  return (
    <div 
      className={`state-card ${
        state === "S1" ? "state-fit" :
        state === "S3" || state === "S3_TEST" ? "state-rest" :
        "state-hospital"
      }`}
      onClick={cardClick}
    >

      <div className="state-title">{title}</div>
      <p>{quote}</p>

      {/* S3 Progress */}
      {showS3 && (
        <div>
          <p>{state === "S3" ? `Day ${day} / 4` : "Test Completed"}</p>

          <div className="s3bar">
              <div className="s3fill"
  style={{
    width: state === "S3" ? `${(day / 4) * 100}%` : "100%",
    background: state === "S3"
      ? (
          day === 1 ? "#22c55e" :   // Green
          day === 2 ? "#facc15" :   // Yellow
          day === 3 ? "#f97316" :   // Orange
          "#ef4444"                // Red (Day 4)
        )
      : "#22c55e"
  }}
></div>

          </div>
        </div>
      )}

      {/* Choices */}
      {showChoice && (
        <div className="choice">
          {choiceButtons}
        </div>
      )}

    </div>
  );
}


