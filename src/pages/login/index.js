import TextField from '@mui/material/TextField'
import React from "react";
import { useNavigate} from "react-router-dom";
import Button from '@mui/material/Button'

function Login(){
    return(
        <div className="login-page">
            <div className="login-box"> 
            <div className="login-fields">
                            <h2>Noteworthy</h2>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <br />
            <br />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <br />
            <br />
	    //Placeholder function, replace with a mechanism to check if the login is valid?
            <Button variant="contained" onClick={() => navigate('./editor')}>Log in</Button>

            </div>
            </div>
        </div>
    
        );
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
