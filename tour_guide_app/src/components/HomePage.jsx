import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { HelpOutline, AttachMoney, ThumbUpAlt } from '@mui/icons-material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Outlet, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();

  return (
    <>
      <ResponsiveAppBar />

      {/* Only show the content when the current route is exactly '/home' */}
      {location.pathname === '/home' && (
        <Box>
          {/* Hero Section */}
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
                  <Typography variant="h6" sx={{ marginTop: '10px' }}>Explore the Swiss Alps</Typography>
                  <Typography variant="body1">Starting from $1200</Typography>
                  <Button href="#" sx={{ marginTop: '10px', color: 'white', marginBottom: '10px', backgroundColor: 'orange', '&:hover': { backgroundColor: '#ff8c00' } }}>Learn More</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: 3 }}>
                  <img src="https://shangrilaresorts.com.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-1.05.24-PM-700x466.jpeg" alt="Swiss Alps" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ marginTop: '10px' }}>Explore the Swiss Alps</Typography>
                  <Typography variant="body1">Starting from $1200</Typography>
                  <Button href="#" sx={{ marginTop: '10px', color: 'white', marginBottom: '10px', backgroundColor: 'orange', '&:hover': { backgroundColor: '#ff8c00' } }}>Learn More</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: 3 }}>
                  <img src="https://shangrilaresorts.com.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-1.05.24-PM-700x466.jpeg" alt="Swiss Alps" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ marginTop: '10px' }}>Explore the Swiss Alps</Typography>
                  <Typography variant="body1">Starting from $1200</Typography>
                  <Button href="#" sx={{ marginTop: '10px', color: 'white', marginBottom: '10px', backgroundColor: 'orange', '&:hover': { backgroundColor: '#ff8c00' } }}>Learn More</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: 3 }}>
                  <img src="https://shangrilaresorts.com.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-1.05.24-PM-700x466.jpeg" alt="Swiss Alps" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ marginTop: '10px' }}>Explore the Swiss Alps</Typography>
                  <Typography variant="body1">Starting from $1200</Typography>
                  <Button href="#" sx={{ marginTop: '10px', color: 'white', marginBottom: '10px', backgroundColor: 'orange', '&:hover': { backgroundColor: '#ff8c00' } }}>Learn More</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: 3 }}>
                  <img src="https://shangrilaresorts.com.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-20-at-1.05.24-PM-700x466.jpeg" alt="Swiss Alps" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Typography variant="h6" sx={{ marginTop: '10px' }}>Explore the Swiss Alps</Typography>
                  <Typography variant="body1">Starting from $1200</Typography>
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

      {/* Footer Section */}
      <footer className="text-gray-600 body-font bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto py-16 px-5 flex flex-wrap md:flex-nowrap">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-blue-800">
              {/* SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-2xl font-bold">ExploreWorld</span>
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Your journey begins here. Explore breathtaking destinations with curated packages.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-blue-900 tracking-widest text-sm mb-3">DESTINATIONS</h2>
              <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-blue-800">Asia</a></li>
                <li><a className="text-gray-600 hover:text-blue-800">Europe</a></li>
                <li><a className="text-gray-600 hover:text-blue-800">America</a></li>
                <li><a className="text-gray-600 hover:text-blue-800">Africa</a></li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-blue-900 tracking-widest text-sm mb-3">EXPLORE</h2>
              <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-blue-800">Popular Tours</a></li>
                <li><a className="text-gray-600 hover:text-blue-800">Adventure Packages</a></li>
                <li><a className="text-gray-600 hover:text-blue-800">Family...</a></li>
              </nav>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
};

export default HomePage;
