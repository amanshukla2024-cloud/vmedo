import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Profile from './Profile';
import History from './History';
import Approvals from './Approvals';
import Emergency from './Emergency';
import GenerateReceipt from './GenerateReceipt';
import StudentSearch from './StudentSearch';
import StudentFeedback from "./StudentFeedback";


export default function Physician() {

  const [section, setSection] = useState('dashboard');
  const [systemDay, setSystemDay] = useState(1);

  // 🔥 CENTRAL HISTORY STATE
  const [historyData, setHistoryData] = useState([]);

  const showSection = (sec) => setSection(sec);

  // 🔥 FUNCTION TO ADD RECEIPT
  const addToHistory = (receipt) => {
    setHistoryData(prev => [receipt, ...prev]); // newest on top
  };

  return (
    <div className="container">

      <Sidebar showSection={showSection} />

      <div className="main">

        {section === 'dashboard' && (
          <Dashboard
            systemDay={systemDay}
            setSystemDay={setSystemDay}
            showSection={showSection}
          />
        )}

        {section === 'profile' && <Profile />}

        {/* 🔥 PASS HISTORY */}
        {section === 'history' && (
          <History historyData={historyData} />
        )}

        {section === 'approvals' && <Approvals systemDay={systemDay} />}
        {section === 'emergency' && <Emergency />}

        {/* 🔥 PASS addToHistory */}
        {section === 'generate' && (
          <GenerateReceipt
            systemDay={systemDay}
            addToHistory={addToHistory}
          />
        )}

        {section === 'search' && <StudentSearch />}
        {section === 'feedback' && <StudentFeedback />}


      </div>

    </div>
  );
}
