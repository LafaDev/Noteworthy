import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'
import styles from './styles.module.css'
import logo from '../../images/logo3.png';
import { getNewToken } from '../../services/userAPI';
import { useCookies } from 'react-cookie';

function Login() {
  const [completed, setCompleted] = useState(false);
  const [go, setGo] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookie] = useCookies(['jwt']);
  const [emailError, setEmailError] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [showPassInput, setShowPassInput] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  async function handleLogin() {
    const form = { email, password }
    const data = await getNewToken(form);

    if(data.status === 200){
      setCookie('jwt', data);
      setGo(true);
    }
  };

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

   const handleContinue = async (e) => {
    if (e !== 'Enter') e.preventDefault();

    if (!completed && emailRegex.test(email)) {
      setShowPassInput(true);
      setShowEmailInput(false);
      setEmailError(false);
      handleButtonClick();
    } else {
      setEmailError(true);
    }

    if(completed) {
      await handleLogin();
    };
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
      { go && <Navigate to="/dashboard"/> }
      <div className="login-box">
        <div className='login-box-decoration' />
        <div className="horizontal_dotted_line" />
          <div className="login-logo">
            <img className="logo" src={logo} alt="NoteWorthy logo"/>
          </div>
        <div className="login-fields">
            <div className='login-title'>
              <p className='real-title'>NoteWorthy</p>
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
                          autoFocus={true}
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
                        autoFocus={true}
                        onKeyPress={handleKeyPress}
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
