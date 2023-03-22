import React from "react";
import { useNavigate } from "react-router-dom";

function Editor() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Editor</h1>
      <button
        type="button"
        onClick={ () => navigate('/login') }
      >
        Go to login
      </button>
    </div>
  );
}

export default Editor;
