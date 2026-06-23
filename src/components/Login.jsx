// Login Component - MentorX Academy
const Login = () => {
  return (
    <div style={{ maxWidth:"400px", margin:"4rem auto", padding:"2rem",
      border:"1px solid #ddd", borderRadius:"12px" }}>
      <h2>Login to MentorX</h2>
      <input type="email" placeholder="Email"
        style={{ width:"100%", padding:"10px", margin:"8px 0", borderRadius:"6px" }} />
      <input type="password" placeholder="Password"
        style={{ width:"100%", padding:"10px", margin:"8px 0", borderRadius:"6px" }} />
      <button style={{ width:"100%", padding:"10px", background:"#2980b9",
        color:"white", border:"none", borderRadius:"6px", cursor:"pointer" }}>
        Login
      </button>
    </div>
  );
};
export default Login;