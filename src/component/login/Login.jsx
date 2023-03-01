import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import "./Login.css";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <div className="login">
      <h2 className="login_heading">Login </h2>

      <Box component="form">
        <div className="login_field">
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="Email"
            name="Email"
            autoComplete="Email"
            autoFocus
            helperText="Incorrect Email"
            placeholder="Email"
            InputProps={{
              startAdornment: <MailOutlineIcon style={{ color: "gray" , marginRight: "10px" }}/>,
              disableUnderline: false,
            }}
          />

          <TextField
            type={showPassword ? "text" : "password"}
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="Password"
            name="Password"
            autoComplete="Password"
            autoFocus
            helperText="Incorrect Password"
            placeholder="Password"
            InputProps={{
              startAdornment: <KeyOutlinedIcon style={{ color: "gray" , marginRight: "10px" }} />,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    style={{ outline: "none" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: false,
            }}
          />
          <div className="login_forgot_comp">
            <a href="#" className="login_forgot">
              I forgot my password
            </a>
          </div>

          <button type="submit">Sign In</button>

          <div className="login_connection">
            <span> or Sign in with: </span>
          </div>

          <div className="login_connIcons">
            <IconButton className="Icon">
              <GoogleIcon />
            </IconButton>

            <IconButton className="Icon">
              <FacebookIcon />
            </IconButton>

            <IconButton className="Icon">
              <TwitterIcon />
            </IconButton>

          </div>
        </div>
      </Box>
    </div>
  );
}

export default Login;
