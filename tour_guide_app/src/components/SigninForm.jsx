import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 
// import { auth, onAuthStateChanged, signInWithEmailAndPassword, db, collection, addDoc } from './Firebase'; 

function SigninForm() {


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("User is logged in", user);
  //       console.log("User ID: ", user.uid);
  //       navigate('/chat')
  //     } else {
  //       console.log("No user is logged in.");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []); 

  const handleValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
  //     console.log("Successfully Signed In!", userCredential.user);
      
      
  //     await addDoc(collection(db, 'users'), {
  //       uid: userCredential.user.uid,
  //       email: userCredential.user.email,
  //       createdAt: new Date(),
  //     });

  //     alert("Successfully Signed In!");
  //     navigate('/chat');
      
    

  //   } catch (error) {
  //     console.error("Error signing in: ", error.message);
  //     alert(error.message);
  //   }
  };

  return (
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
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
  );
}

export default SigninForm;
