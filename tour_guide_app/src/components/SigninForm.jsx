import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import { useUserAuth } from './context/UserAuthProvider';
import { auth, signInWithEmailAndPassword } from './Firebase/Firebase';
import Swal from 'sweetalert2';

function SigninForm() {

  // const { Signin } = useUserAuth()

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    // Firebase sign-in attempt
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User signed in: ", user);

        // Show success message with SweetAlert2
        Swal.fire({
          title: 'Signin Successful!',
          text: 'You have successfully logged in.',
          icon: 'success',
          confirmButtonText: 'Proceed',
        });

        // Navigate to the home page
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error('Signin error:', errorMessage);

        // Show error message with SweetAlert2
        Swal.fire({
          title: 'Signin Failed!',
          text: `Error: ${errorMessage}`,
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200">
        <Container component="main" maxWidth="xs" sx={{ height: '100vh' }}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h5" align="center" gutterBottom>
                Sign In
              </Typography>
              <form onSubmit={handleSubmit}>
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
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleValue}
                  autoComplete="current-password"
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
                  Sign In
                </Button>
              </form>
              <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
                Don't have an account? <a href="/signup">Sign Up</a>
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

export default SigninForm;
