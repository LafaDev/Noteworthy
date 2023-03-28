import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [showPassInput, setShowPassInput] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassChange = (e) => setPassword(e.target.value);

  const emailProps = useSpring({
    opacity: showPassInput ? 0 : 1,
    transform: showPassInput ? 'translate3d(-10%, 0, 0)' : 'translate3d(0, 0, 0)',
  });

  const passProps = useSpring({
    opacity: showPassInput ? 1 : 0,
    transform: showPassInput ? 'translate3d(0, 0, 0)' : 'translate3d(10%, 0, 0)',
  });

  const handleContinue = (e) => {
    e.preventDefault();

    if (emailRegex.test(email)) {
      setShowPassInput(true);
      setShowEmailInput(false);
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  }

  const handleBack = () => {
    setShowPassInput(false);
    setShowEmailInput(true);
  }

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
          <div className="email-field-wrapper">
            {showEmailInput && (
            <animated.div style={emailProps}>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                size="small"
                error={emailError}
                helperText={emailError && "Please enter a valid email"}
                value={email}
                onChange={handleEmailChange}
              />
            </animated.div>
          )}
          {showPassInput && (
            <animated.div style={passProps}>
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                size="small"
                value={password}
                onChange={handlePassChange}
              />
            </animated.div>
          )}
          </div>
          <div className='buttons-container'>
            {showPassInput && (
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#e4af09",
                  fontSize: "12px",
                  margin: "4px",
                  alignItems: "center",
                  borderRadius: "16px"
                }}
                onClick={handleBack}
              >
                Back
              </Button>
            )}
            <Button
              variant="contained"
              style={{
                backgroundColor: "#e4af09",
                fontSize: "12px",
                margin: "4px",
                alignItems: "center",
                borderRadius: "16px"
              }}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
          <p>
            Not a user? <Link>Sign Up</Link>
          </p>
	      </div>
      </div>
    </div>
  )
};

export default Login;
