import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { db, collection, addDoc } from "./Firebase/Firebase";
import { useUserAuth } from "./context/UserAuthProvider";
import { useNavigate } from 'react-router-dom';


const SignupForm = () => {

  const { Signup } = useUserAuth()

  const navigate = useNavigate();

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


  const handleSubmit = async (event) => {
    event.preventDefault();
    const {name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = {
      userName: name,
      userEmail: email,
      userPassword: password,
    };
    try {
      await Signup(email, password);
      const docRef = await addDoc(collection(db, "Users"), users);
      console.log("Document written with ID: ", docRef.id);
      alert("Sucessfuly created !");

      setFormData(
        {
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
      )
      
      navigate("/signin")

    } catch (error) {
      console.log("Error>>", error);
    }
  };

  return (
    <div className = "bg-gray-200">
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
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange", // Outline color on focus
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "orange", // Label color on focus
                  },
                }}
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
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange", // Outline color on focus
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "orange", // Label color on focus
                  },
                }}
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
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange", // Outline color on focus
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "orange", // Label color on focus
                  },
                }}
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
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange", // Outline color on focus
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "orange", // Label color on focus
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: 2, backgroundColor: 'orange', '&:hover': { backgroundColor: '#ff8c00' } }}
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
    </div>
    
  );
}

export default SignupForm;
