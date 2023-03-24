import TextField from '@mui/material/TextField'
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
            <Button variant="contained">Log in</Button>
            </div>
            </div>
        </div>
    
        );
}

export default Login;