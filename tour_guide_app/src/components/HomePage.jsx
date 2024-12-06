import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { HelpOutline, AttachMoney, ThumbUpAlt } from '@mui/icons-material';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();

  return (
    <>
      <ResponsiveAppBar />

      {location.pathname === '/home' && (
        <Box>
          <Box
            sx={{
              backgroundImage: 'url("https://themewagon.github.io/travelix/images/home_slider.jpg")',
              backgroundSize: 'cover',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textAlign: 'center',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ padding: '20px', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '8px' }}>
              <Typography variant="h2">Explore the World with Us</Typography>
              <Typography variant="h5" sx={{ marginTop: '10px' }}>
                Find your perfect tour package today
              </Typography>
              <Button
                href="#packages"
                variant="contained"
                size='large'
                sx={{
                  marginTop: '50px',
                  backgroundColor: 'orange',
                  borderRadius: '20px',
                  borderColor: 'white', color: 'white',
                  '&:hover': { backgroundColor: 'white', color: 'orange', },
                }}
              >
                Browse Tours
              </Button>
            </Box>
          </Box>

          {/* Popular Tour Packages */}
          <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>Our Popular Tour Packages</Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: 3 }}>
                  <img src="https://shangrilaresorts.com.pk/wp-content/uploads/2020/03/SHANGRILA-RESORT-4-1170x600-1.png" alt="Swiss Alps" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ marginTop: '10px' }}>Skardu Shangrilla</Typography>
                  <Typography variant="body1">Starting from PKR: 85,000</Typography>
                  <Button href="#" sx={{ marginTop: '10px', color: 'white', marginBottom: '10px', backgroundColor: 'orange', '&:hover': { backgroundColor: '#ff8c00' } }}>Learn More</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: 3 }}>
                  <img src="https://tripmaker.pk/wp-content/uploads/2023/03/nar7.jpg" alt="Swiss Alps" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ marginTop: '10px' }}>Saif ul Malook Lake</Typography>
                  <Typography variant="body1">Starting from PKR: 58,000</Typography>
                  <Button href="#" sx={{ marginTop: '10px', color: 'white', marginBottom: '10px', backgroundColor: 'orange', '&:hover': { backgroundColor: '#ff8c00' } }}>Learn More</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: 3 }}>
                  <img src="https://shangrilaresorts.com.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-1.05.24-PM-700x466.jpeg" alt="Swiss Alps" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ marginTop: '10px' }}>Skardu Soq Organic Village</Typography>
                  <Typography variant="body1">Starting from PKR: 75,000</Typography>
                  <Button href="#" sx={{ marginTop: '10px', color: 'white', marginBottom: '10px', backgroundColor: 'orange', '&:hover': { backgroundColor: '#ff8c00' } }}>Learn More</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>


          {/* Why Choose US */}

          <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
            <Typography variant="h4">Why Choose Us?</Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ paddingTop: '20px' }}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <HelpOutline sx={{ fontSize: '40px', color: '#1976d2' }} />
                  </Box>
                  <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    Expert Guides
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <AttachMoney sx={{ fontSize: '40px', color: '#1976d2' }} />
                  </Box>
                  <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    Affordable Packages
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <ThumbUpAlt sx={{ fontSize: '40px', color: '#1976d2' }} />
                  </Box>
                  <Typography variant="body1" sx={{ marginTop: '10px' }}>
                    100% Satisfaction
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>;


          {/* Testimonials */}
          <Box sx={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4">What Our Clients Say</Typography>
            <Box sx={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: 2 }}>
              <Typography variant="body1">"This tour was absolutely amazing! Highly recommended!"</Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>- Jane Doe</Typography>
            </Box>
            <Box sx={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: 2 }}>
              <Typography variant="body1">"The best travel agency ever. Everything was perfect!"</Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>- John Smith</Typography>
            </Box>
          </Box>
        </Box>
      )}


      {/* This Outlet will render the child components */}
      <Outlet />

      <Footer/>
      

    </>
  );
};

export default HomePage;
