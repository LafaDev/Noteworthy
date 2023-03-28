import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'
import styles from './styles.module.css'

function Login() {
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [showPassInput, setShowPassInput] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const emailRegex = /^\S+@\S+\.\S+$/;

  const left = {
    bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
    justifySelf: 'end',
  }
  
  const right = {
    bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
    justifySelf: 'start',
  }

  const [{ y, bg, scale }, api] = useSpring(() => ({
    y: completed ? -100 : 0,
    scale: 1,
    ...left,
  }))

  const buttonsProps = useSpring({
    transform: completed ? 'translateY(-100%)' : 'translateY(0%)',
    config: {
      tension: 200,
      friction: 20,
    },
  });

  const sliderProps = useSpring({
    transform: completed ? 'translateY(100%)' : 'translateY(0%)',
    config: {
      tension: 200,
      friction: 20,
    },
  });

  const emailProps = useSpring({
    opacity: showPassInput ? 0 : 1,
  });

  const passProps = useSpring({
    opacity: showPassInput ? 1 : 0,
  });

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const key = 'Enter';
      handleContinue(key);
    }
  }

  const handleButtonClick = () => {
    if (!completed) {
      api.start({
        y: -100,
        scale: 1,
        ...right,
      })
      setCompleted(true);
   }
  }

   const handleContinue = (e) => {
    if (e !== 'Enter') e.preventDefault();

    if (emailRegex.test(email)) {
      setShowPassInput(true);
      setShowEmailInput(false);
      setEmailError(false);
      handleButtonClick();
    } else {
      setEmailError(true);
    }
  }

  const handleBack = () => {
    if (completed) {
      api.start({
          y: 0,
          scale: 1,
          ...right,
      })
      setCompleted(false);
    }

    setShowPassInput(false);
    setShowEmailInput(true);
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className='login-box-decoration' />
        <div className="horizontal_dotted_line" />
        <div className="login-fields">
          <div className="login-logo" />
            <div className='login-title'>
              <p>NoteWorthy</p>
            </div>
            <div className="sliderUpperContainer" style={{ position: 'relative' }}>
              <animated.div className={styles.sliderContainer} style={sliderProps}>
                <div className={styles.inputContainer} />
                <animated.div className={styles.item} style={{ background: bg }}>
                  <animated.div className={styles.fg} style={{ y, scale }}>
                    {showEmailInput ? (
                      <animated.div style={emailProps}>
                        <TextField
                          id="filled-basic"
                          label="E-mail"
                          autoFocus="True"
                          onKeyPress={handleKeyPress}
                          variant="standard"
                          InputLabelProps={{
                              sx: {
                                fontSize: '16px',
                                fontFamily: 'Roboto, sans-serif',
                                color: 'white',
                                '&.Mui-focused': {
                                  color: 'white',
                                },
                              },
                            }}
                          InputProps={{
                            sx: {
                              fontSize: '16px',
                              fontFamily: 'Roboto, sans-serif',
                              color: 'white',
                              '&:before': {
                                borderBottomColor: 'white',
                              },
                              '&:after': {
                                borderBottomColor: 'yellow',
                              },
                              '&:hover:not(.Mui-disabled):before': {
                                borderBottomColor: 'white',
                              },
                            },
                          }}
                          size="normal"
                          error={emailError}
                          helperText={emailError && "Please enter a valid email"}
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </animated.div>
                    ) : ( <p className="emailInCard">{email}</p>)}
                  </animated.div>
                  {showPassInput && (
                    <animated.div style={passProps}>
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        InputLabelProps={{
                              sx: {
                                fontSize: '16px',
                                fontFamily: 'Roboto, sans-serif',
                              },
                            }}
                          InputProps={{
                            sx: {
                              fontSize: '16px',
                              fontFamily: 'Roboto, sans-serif',
                            },
                          }}
                        type="password"
                        autoFocus="true"
                        variant="outlined"
                        size="small"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </animated.div>
                  )}
                </animated.div>
              </animated.div>
            </div>
            <animated.div className='buttons-container' style={buttonsProps}>
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
          </animated.div>
          <p>Not a user? <Link>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
