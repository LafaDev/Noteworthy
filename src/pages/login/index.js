import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <button
        type="button"
        onClick={ () => navigate('/editor') }
      >
        Go to editor
      </button>
    </div>
  );
}

export default Login;
