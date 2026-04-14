function Login({ setUser }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>V-MEDO Login</h2>

      <button onClick={() => setUser({ role: "student" })}>
        Login as Student
      </button>

      <button onClick={() => setUser({ role: "physician" })}>
        Login as Physician
      </button>
    </div>
  );
}

export default Login;
