import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';


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
        <div className='login-box-decoration' />
        <div className="horizontal_dotted_line" />
        <div className="login-fields">
          <div className= "login-logo" />
          <div className='login-title'>
            <p>NoteWorthy</p>
          </div>
          <TextField
            required
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            size="small"
            sx={style}
          />
          <br /> <br />
          <TextField
            required
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            sx={style}
          />
          <br /> <br />
          <Button variant="contained" style={{
            backgroundColor: "#e4af09",
            fontSize: "12px",
            margin: "4px",
            alignItems: "center",
            borderRadius: "16px"
           }}>
            Log in
          </Button>
	        <br /> <br />
	        <p>Not a user? <Link>Sign in</Link></p>
	      </div>
      </div>
    </div>
  )
};

export default Login;
