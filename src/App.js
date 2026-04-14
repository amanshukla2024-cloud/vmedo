import React, { useState } from "react";

// LOGIN
import Login from "./Login";

// STUDENT
import Student from "./components/Student";

// PHYSICIAN
import Physician from "./component2/Physician";

// ADMIN (placeholder)
import Admin from "./component3/Admin.js";


function App() {
  const [role, setRole] = useState(null);

  return (
    <>
      {!role && <Login setRole={setRole} />}

      {role === "student" && <Student />}
      {role === "physician" && <Physician />}
      {role === "admin" && <Admin />}
    </>
  );
}

export default App;
