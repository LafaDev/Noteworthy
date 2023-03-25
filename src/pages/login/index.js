import TextField from '@mui/material/TextField'
import React from "react";
import { useNavigate} from "react-router-dom";
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png'
import { borderRadius } from '@mui/system';


const style = {  
    "& label.Mui-focused": {
    color: "#f5c934"
  },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#f5c934"
      }
    }
  }   
  
  

function Login(){
    return(
        <div className="login-page">
            <div className="login-box"> 
            <div className='login-box-decoration'></div>
            <div class="horizontal_dotted_line"></div>
            <div className="login-fields">
            <div className= "login-logo">            </div>
            <div className='login-title'>
                               <p>NoteWorthy</p>
                               </div>
            <TextField id="outlined-basic" label="E-mail" variant="outlined"  size="small" sx={style}/>
            <br />
            <br />
            <TextField id="outlined-basic" label="Password" variant="outlined" size="small" sx={style}/>
            <br />
            <br />

            <Button variant="contained" style={{
            backgroundColor: "#e4af09",
            fontSize: "12px",
            margin: "4px",
            alignItems: "center",
            borderRadius: "16px"
        }}>Log in</Button>
	    <br />
	    <br />
	    <p>Not a user? <Link>Sign in</Link></p>
	    </div>
            </div>
        </div>
    
        )};

export default Login;
