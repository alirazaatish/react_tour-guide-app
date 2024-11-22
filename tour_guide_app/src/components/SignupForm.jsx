import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { UseUserAuth } from "./context/UserAuthProvider";

const SignupForm = () => {

  const [Signup]= UseUserAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 
  const handleSubmit = async(event) => {
    event.preventDefault();
    const {email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try{
      await Signup(email, password);
    }catch(error){
      console.log("Error>>", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh' }}>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleValue}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleValue}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Create Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleValue}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleValue}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Do you have an account? <a href="/signin">Sign In</a>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default SignupForm;
