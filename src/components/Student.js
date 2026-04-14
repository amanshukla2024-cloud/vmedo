import React, { useState } from 'react';

import Sidebar from './Sidebar'; // <-- import Sidebar here
import Dashboard from './Dashboard';
import Profile from './Profile';
import History from './History';
import Appeals from './Appeals';
import CareTeam from './CareTeam';

export default function Student() {

  const [section, setSection] = useState('dashboard');
  const [state, setState] = useState("S1");
  const [day, setDay] = useState(1);
  const [systemDay, setSystemDay] = useState(1);

  const showSection = (sec) => setSection(sec);

  return (
    <div className="container">

      {/* SIDEBAR */}
      <Sidebar showSection={showSection} />  {/* <-- use Sidebar component */}

      {/* MAIN */}
      <div className="main">
        {section === 'dashboard' && (
          <Dashboard
            state={state}
            setState={setState}
            day={day}
            setDay={setDay}
            systemDay={systemDay}
            setSystemDay={setSystemDay}
            showSection={showSection}
          />
        )}

        {section === 'profile' && <Profile />}
        {section === 'history' && <History />}
        {section === 'appeals' && <Appeals systemDay={systemDay} />}
        {section === 'careteam' && <CareTeam />}
      </div>
    </div>
  );
}
