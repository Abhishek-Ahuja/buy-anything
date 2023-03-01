import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './SignUp.css'
import { Button, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    const emailRef = useRef('');
    const passRef = useRef('');

    const [errors, setErrors] = useState({emailError:"", passError:""})

    const handlePassword = () => 
        setShowPassword(!showPassword);

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(passRef.current.value.length<4){
            setErrors({...errors, passError:"Password must be long"});
        }
        else if( !passRef.current.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,16}$/)     ){//passRef.current.value.length === 0){
            setErrors({...errors, passError:"Password must contain a number,special character"});
        }
        else{
        const data = new FormData(event.currentTarget);
            console.log({
            email: data.get('email'),
            password: data.get('password'),
          });
        }  
        } 

    const showEmailError = () => {
        if(emailRef.current.value.length === 0){
            setErrors({...errors, emailError:"Enter Email"});
        }
        else if( !emailRef.current.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            setErrors({...errors, emailError:"Invalid Format"});
        }
        else{
            setErrors({...errors, emailError:""});
        }
    }

    const showPasswordError = () => {
        if( passRef.current.value.length === 0){
            setErrors({...errors, passError:"Enter Password"});
        }
        else if(passRef.current.value.length >= 8){
            setErrors({...errors, passError:"Strong Password"});
        }
        else if(passRef.current.value.length <= 4){
            setErrors({...errors, passError:"Easy Password"});
        }
        
        else if(passRef.current.value.length >= 5){
            setErrors({...errors, passError:"Moderate Password"});
        }
    }
    
  return (
    <div className='signUp'>
        <div className='signUp_heading'>
            <h2>SignUp</h2>
        </div>
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div className='signUp_form'>
                <TextField
                variant='standard'
                margin='normal'
                required
                fullWidth
                id='email'
                name='email'
                autoFocus
                error = {errors.emailError}
                helperText={errors.emailError}
                inputRef={emailRef}
                label= 'Email'
                InputProps={{
                    startAdornment : <EmailOutlinedIcon className='signUp_emailIcon' style={{ fontSize: 18 }} />
                }}
                onChange = {showEmailError}
                />
                <TextField
                type={showPassword? "text" : "password"}
                variant='standard'
                label='password'
                inputRef={passRef}
                error = {errors.passError === "Enter Password" ? true : false}
                helperText={errors.passError}
                id='password'
                name='password'
                margin='normal'
                fullWidth
                required
                InputProps={{
                    startAdornment : <KeyOutlinedIcon className='signUp_emailIcon' style={{ fontSize: 18 }}  />,
                    endAdornment : (
                        <InputAdornment position='end' >
                            <IconButton onClick={handlePassword}  style={{ outline:"none" }} >
                                {
                                    showPassword ? <VisibilityOff className='signUp_emailIcon' style={{ fontSize: 18, marginLeft:"7" }} />  
                                    : <Visibility className='signUp_emailIcon' style={{ fontSize: 18,  marginLeft:"7" }} />
                                }
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                onChange = {showPasswordError}
                />

            <MuiPhoneNumber defaultCountry={'in'} />,

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ outline:"none", borderRadius:20}}
              className="signUp_button"
            >
              SignUp
            </Button>
            </div>
        </Box>
        

    </div>
  )
}

export default SignUp