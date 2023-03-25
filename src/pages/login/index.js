import TextField from '@mui/material/TextField'
import React from "react";
import { useNavigate} from "react-router-dom";
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png'

function Login(){
    return(
        <div className="login-page">
            <div className="login-box"> 
            <div className="login-fields">
            <div className= "login-logo">
            <img src={logo} />
            </div>
            <div className='login-title'>
                               <p>Noteworthy</p>
                               </div>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" size="small" />
            <br />
            <br />
            <TextField id="outlined-basic" label="Password" variant="outlined" size="small"/>
            <br />
            <br />

            <Button variant="contained">Log in</Button>
	    <br />
	    <br />
	    <p>Not a user? <Link>Sign in</Link></p>
	    </div>
            </div>
        </div>
    
        )};

export default Login;
