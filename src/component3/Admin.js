import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Approvals from "../component2/Approvals";

import StudentSearch from "./StudentSearch";
import PhysicianSearch from "./PhysicianSearch";
import Announcement from "./Announcement";
import Notifications from "./Notifications";

export default function Admin() {

  const [section, setSection] = useState("dashboard");
  const [systemDay, setSystemDay] = useState(1);

  const showSection = (sec) => setSection(sec);

  return (
    <div className="container">

      <Sidebar showSection={showSection} />

      <div className="main">

        {section === "dashboard" && (
          <Dashboard
            systemDay={systemDay}
            setSystemDay={setSystemDay}
            showSection={showSection}
          />
        )}

        {section === "profile" && <Profile />}
        {section === "approvals" && <Approvals systemDay={systemDay} />}

        {section === "studentSearch" && <StudentSearch />}
        {section === "physicianSearch" && <PhysicianSearch />}
        {section === "announcement" && <Announcement />}
        {section === "notifications" && <Notifications />}

      </div>
    </div>
  );
}
