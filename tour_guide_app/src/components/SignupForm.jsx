import React, { useState } from 'react';
import Navbar from './Navbar';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from './context/UserAuthProvider';
import { db, collection, addDoc } from "./Firebase/Firebase";
import Swal from 'sweetalert2';

function SignupForm() {
  const { Signup } = useUserAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const { name, email, password, confirmPassword } = formData;

    const users = {
      userName: name,
      userEmail: email,
      userPassword: password,
    };

    try {
      await Signup(email, password);
      const docRef = await addDoc(collection(db, "Users"), users);

      console.log("Document written with ID: ", docRef.id);

      // SweetAlert2 success message
      Swal.fire({
        title: 'Signup Successful!',
        text: 'You have successfully signed up.',
        icon: 'success',
        confirmButtonText: 'Proceed to Login',
      }).then(() => {
        // Redirect to Signin page after alert
        navigate("/signin");
      });

      // Reset form data
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error) {
      setLoading(false);
      console.log("Error>>", error);

      // SweetAlert2 error message
      Swal.fire({
        title: 'Signup Failed!',
        text: `Error: ${error.message}`,
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-200">
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
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleValue}
                autoComplete="name"
                autoFocus
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "orange",
                  },
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleValue}
                autoComplete="email"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "orange",
                  },
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleValue}
                autoComplete="current-password"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "orange",
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
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleValue}
                autoComplete="current-password"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "orange",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "orange",
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  marginTop: 2,
                  backgroundColor: 'orange',
                  '&:hover': {
                    backgroundColor: '#ff8c00',
                  }
                }}
                disabled={loading}
              >
                Sign Up
              </Button>
            </form>
            <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
              Already have an account? <a href="/signin">Sign In</a>
            </Typography>
          </Paper>
        </Box>
      </Container>
      <footer class="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Ali Raza. All Rights Reserved.</p>
      </footer>
    </div>
    </>
    
  );
}

export default SignupForm;
