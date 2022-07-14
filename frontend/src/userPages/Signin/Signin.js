import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";
import "./Signin.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const Signin = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <Grid container className="sabkapapa">
    < Grid item sm={12} md={6} lg={6} xl={5} className="two">
        <div className="sabkuch">
      <div className="son1">
          <p>New User Registration</p>
      </div>
      <div className="son2">
          <div className="pota1">
            <p>To make your registration easier you can log in with Facebook</p>
          { <Button variant="contained" className="facebook" startIcon={<FacebookIcon style={{fill:"#FFFFFF"}}/>}>
                continuor con facebook
              </Button> }
            </div>
          <div className="partition">
          </div>
          <div className="pota2">
              <h6>Email*</h6>
              <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
              <h6>Password*</h6>
              <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          </div>
          <div className="partition">
          </div>
          <div className="pota3">
              <h6>Greetings*</h6>
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <h6>Name*</h6>
    <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
    <h6>Surname*</h6>
    <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
    <h6>Contact telephone number*</h6>
    <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          </div>
          <div className="check">
          <div className="para">
              <input id="tick" type="checkbox"/>
              <p>I want to receive offers and promotions from enviaflores.com by mail</p>
          </div>
          <div className="para2">
              <input id="tick" type="checkbox"/>
              <p>I have read and accept the terms and conditions, and the privacy policies of EnviaFlores.com</p>
          </div>
          </div>
          <div className="pota4">
              <Button variant="contained" className="register">
                  Register
              </Button>
              <Button variant="contained" className="login">
                  I already have an account, I want to log in
              </Button>
          </div>
      </div>
      </div>
      </Grid>
    </Grid>
    
    </>
    );
};

export default Signin;